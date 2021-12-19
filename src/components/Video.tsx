import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface Props {
	email: string;
	stream: MediaStream;
	muted?: boolean;
}

const Video = ({ email, stream, muted }: Props) => {
	const ref = useRef<HTMLVideoElement>(null);
	const [isMuted, setIsMuted] = useState<boolean>(true);

	useEffect(() => {
		if (ref.current) ref.current.srcObject = stream;
		if (muted) setIsMuted(muted);
	}, [stream, muted]);

	return (
		<OtherVidioContainer>
			<OtherVidio ref={ref} muted={isMuted} autoPlay />
		</OtherVidioContainer>
	);
};

export default Video;

const OtherVidioContainer = styled.div`
	width: 12.5%;
	margin-left: 10px;
	margin-right: 10px;
`;
const OtherVidio = styled.video`
	display: black;
	width: 100%;
`;
