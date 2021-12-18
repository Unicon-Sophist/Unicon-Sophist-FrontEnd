import * as React from 'react';
import styled from 'styled-components';
import home from 'assets/img/icon-home.png';
import category from 'assets/img/icon-category.png';
import book from 'assets/img/icon-book.png';
import heart from 'assets/img/icon-heart.png';
import user from 'assets/img/icon-user.png';

import homeActive from 'assets/img/icon-home-active.png';
import categoryActive from 'assets/img/icon-category-active.png';
import heartActive from 'assets/img/icon-heart-active.png';
import bookActive from 'assets/img/icon-book-active.png';
import userActive from 'assets/img/icon-user-active.png';
import Color from 'assets/styles/color';
import { useLocation, Link } from 'react-router-dom';

const MobileBottomTab = () => {
	const location = useLocation();

	return (
		<BottomTabContainer>
			<BottomTab to="/">
				<TabIcon src={location.pathname === '/' ? homeActive : home} />
				<TabText isActive={location.pathname === '/'}>홈</TabText>
			</BottomTab>
			<BottomTab to="/">
				<TabIcon src={location.pathname === '/category' ? categoryActive : category} />
				<TabText>카테고리</TabText>
			</BottomTab>
			<BottomTab to="/mypage/class">
				<TabIcon src={location.pathname === '/mypage/class' ? bookActive : book} />
				<TabText>나의모임</TabText>
			</BottomTab>
			<BottomTab to="/">
				<TabIcon src={location.pathname === '/heart' ? heartActive : heart} />
				<TabText>찜목록</TabText>
			</BottomTab>
			<BottomTab to="/mypage">
				<TabIcon src={location.pathname === '/mypage' ? userActive : user} />
				<TabText isActive={location.pathname === '/mypage'}>마이페이지</TabText>
			</BottomTab>
		</BottomTabContainer>
	);
};

export default MobileBottomTab;

const BottomTabContainer = styled.div`
	display: none;
	align-items: center;
	justify-content: space-around;
	height: 60px;
	position: fixed;
	bottom: 0;
	width: 100%;
	background-color: white;
	z-index: 99;
	box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.03);
	@media only screen and (max-width: 768px) {
		display: flex;
	}
`;
const BottomTab = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const TabIcon = styled.img`
	width: 24px;
	height: 24px;
	margin-bottom: 3px;
`;
const TabText = styled.p<{ isActive?: boolean }>`
	font-size: 12px;
	line-height: 14px;
	color: ${({ isActive }) => (isActive ? Color.fontPink : Color.fontGray)};
`;
