import React, { useEffect, useRef, useState } from 'react';
interface Props {
	email: string;
	stream: MediaStream;
	muted?: boolean;
}

const Video = ({ email, stream, muted }: Props) => {
	const ref = useRef<HTMLVideoElement>(null);
	const [isMuted, setIsMuted] = useState<boolean>(false);

	useEffect(() => {
		if (ref.current) ref.current.srcObject = stream;
		if (muted) setIsMuted(muted);
	}, [stream, muted]);

	return (
		<div className="video-wrapper">
			<video className="video-item" ref={ref} muted={isMuted} autoPlay />
			<label>{email}</label>
		</div>
	);
};

export default Video;
