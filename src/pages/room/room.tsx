import Video from 'components/Video';
import * as React from 'react';
import { WebRTCUser } from 'types';
import io from 'socket.io-client';
import { useRef, useCallback, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { CONFIG, SOCKET_SERVER_URL } from 'utils';
import { Container } from 'assets/styles/global-styled';

interface MatchParams {
	id: string;
}

function Room({ match }: RouteComponentProps<MatchParams>) {
	const socketRef = useRef<SocketIOClient.Socket>();
	const pcsRef = useRef<{ [socketId: string]: any }>({});
	const localVideoRef = useRef<HTMLVideoElement>(null);
	const localStreamRef = useRef<MediaStream>();
	const [users, setUsers] = useState<WebRTCUser[]>([]);

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
			<video
				playsInline
				style={{
					width: 240,
					height: 240,
					margin: 5,
					backgroundColor: 'black',
				}}
				muted
				ref={localVideoRef}
				autoPlay
			/>
			{users.map((user, index) => (
				<Video key={index} email={user.email} stream={user.stream} />
			))}
		</Container>
	);
}

export default Room;
