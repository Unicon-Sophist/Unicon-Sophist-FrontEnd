import { ContainerSmall, H1, OnlyShow, SpacerBottom } from 'assets/styles/global-styled';
import CommonBtn from 'components/CommonBtn';
import CommonCheckBox from 'components/CommonCheckBox';
import CommonInput from 'components/CommonInput';
import CommonRadio from 'components/CommonRadio';
import * as React from 'react';
import { useEffect, useReducer } from 'react';
import { genderList } from 'utils';
import { signReducer, initData, ReduceType } from './reducer';
import mLogo from 'assets/img/m-logo.png';
import styled from 'styled-components';

const SiginUp = () => {
	useEffect(() => {}, []);

	const [state, dispatch] = useReducer(signReducer, initData);

	const setEmail = (value: string): void => {
		dispatch({ type: ReduceType.CHANGE_EMAIL, email: value });
	};

	const setNickname = (value: string): void => {
		dispatch({ type: ReduceType.CHANGE_NICKNAME, nickname: value });
	};

	const setGender = (value: string): void => {
		dispatch({ type: ReduceType.CHANGE_GENDER, gender: value });
	};

	const setPassword = (value: string): void => {
		dispatch({ type: ReduceType.CHANGE_PASSWORD, password: value });
	};

	const setPasswordConfirm = (value: string): void => {
		dispatch({
			type: ReduceType.CHANGE_PASSWORD_CONFIRM,
			passwordConfirm: value,
			password: state.password,
		});
	};

	return (
		<ContainerSmall>
			<LogoMobile src={mLogo}></LogoMobile>
			<OnlyShow isMobile={true} display={'block'}>
				<H1>회원가입</H1>
			</OnlyShow>
			<SpacerBottom size={80} mSize={30} />
			<CommonInput
				label={'이메일'}
				value={state.email}
				setValue={setEmail}
				type={'text'}
				error={state.error.emailError}
			/>
			<SpacerBottom size={50} />
			<CommonInput
				label={'닉네임'}
				value={state.nickname}
				setValue={setNickname}
				type={'text'}
			/>
			<SpacerBottom size={30} />
			<CommonRadio
				label={'성별'}
				value={state.gender}
				setValue={setGender}
				radioList={genderList}
			/>
			<SpacerBottom size={50} />
			<CommonInput
				label={'비밀번호'}
				value={state.password}
				setValue={setPassword}
				type={'password'}
				error={state.error.passwordError}
			/>
			<SpacerBottom size={50} />
			<CommonInput
				label={'비밀번호 확인'}
				value={state.passwordConfirm}
				setValue={setPasswordConfirm}
				type={'password'}
				error={state.error.passwordConfirmError}
			/>
			<SpacerBottom size={70} mSize={30} />

			<CommonCheckBox
				label={'에 동의합니다.'}
				link={'https://www.naver.com'}
				linkText={'개인정보처리방침'}
			/>
			<SpacerBottom size={15} />
			<CommonCheckBox
				label={'에 동의합니다.'}
				link={'https://www.naver.com'}
				linkText={'이용약관'}
			/>
			<SpacerBottom size={70} mSize={30} />

			<CommonBtn text={'회원가입'} callback={() => console.log('!!!')} />
		</ContainerSmall>
	);
};

const LogoMobile = styled.img`
	display: none;
	text-align: center;
	margin-bottom: 30px;
	margin-left: auto;
	margin-right: auto;
	@media only screen and (max-width: 768px) {
		display: block;
	}
`;

export default SiginUp;
