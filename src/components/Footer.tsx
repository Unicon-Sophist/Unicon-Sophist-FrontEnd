import Color from 'assets/styles/color';
import * as React from 'react';
import styled from 'styled-components';
import { Container } from 'assets/styles/global-styled';
import logo from 'assets/img/logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<FooterWrap>
			<FooterContainer>
				<FooterContent>
					<LogoContainer>
						<Link to="/">
							<Logo src={logo} alt="logo" />
						</Link>
					</LogoContainer>

					<SnsContainer>
						<SnsIcon></SnsIcon>
					</SnsContainer>
				</FooterContent>
				<FooterContent>
					<FooterLinkContainer>
						<FooterLink to="/">이용약관</FooterLink>
						<FooterLink to="/">개인정보처리방침운영정책</FooterLink>
						<FooterLink to="/">Contact Us</FooterLink>
					</FooterLinkContainer>
				</FooterContent>
				<FooterContent>
					<FooterCopyRights>© Sophist Corp. All rights reserved.</FooterCopyRights>
				</FooterContent>
			</FooterContainer>
		</FooterWrap>
	);
};

const FooterLinkContainer = styled.ul`
	display: flex;
`;

const FooterLink = styled(Link)`
	font-size: 18px;
	line-height: 40px;
	color: ${Color.fontGray};
	&:hover {
		font-weight: bold;
	}

	position: relative;
	padding-right: 34px;
	&:after {
		color: ${Color.fontGray};
		content: '|';
		position: absolute;
		font-size: 14px;
		right: 15px;
		top: 0px;
	}
	&:last-child {
		padding-right: 0px;

		&:after {
			content: none;
		}
	}
`;

const SnsContainer = styled.ul`
	display: flex;
`;

const SnsIcon = styled.li``;

const LogoContainer = styled.h1``;

const Logo = styled.img`
	height: 51px;
`;

const FooterWrap = styled.footer`
	padding-top: 40px;
	padding-bottom: 40px;
	background-color: ${Color.grayF7F7F7};
`;

const FooterContent = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 15px;
`;

const FooterContainer = styled(Container)`
	${FooterContent}:first-child {
		margin-bottom: 15px;
	}
`;

const FooterCopyRights = styled.p`
	font-family: 'Roboto', sans-serif;
	font-size: 18px;
	line-height: 40px;
	color: ${Color.grayCCCC};
`;
export default Footer;
