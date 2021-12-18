import * as React from 'react';
import styled from 'styled-components';

const Drawer = () => {
	return (
		<DrawerContainer>
			<DrawerInner>
				<DrawerItem></DrawerItem>
			</DrawerInner>
		</DrawerContainer>
	);
};

export default Drawer;

const DrawerContainer = styled.div`
	position: fixed;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 100;
`;

const DrawerInner = styled.div`
	width: 70%;
	height: 100vh;
	background-color: white;
	margin-left: auto;
`;

const DrawerItem = styled.div``;
