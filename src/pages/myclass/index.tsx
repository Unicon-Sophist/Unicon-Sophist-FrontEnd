import { Container, FlexContainer, SpacerBottom, TitleFont } from 'assets/styles/global-styled';
import Aside from 'components/Aside';
import ClassItem from 'components/ClassItem';
import CommonSwiper from 'components/CommonSwiper';
import * as React from 'react';
import styled from 'styled-components';
import MyReview from './MyReview';

const MyClass = () => {
	return (
		<Container>
			<SpacerBottom size={150} />
			<FlexContainer aligin="flex-start" justify="flex-start">
				<Aside />
				<AsideContent>
					<TitleContainer>
						<TitleFont>내가 개설한 모임</TitleFont>
					</TitleContainer>

					<CommonSwiper />

					<SpacerBottom size={100} />

					<FlexContainer justify="flex-start" flexWrap="wrap">
						<ClassItem hasmargin={true} index={0} />
						<ClassItem hasmargin={true} index={1} />
						<ClassItem hasmargin={true} index={2} />
						<ClassItem hasmargin={true} index={3} />
						<ClassItem hasmargin={true} index={4} />
					</FlexContainer>

					<SpacerBottom size={100} />

					<TitleContainer>
						<TitleFont>나의 소감문</TitleFont>
					</TitleContainer>
					<MyReview />
				</AsideContent>
			</FlexContainer>
			<SpacerBottom size={150} />
		</Container>
	);
};

const AsideContent = styled.div`
	width: calc(100% - 445px);
	margin-left: 135px;
`;

const TitleContainer = styled.div`
	margin-bottom: 30px;
`;
export default MyClass;
