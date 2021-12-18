import * as React from 'react';
import { useRef } from 'react';
import camera from 'assets/img/camera.png';
import defaultProfile from 'assets/img/default-profile.png';
import styled from 'styled-components';

const ModifyProfileUploader = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const uploadImage = () => {};
	return (
		<InputFileWrap>
			<InputFileContainer
				onMouseUpCapture={(e) => (inputRef.current ? inputRef.current.click() : '')}
			>
				<ProfileImgContainer>
					<ProfileImg src={defaultProfile} alt="defaultProfile" />
				</ProfileImgContainer>
			</InputFileContainer>
			<InputFile type={'file'} ref={inputRef} onChange={uploadImage} />
		</InputFileWrap>
	);
};

const ProfileImgContainer = styled.div`
	position: relative;
	&:after {
		position: absolute;
		content: '';
		background-image: url(${camera});
		background-size: 30px 30px;
		background-repeat: no-repeat;
		background-position: center;
		background-color: white;
		width: 30px;
		height: 30px;
		right: 10px;
		bottom: 10px;
		transform: translateX(10px);
		border-radius: 50%;
	}
`;
const InputFileContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const ProfileImg = styled.img`
	border-radius: 50%;
	width: 100px;
	height: 100px;
	position: relative;
`;
const InputFile = styled.input`
	display: none;
`;
const InputFileWrap = styled.div`
	margin-bottom: 0;
	@media only screen and (max-width: 768px) {
		margin-bottom: 50px;
	}
`;
export default ModifyProfileUploader;
