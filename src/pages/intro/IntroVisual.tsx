import React, { useEffect, useState } from 'react';
import Intro0 from 'assets/img/main-img4.jpg';
import styled from 'styled-components';
import { Container } from 'assets/styles/global-styled';
import Color from 'assets/styles/color';
import visualBack from 'assets/img/visual-back.jpg';

const IntroVisual = () => {
	const [start, setStart] = useState<boolean>(false);

	useEffect(() => {
		setStart(true);
	}, []);

	return (
		<IntroVisualContainer start={start}>
			<ViualDim />
			<VisualInnerContainer>
				<VisualTextContainer start={start}>
					<VisualTitleContainer>
						<VisualTitle>
							책에서 찾아낸 한줌의 소중한 문구와
							<br />
							소통하는 공간 소피스트 입니다
						</VisualTitle>
					</VisualTitleContainer>

					<VisualDesc>
						책에서 찾아낸 한줌의 소중한 문구와 <br /> 당신을 위한 책과 소통하는 공간
						소피스트 입니다.
					</VisualDesc>
				</VisualTextContainer>

				<VisualImgContainer start={start}>
					<VisualImg src={Intro0} alt="Main-img" />
				</VisualImgContainer>
			</VisualInnerContainer>
		</IntroVisualContainer>
	);
};
export default IntroVisual;

const VisualInnerContainer = styled(Container)`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const IntroVisualContainer = styled.section<{ start: boolean }>`
	padding-top: 200px;
	padding-bottom: 200px;
	background-color: ${Color.grayF7F7F7};
	opacity: ${({ start }) => (start ? 1 : 0)};
	transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	transition: 0.6s;
	background-image: url(${visualBack});
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	background-attachment: fixed;
`;
const ViualDim = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	background-color: rgba(0, 0, 0, 0.7);
`;
const VisualImg = styled.img`
	width: 520px;
	@media only screen and (max-width: 768px) {
		width: 320px;
		height: auto;
	}
`;
const VisualImgContainer = styled.div<{ start: boolean }>`
	transform: translateY(${({ start }) => (start ? `0` : `300px`)});
	transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	transition: 0.9s;
`;

const VisualTextContainer = styled.div<{ start: boolean }>`
	transform: translateY(${({ start }) => (start ? `0` : `300px`)});
	transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	transition: 0.9s;
`;

const VisualTitleContainer = styled.div`
	margin-bottom: 20px;
	@media only screen and (max-width: 768px) {
		margin-bottom: 8px;
	}
`;

const VisualTitle = styled.h3`
	font-size: 32px;
	line-height: 42px;
	font-weight: 700;
	text-align: center;
	color: white;

	@media only screen and (max-width: 768px) {
		font-size: 24px;
		line-height: 32px;
	}
`;

const VisualDesc = styled.h5`
	font-size: 16px;
	line-height: 30px;
	color: ${Color.fontPink};
	text-align: center;
	margin-bottom: 20px;

	@media only screen and (max-width: 768px) {
		font-size: 14px;
		line-height: 24px;
	}
`;
