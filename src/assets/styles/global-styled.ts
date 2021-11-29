import styled, { createGlobalStyle } from 'styled-components';
import Color from './color';
import customSwiperCss from './custom-swiper-css';
import reset from './reset';

export const Main = styled.div`
	position: relative;
`;

// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.
const GlobalStyle = createGlobalStyle`
${reset}
${customSwiperCss}
html {
	scroll-behavior: smooth;
}
* {
  font-family: 'Noto Sans KR', sans-serif;
  box-sizing: border-box;
}
a {
	color: inherit;
}
`;

export const Container = styled.div`
	max-width: 1470px;
	margin: auto;
	padding-right: 15px;
	padding-left: 15px;
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
		padding-bottom: 50px;
	}
`;

export const H1 = styled.h1<{ weight?: string; align?: string }>`
	font-size: 40px;
	font-weight: ${(props) => (props.weight === 'bold' ? 'props' : 'normal')};
	text-align: ${(props) => (props.align ? props.align : 'center')};
`;

export const H2 = styled.h2`
	font-size: 36px;
`;

export const H3 = styled.h3`
	font-size: 32px;
`;

export const H4 = styled.h4`
	font-size: 30px;
`;

export const BodyFont = styled.p<{
	size?: number;
	lineHeight?: number;
	fontWeight?: number;
	color?: string;
}>`
	font-size: ${(props) => (props.size ? props.size + 'px' : '16px')};
	line-height: ${(props) => (props.lineHeight ? props.lineHeight + 'px' : '21px')};
	font-weight: ${(props) => (props.fontWeight ? props.fontWeight + 'px' : '400')};
	color: ${(props) => (props.color ? props.color : Color.fontBlack)};
`;
export const SpacerBottom = styled.div<{ size?: number }>`
	margin-bottom: ${(props) => props.size}px;
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

export const FlexContainer = styled.div<{ aligin?: string; justify?: string; direction?: string }>`
	display: flex;
	align-items: ${(props) => (props.aligin ? props.aligin : 'center')};
	justify-content: ${(props) => (props.justify ? props.justify : 'center')};
	flex-direction: ${(props) => (props.direction ? props.direction : 'row')}; ;
`;

export const NoShrinkContainer = styled.div`
	flex-shrink: 0;
`;

export default GlobalStyle;
