import styled, { createGlobalStyle } from 'styled-components';
import Color from './color';
import customLibaryCss from './custom-libary-css';
import reset from './reset';
import RIDIBatang from '../fonts/RIDIBatang.woff';

export const Main = styled.div`
	position: relative;
`;

export const OnlyShow = styled.div<{ isMobile: boolean; display: string }>`
	display: ${({ display, isMobile }) => (isMobile ? display : 'none')};

	@media only screen and (max-width: 768px) {
		display: ${({ display, isMobile }) => (isMobile ? 'none' : display)};
	}
`;

// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.
const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: RIDIBatang;
	src: url(${RIDIBatang});
	font-weight: normal;
}

@font-face {
	font-family: RIDIBatang-bold;
	src: url(${RIDIBatang});
	font-weight: bold;
}
${reset}
${customLibaryCss}
html {}
* {
  font-family: Noto Sans KR, sans-serif;
  box-sizing: border-box;
	font-weight: 400;
}
a {
	color: inherit;
}
`;

export const Container = styled.div`
	max-width: 1470px;
	margin: auto;
	padding-right: 10px;
	padding-left: 10px;
`;

export const ContainerSmall = styled.div`
	max-width: 430px;
	margin: auto;
	padding-right: 15px;
	padding-left: 15px;

	padding-top: 135px;
	padding-bottom: 135px;

	@media only screen and (max-width: 768px) {
		padding-top: 50px;
		padding-bottom: 80px;
	}
`;

export const TitleFont = styled.h4<{ isBig?: boolean }>`
	font-size: ${({ isBig }) => (isBig ? '34px' : '22px')};
	line-height: ${({ isBig }) => (isBig ? '42px' : '28px')};
	color: ${Color.fontBrown};
	font-family: RIDIBatang;
	font-weight: 400;

	@media only screen and (max-width: 768px) {
		font-size: ${({ isBig }) => (isBig ? '24px' : '32px')};
		line-height: ${({ isBig }) => (isBig ? '28px' : '36px')};
	}
`;

export const H1 = styled.h1<{ weight?: string; align?: string }>`
	font-size: 40px;
	font-weight: ${(props) => (props.weight === 'bold' ? 'props' : 'normal')};
	text-align: ${(props) => (props.align ? props.align : 'center')};

	@media only screen and (max-width: 768px) {
		font-size: 28px;
	}
`;

export const H2 = styled.h2`
	font-size: 36px;

	@media only screen and (max-width: 768px) {
		font-size: 24px;
	}
`;

export const H3 = styled.h3`
	font-size: 32px;

	@media only screen and (max-width: 768px) {
		font-size: 20px;
	}
`;

export const H4 = styled.h4`
	font-size: 30px;

	@media only screen and (max-width: 768px) {
		font-size: 18px;
	}
`;

export const BodyFont = styled.p<{
	size?: number;
	mSize?: number;
	lineHeight?: number;
	mLineHeight?: number;
	fontWeight?: number;
	color?: string;
	fontRIDIBatang?: boolean;
}>`
	font-size: ${(props) => (props.size ? props.size + 'px' : '16px')};
	line-height: ${(props) => (props.lineHeight ? props.lineHeight + 'px' : '21px')};
	font-weight: ${(props) => (props.fontWeight ? props.fontWeight + 'px' : '400')};
	color: ${(props) => (props.color ? props.color : Color.fontBlack)};

	font-family: ${({ fontRIDIBatang }) =>
		fontRIDIBatang ? 'RIDIBatang' : 'Noto Sans KR,sans-serif'};

	@media only screen and (max-width: 768px) {
		font-size: ${(props) => (props.mSize ? props.mSize + 'px' : props.size + 'px')};
		line-height: ${(props) =>
			props.mLineHeight ? props.mLineHeight + 'px' : props.lineHeight + 'px'};
	}
`;
export const SpacerBottom = styled.div<{ size?: number; mSize?: number }>`
	margin-bottom: ${(props) => props.size}px;

	@media only screen and (max-width: 768px) {
		margin-bottom: ${(props) => (props.mSize ? props.mSize : props.size)}px;
	}
`;
export const SpacerTop = styled.div<{ size?: number }>`
	margin-top: ${(props) => props.size}px;
`;

export const SpacerRight = styled.div<{ size?: number }>`
	margin-right: ${(props) => props.size}px;
`;

export const SpacerLeft = styled.div<{ size?: number }>`
	margin-left: ${(props) => props.size}px;
`;

export const FlexContainer = styled.div<{
	aligin?: string;
	justify?: string;
	direction?: string;
	flexWrap?: string;
}>`
	display: flex;
	align-items: ${(props) => (props.aligin ? props.aligin : 'center')};
	justify-content: ${(props) => (props.justify ? props.justify : 'center')};
	flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
	flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : 'nowrap')};
`;

export const NoShrinkContainer = styled.div`
	flex-shrink: 0;
`;

export const BottomLine = styled.div<{ size?: number; color?: string }>`
	width: 100%;
	height: 1px;
	border-bottom: 1px solid ${(props) => (props.color ? props.color : Color.borderGray)};
`;
export default GlobalStyle;
