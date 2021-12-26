import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from 'assets/img/logo.png';
import searchIcon from 'assets/img/search-icon.png';
import arrBotton from 'assets/img/arr-bottom.png';
import sqareGroup from 'assets/img/sqare-group.png';
import Color from 'assets/styles/color';
import { Container } from 'assets/styles/global-styled';
import mLogo from 'assets/img/m-logo.png';
import menu from 'assets/img/menu.png';
import defaultProfile from 'assets/img/default-profile.png';
import { useSelector } from 'react-redux';
import { userInfoName } from '../store';
import { logoutProcess } from 'store/userinfo-store';
import store from '../store';

const Header = () => {
	const { loginStatus } = useSelector((state) => state[userInfoName]);
	const [hoverMenuActive, setHoverMenuActive] = useState(false);
	let location = useLocation();

	useEffect(() => {
		setHoverMenuActive(false);
	}, [location]);

	const logout = () => {
		store.dispatch(logoutProcess());
	};

	return (
		<HeaderWrap>
			<HeaderContainer>
				<HeaderContent>
					<LogoContainer>
						<Link to="/">
							<Logo src={logo} alt="logo" />
						</Link>
					</LogoContainer>

					{loginStatus !== 'login' && (
						<LoginMenuContainer>
							<SignMenu>
								<SignLink to="/login">로그인</SignLink>
							</SignMenu>
							<SignMenu>
								<SignLink to="/sign-up">회원가입</SignLink>
							</SignMenu>
						</LoginMenuContainer>
					)}

					{loginStatus === 'login' && (
						<ProfileContainer>
							<ProfileText>알림</ProfileText>
							<ProfileText>나의 모임</ProfileText>
							<ProfileImg
								src={defaultProfile}
								onClick={() => setHoverMenuActive(!hoverMenuActive)}
							/>

							<ProfileHoverMenu isActive={hoverMenuActive}>
								<HoverMenuItem>
									<HoverMenuText to="/mypage">프로필 관리</HoverMenuText>
								</HoverMenuItem>
								<HoverMenuItem>
									<HoverMenuText to="/mypage">알림설정</HoverMenuText>
								</HoverMenuItem>
								<HoverMenuItem onClick={logout}>
									<HoverMenuText to="/mypage">로그아웃</HoverMenuText>
								</HoverMenuItem>
							</ProfileHoverMenu>
						</ProfileContainer>
					)}
				</HeaderContent>

				<HeaderContent>
					<GnbContainer>
						<GnbMenuCategoryContainer>
							<GnbMenuCategory>
								<SqareImag src={sqareGroup} alt="sqareGroup" />
								<CategoryText>카테고리</CategoryText>
								<BottomArrow src={arrBotton} alt={arrBotton} />
							</GnbMenuCategory>

							<HoverMenuContainer>
								<HoverMenuItem>
									<HoverMenuText to="/mypage">
										역사 <HoverMenuDetailText>History</HoverMenuDetailText>
									</HoverMenuText>
								</HoverMenuItem>
								<HoverMenuItem>
									<HoverMenuText to="/mypage/class">내 클래스</HoverMenuText>
								</HoverMenuItem>
								<HoverMenuItem>
									<HoverMenuText to="/notice">공지사항</HoverMenuText>
								</HoverMenuItem>
								<HoverMenuItem>
									<HoverMenuText to="/group">모임 리스트</HoverMenuText>
								</HoverMenuItem>
								<HoverMenuItem>
									<HoverMenuText to="/group/1">모임 상세</HoverMenuText>
								</HoverMenuItem>
							</HoverMenuContainer>
						</GnbMenuCategoryContainer>
						<GnbMenu>Sophist 소개</GnbMenu>
						<GnbMenu>고객센터</GnbMenu>
						<GnbMenu>NEW 모임</GnbMenu>
						<GnbMenu>BEST 모임</GnbMenu>
					</GnbContainer>

					<SearchContainer>
						<SearchInput />
						<SearchBtn type="button" />
					</SearchContainer>
				</HeaderContent>
			</HeaderContainer>

			<HeaderContainerMobile>
				<Link to="/">
					<MobileLogo src={mLogo} />
				</Link>

				<HambugerMenu src={menu} />
			</HeaderContainerMobile>
		</HeaderWrap>
	);
};

const HoverMenuText = styled(Link)`
	font-size: 14px;
	line-height: 24px;
	color: ${Color.fontBlack};
`;

const HoverMenuDetailText = styled.span`
	margin-left: 10px;
	font-family: RIDIBatang;
	color: ${Color.mainPink};
`;

const HoverMenuItem = styled.li`
	margin-bottom: 10px;
	&:hover ${HoverMenuText} {
		font-weight: bold;
	}

	&: hover ${HoverMenuDetailText} {
		border-bottom: 1px solid ${Color.mainPink};
	}
`;

const ProfileHoverMenu = styled.ul<{ isActive: boolean }>`
	position: absolute;
	background: #ffffff;
	box-shadow: 6px 7px 10px rgba(0, 0, 0, 0.05);
	border-radius: 10px;
	padding: 20px;
	transform: scale(${({ isActive }) => (isActive ? 1 : 0)});
	opacity: scale(${({ isActive }) => (isActive ? 1 : 0)});
	z-index: 100;
	transition: opacity 0.3s;
	top: 60px;
	right: 0px;
	${HoverMenuItem}:last-child {
		margin-bottom: 0;
	}
`;

const ProfileText = styled.p`
	font-size: 16px;
	line-height: 24px;
	margin-right: 20px;
	cursor: pointer;
	&:hover {
		font-weight: bold;
	}
`;

const ProfileContainer = styled.div`
	display: flex;
	position: relative;
	align-items: center;
`;

const ProfileImg = styled.img`
	width: 55px;
	height: 55px;
	cursor: pointer;
`;

const HambugerMenu = styled.img`
	height: 25px;
`;

const MobileLogo = styled.img`
	height: 40px;
`;

const SqareImag = styled.img`
	margin-right: 10px;
	transition: 0.9s;
	transform: rotate(0deg);
`;

const BottomArrow = styled.img`
	margin-left: 30px;
	transition: 0.6s;
	transform: rotate(0deg);
`;

const HoverMenuContainer = styled.ul`
	position: absolute;
	width: 100%;
	background: #ffffff;
	box-shadow: 6px 7px 10px rgba(0, 0, 0, 0.05);
	border-radius: 10px;
	padding: 20px;
	transform: scale(0);
	opacity: 0;
	z-index: 100;
	transition: opacity 0.3s;
	&:hover {
		opacity: 1;
		transform: scale(1);
	}

	${HoverMenuItem}:last-child {
		margin-bottom: 0;
	}
`;

const GnbMenuCategoryContainer = styled.div`
	cursor: pointer;
	margin-right: 35px;
	position: relative;
	transition: 0.6s;
	&:hover {
		transition: 0.6s;
		${SqareImag} {
			transition: 0.9s;
			transform: rotate(360deg);
		}

		${BottomArrow} {
			transition: 0.6s;
			transform: rotate(180deg);
		}
	}

	&:hover ${HoverMenuContainer} {
		opacity: 1;
		transform: scale(1);
	}
`;

const CategoryText = styled.span`
	font-size: 18px;
	line-height: 24px;
`;

const SearchContainer = styled.div`
	position: relative;
`;

const SearchBtn = styled.input`
	content: '';
	background-image: url(${searchIcon});
	background-repeat: no-repeat;
	background-position: right center;
	z-index: 10;
	width: 26px;
	height: 26px;
	position: absolute;
	right: 0;
	top: 0;
	border: none;
	background-color: white;
	cursor: pointer;
`;
const SearchInput = styled.input`
	border: none;
	height: 30px;
	width: 280px;
	padding-right: 25px;
	font-size: 14px;
	border-bottom: 1px solid ${Color.mainPink};
	transition: all 0.28s;
`;

const GnbContainer = styled.ul`
	display: flex;
	align-items: center;
`;

const GnbMenuCategory = styled.li`
	padding-bottom: 10px;
	display: flex;
	align-items: center;
	position: relative;
	border-bottom: 1px solid ${Color.mainPink};
`;

const GnbMenu = styled.li`
	font-family: RIDIBatang;
	font-size: 18px;
	line-height: 24px;
	margin-right: 30px;
	padding-bottom: 9px;
	&: last-child {
		margin-right: 0px;
	}
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		font-weight: bold;
	}
`;

const LogoContainer = styled.h1``;

const Logo = styled.img`
	height: 51px;
`;
const SignLink = styled(Link)`
	font-size: 16px;
	line-height: 24px;
	color: ${Color.fontGray};
	&:hover {
		font-weight: bold;
	}
`;

const SignMenu = styled.li`
	position: relative;
	padding-right: 34px;
	&:after {
		color: ${Color.fontGray};
		content: '|';
		position: absolute;
		font-size: 12px;
		right: 15px;
		top: 4px;
	}
	&:last-child {
		padding-right: 0px;

		&:after {
			content: none;
		}
	}
`;

const LoginMenuContainer = styled.ul`
	display: flex;
	align-items: center;
`;

const HeaderContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 25px;
`;

const HeaderWrap = styled.header`
	padding-top: 15px;
	padding-bottom: 15px;
	box-shadow: 0px 7px 24px rgba(0, 0, 0, 0.06);
	width: 100%;
`;

const HeaderContainer = styled(Container)`
	@media only screen and (max-width: 768px) {
		display: none;
	}

	& > ${HeaderContent}:last-child {
		margin-bottom: 0px;
	}
`;

const HeaderContainerMobile = styled.div`
	display: none;

	@media only screen and (max-width: 768px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 10px;
		padding-right: 10px;
	}
`;
export default Header;
