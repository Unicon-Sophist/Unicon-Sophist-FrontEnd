import * as React from 'react';
import { BodyFont, Container, SpacerBottom, TitleFont } from 'assets/styles/global-styled';
import styled from 'styled-components';
import MainTopSlider from './MainTopSlider';
import Color from 'assets/styles/color';
import CategorSlider from './CategorySlider';
import CommonSwiper from 'components/CommonSwiper';
import ClassItem from 'components/ClassItem';
import { isMobileSize } from 'utils';

const Main = () => {
	return (
		<main>
			<MainTopSlider />
			<SpacerBottom size={200} mSize={100} />

			<Container>
				<TitleFont isBig={true}>Categories</TitleFont>
				<SpacerBottom size={20} mSize={5} />
				<TitleDesc mSize={14}>
					소피스트에서 즐길 수 있는 다양한 모임 종류를 소개합니다.
				</TitleDesc>
				<SpacerBottom size={30} />
				<CategorSlider />
			</Container>

			<SpacerBottom size={200} mSize={100} />

			<Container>
				<TitleFont isBig={true}>BEST Meeting</TitleFont>
				<SpacerBottom size={20} mSize={5} />
				<TitleDesc mSize={14}>
					소피스트에서 즐길 수 있는 다양한 모임 종류를 소개합니다.
				</TitleDesc>
				<SpacerBottom size={30} />
			</Container>

			<PaddingContainer>
				<CommonSwiper Item={<ClassItem size={isMobileSize ? 130 : 300} />} />
			</PaddingContainer>

			<SpacerBottom size={300} mSize={100} />

			<Container>
				<TitleFont isBig={true}>New Meeting</TitleFont>
				<SpacerBottom size={20} mSize={5} />
				<TitleDesc mSize={14}>
					소피스트에서 즐길 수 있는 다양한 모임 종류를 소개합니다.
				</TitleDesc>
				<SpacerBottom size={30} />
				<CommonSwiper Item={<ClassItem size={isMobileSize ? 130 : 300} />} />
			</Container>

			<SpacerBottom size={100} mSize={100} />

			<Container>
				<TitleFont isBig={true}>New Meeting</TitleFont>
				<SpacerBottom size={20} mSize={5} />
				<TitleDesc mSize={14}>
					소피스트에서 즐길 수 있는 다양한 모임 종류를 소개합니다.
				</TitleDesc>
				<SpacerBottom size={30} />
				<CommonSwiper Item={<ClassItem size={isMobileSize ? 130 : 300} />} />
			</Container>

			<SpacerBottom size={100} mSize={100} />

			<Container>
				<TitleFont isBig={true}>New Meeting</TitleFont>
				<SpacerBottom size={20} mSize={5} />
				<TitleDesc mSize={14}>
					소피스트에서 즐길 수 있는 다양한 모임 종류를 소개합니다.
				</TitleDesc>
				<SpacerBottom size={30} />
				<CommonSwiper Item={<ClassItem size={isMobileSize ? 130 : 300} />} />
			</Container>

			<SpacerBottom size={200} mSize={150} />
		</main>
	);
};

export default Main;

const TitleDesc = styled(BodyFont)`
	color: ${Color.fontGray};
`;
const PaddingContainer = styled.div`
	padding-left: 40px;
	padding-right: 40px;

	@media only screen and (max-width: 768px) {
		padding-left: 5px;
		padding-right: 5px;
	}
`;
