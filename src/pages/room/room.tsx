import Video from 'components/Video';
import * as React from 'react';
import { WebRTCUser, MatchParams, ChattingListType } from 'types';
import io from 'socket.io-client';
import { useRef, useCallback, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { CONFIG, SOCKET_SERVER_URL, tempChattingList } from 'utils';
import { Container, SpacerBottom } from 'assets/styles/global-styled';
import styled from 'styled-components';
import Color from 'assets/styles/color';
import chatIcon from 'assets/img/chat-icon.png';

function Room({ match }: RouteComponentProps<MatchParams>) {
	const [users, setUsers] = useState<WebRTCUser[]>([]);
	const [chattingList, setChattingList] = useState<ChattingListType>(tempChattingList);
	const [chattingContent, setChattingContent] = useState<string>('');
	const socketRef = useRef<SocketIOClient.Socket>();
	const pcsRef = useRef<{ [socketId: string]: any }>({});
	const localVideoRef = useRef<HTMLVideoElement>(null);
	const localStreamRef = useRef<MediaStream>();
	const chatRef = useRef<HTMLInputElement>(null);

	const submitChatting = () => {
		setChattingList([...chattingList, { nickname: 'pushTest', content: chattingContent }]);
		setChattingContent('');

		setTimeout(() => {
			if (chatRef.current) {
				chatRef.current.scrollIntoView({
					behavior: 'smooth',
					block: 'end',
					inline: 'nearest',
				});
			}
		}, 0);
	};

	const getLocalStream = useCallback(async () => {
		try {
			const localStream = await navigator.mediaDevices.getUserMedia({
				audio: true,
				video: {
					width: 240,
					height: 240,
				},
			});
			localStreamRef.current = localStream;
			if (localVideoRef.current) localVideoRef.current.srcObject = localStream;
			if (!socketRef.current) return;
			socketRef.current.emit('join_room', {
				room: match.params.id,
				email: 'sample@naver.com',
			});
		} catch (e) {
			console.log(`getUserMedia error: ${e}`);
		}
	}, [match.params.id]);

	const createPeerConnection = useCallback((socketID: string, email: string) => {
		try {
			const pc = new RTCPeerConnection(CONFIG);

			pc.onicecandidate = (e) => {
				if (!(socketRef.current && e.candidate)) return;
				console.log('onicecandidate');
				socketRef.current.emit('candidate', {
					candidate: e.candidate,
					candidateSendID: socketRef.current.id,
					candidateReceiveID: socketID,
				});
			};

			pc.ontrack = (e) => {
				console.log('ontrack success');
				setUsers((oldUsers) =>
					oldUsers
						.filter((user) => user.id !== socketID)
						.concat({
							id: socketID,
							email,
							stream: e.streams[0],
						}),
				);
			};

			if (localStreamRef.current) {
				console.log('localstream add');
				localStreamRef.current.getTracks().forEach((track) => {
					if (!localStreamRef.current) return;
					pc.addTrack(track, localStreamRef.current);
				});
			} else {
				console.log('no local stream');
			}

			return pc;
		} catch (e) {
			console.error(e);
			return undefined;
		}
	}, []);

	useEffect(() => {
		socketRef.current = io.connect(SOCKET_SERVER_URL);
		getLocalStream();

		socketRef.current.on('all_users', (allUsers: Array<{ id: string; email: string }>) => {
			allUsers.forEach(async (user) => {
				if (!localStreamRef.current) return;
				const pc = createPeerConnection(user.id, user.email);
				if (!(pc && socketRef.current)) return;
				pcsRef.current = { ...pcsRef.current, [user.id]: pc };
				try {
					const localSdp = await pc.createOffer({
						offerToReceiveAudio: true,
						offerToReceiveVideo: true,
					});
					await pc.setLocalDescription(new RTCSessionDescription(localSdp));
					socketRef.current.emit('offer', {
						sdp: localSdp,
						offerSendID: socketRef.current.id,
						offerSendEmail: 'offerSendSample@sample.com',
						offerReceiveID: user.id,
					});
				} catch (e) {
					console.error(e);
				}
			});
		});

		socketRef.current.on(
			'getOffer',
			async (data: {
				sdp: RTCSessionDescription;
				offerSendID: string;
				offerSendEmail: string;
			}) => {
				const { sdp, offerSendID, offerSendEmail } = data;
				console.log('get offer');
				if (!localStreamRef.current) return;
				const pc = createPeerConnection(offerSendID, offerSendEmail);
				if (!(pc && socketRef.current)) return;
				pcsRef.current = { ...pcsRef.current, [offerSendID]: pc };
				try {
					await pc.setRemoteDescription(new RTCSessionDescription(sdp));
					console.log('answer set remote description success');
					const localSdp = await pc.createAnswer({
						offerToReceiveVideo: true,
						offerToReceiveAudio: true,
					});
					await pc.setLocalDescription(new RTCSessionDescription(localSdp));
					socketRef.current.emit('answer', {
						sdp: localSdp,
						answerSendID: socketRef.current.id,
						answerReceiveID: offerSendID,
					});
				} catch (e) {
					console.error(e);
				}
			},
		);

		socketRef.current.on(
			'getAnswer',
			(data: { sdp: RTCSessionDescription; answerSendID: string }) => {
				const { sdp, answerSendID } = data;
				console.log('get answer');
				const pc: RTCPeerConnection = pcsRef.current[answerSendID];
				if (!pc) return;
				pc.setRemoteDescription(new RTCSessionDescription(sdp));
			},
		);

		socketRef.current.on(
			'getCandidate',
			async (data: { candidate: RTCIceCandidateInit; candidateSendID: string }) => {
				console.log('get candidate');
				const pc: RTCPeerConnection = pcsRef.current[data.candidateSendID];
				if (!pc) return;
				await pc.addIceCandidate(new RTCIceCandidate(data.candidate));
				console.log('candidate add success');
			},
		);

		socketRef.current.on('user_exit', (data: { id: string }) => {
			if (!pcsRef.current[data.id]) return;
			pcsRef.current[data.id].close();
			delete pcsRef.current[data.id];
			setUsers((oldUsers) => oldUsers.filter((user) => user.id !== data.id));
		});

		return () => {
			if (socketRef.current) {
				socketRef.current.disconnect();
			}

			users.forEach((user) => {
				if (!pcsRef.current[user.id]) return;
				pcsRef.current[user.id].close();
				delete pcsRef.current[user.id];
			});
		};
		// eslint-disable-next-line
	}, []);

	return (
		<Container>
			<SpacerBottom size={50} mSize={10} />
			<ViewWrap>
				<VideoContainer>
					<MyVideo muted={true} ref={localVideoRef} autoPlay />
					<OtherVideoContainer>
						{users.map((user, index) => (
							<Video key={index} email={user.email} stream={user.stream} />
						))}
					</OtherVideoContainer>
				</VideoContainer>
				<ChattingWrap>
					<ChattingContainer>
						<ChattingInner ref={chatRef}>
							{chattingList.map((i) => {
								return (
									<Chatting>
										<ChattingIconContainer>
											<ChattingIcon src={chatIcon} alt={'chatIcon'} />
										</ChattingIconContainer>
										<ChattingTextContainer>
											<ChattingNickname>{i.nickname}</ChattingNickname>
											<ChattingText>{i.content}</ChattingText>
										</ChattingTextContainer>
									</Chatting>
								);
							})}
						</ChattingInner>
					</ChattingContainer>
					<ChattingInputContainer>
						<ChattingInput
							value={chattingContent}
							onChange={(e) => setChattingContent(e.target.value)}
						/>
						<ChattingSubmitBtn type="button" value="채팅" onClick={submitChatting} />
					</ChattingInputContainer>
				</ChattingWrap>
			</ViewWrap>
			<SpacerBottom size={150} />
		</Container>
	);
}

export default Room;
const Chatting = styled.div`
	display: flex;
	border-bottom: 1px solid ${Color.borderGray};
	padding-bottom: 10px;
	padding-top: 10px;
`;
const ChattingIconContainer = styled.div`
	flex-shrink: 0;
	margin-right: 20px;
`;
const ChattingIcon = styled.img``;
const ChattingTextContainer = styled.div``;
const ChattingNickname = styled.p`
	font-size: 14px;
	margin-bottom: 5px;
`;
const ChattingText = styled.p`
	font-size: 14px;
`;
const OtherVideoContainer = styled.div`
	display: flex;
	margin-left: -10px;
	margin-right: -10px;
`;
const MyVideo = styled.video`
	display: block;
	width: 100%;
	margin-bottom: 20px;

	@media only screen and (max-width: 768px) {
		height: 250px;
	}
`;

const VideoContainer = styled.div`
	width: 40%;
	margin-right: 100px;
	@media only screen and (max-width: 768px) {
		width: 100%;
		margin-right: 0;
		margin-bottom: 20px;
	}
`;

const ViewWrap = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;

	@media only screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

const ChattingContainer = styled.div`
	height: 100%;
	padding-bottom: 30px;
	position: relative;
	overflow-y: auto;
	padding-right: 30px;
	padding-left: 20px;
`;

const ChattingInner = styled.div``;
const ChattingInput = styled.input`
	border: none;
	border-bottom: 1px solid ${Color.borderGray};
	width: 100%;
	padding-right: 35px;
	font-size: 14px;
	background-color: transparent;
`;
const ChattingSubmitBtn = styled.input`
	height: 30px;
	position: absolute;
	right: 10px;
	background: ${Color.mainPink};
	border: none;
	color: white;
	bottom: 1px;
`;
const ChattingWrap = styled.div`
	padding: 10px;
	padding-right: 0px;
	padding-bottom: 40px;
	border: 1px solid ${Color.borderGray};
	width: 30%;
	margin-left: 50px;
	height: 680px;
	border-radius: 20px;
	overflow-y: hidden;
	overflow-x: hidden;
	position: relative;
	@media only screen and (max-width: 768px) {
		width: 100%;
		margin-left: 0px;
		height: 300px;
	}
`;
const ChattingInputContainer = styled.div`
	width: 100%;
	position: absolute;
	bottom: 10px;
	left: -10px;
	z-index: 2;
	padding-left: 20px;
	padding-right: 20px;
`;
