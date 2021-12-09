import Color from 'assets/styles/color';
import { ContainerSmall, H1, SpacerBottom } from 'assets/styles/global-styled';
import CommonBtn from 'components/CommonBtn';
import CommonInput from 'components/CommonInput';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SiginIn = () => {
	useEffect(() => {}, []);

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	return (
		<ContainerSmall>
			<H1>로그인</H1>
			<SpacerBottom size={80} />
			<CommonInput label={'이메일'} value={email} setValue={setEmail} type={'text'} />
			<SpacerBottom size={50} />
			<CommonInput
				label={'비밀번호'}
				value={password}
				setValue={setPassword}
				type={'password'}
			/>
			<SpacerBottom size={50} />
			<CommonBtn text={'로그인'} callback={() => console.log('!!!')} />
			<SpacerBottom size={24} />
			<LoginMenuContainer>
				<SignMenu>
					<SignLink to="/login">비밀번호 찾기</SignLink>
				</SignMenu>
				<SignMenu>
					<SignLink to="/sign-up">회원가입</SignLink>
				</SignMenu>
			</LoginMenuContainer>
			<SpacerBottom size={30} />
			<OrLine />
			<SpacerBottom size={80} />
			<CommonBtn text={'카카오로 시작하기'} type="kakao" />
			<SpacerBottom size={20} />
			<CommonBtn text={'네이버로 시작하기'} type="naver" />
		</ContainerSmall>
	);
};

const OrLine = styled.div`
	text-align: center;
	position: relative;
	z-index: 2;
	&:after {
		content: '';
		position: absolute;
		border-bottom: 2px solid ${Color.borderGray};
		width: 100%;
		height: 2px;
		left: 0;
		top: 5px;
		z-index: -2;
	}
	&:before {
		content: 'OR';
		position: absolute;
		width: 40px;
		height: 40px;
		background-color: white;
		left: calc(50% - 20px);
		top: calc(50% - 12px);
		z-index: 0;
		font-size: 14px;
		color: ${Color.grayCCCC};
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const LoginMenuContainer = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
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

const SignLink = styled(Link)`
	font-size: 16px;
	line-height: 24px;
	color: ${Color.fontGray};
	&:hover {
		color: ${Color.mainPink};
	}
	transition: 0.3s;
`;

export default SiginIn;
