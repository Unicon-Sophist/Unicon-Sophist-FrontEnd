import { Container, FlexContainer, SpacerBottom } from 'assets/styles/global-styled';
import Aside from 'components/Aside';
import CommonSwiper from 'components/CommonSwiper';
import * as React from 'react';
import styled from 'styled-components';

const MyClass = () => {
	return (
		<Container>
			<SpacerBottom size={150} />
			<FlexContainer aligin="flex-start" justify="flex-start">
				<Aside />
				<AsideContent>
					<CommonSwiper />
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

export default MyClass;
