import { ContainerSmall, H1, OnlyShow, SpacerBottom } from 'assets/styles/global-styled';
import CommonBtn from 'components/CommonBtn';
import CommonCheckBox from 'components/CommonCheckBox';
import CommonInput from 'components/CommonInput';
import CommonRadio from 'components/CommonRadio';
import * as React from 'react';
import { useReducer } from 'react';
import { genderList } from 'utils';
import { signReducer, initData, ReduceType } from './reducer';
import mLogo from 'assets/img/m-logo.png';
import styled from 'styled-components';
import Api from 'api';
import { useHistory } from 'react-router-dom';
import { addToast } from 'store/toast-store';
import store from 'store';

const SiginUp = () => {
	let history = useHistory();
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

	const setCheckPrivacyPolicy = (value: boolean): void => {
		dispatch({
			type: ReduceType.CHAHNE_PRIVACY_POLICY,
			checkPrivacyPolicy: value,
		});
	};

	const setCheckServiceTerms = (value: boolean): void => {
		dispatch({
			type: ReduceType.CHAHNE_SERVICE_TERMS,
			checkServiceTerms: value,
		});
	};

	const signUp = async () => {
		const { data } = await Api.post('join', {
			memId: state.email,
			memPw: state.password,
			memGender: state.gender,
			memNickname: state.nickname,
		});

		console.log(data);
		if (data.data === 'success') {
			store.dispatch(
				addToast({ isActive: true, type: 'info', content: '???????????? ???????????????.' }),
			);
			history.push('/');
		} else if (data.data === 'fail') {
			store.dispatch(addToast({ type: 'error', content: '' }));
		} else if (data.data === 'already_exists') {
			store.dispatch(addToast({ type: 'error', content: '???????????? ?????? ?????????.' }));
		}
	};

	const isDisabled = !(
		state.email &&
		!state.error.emailError.isError &&
		state.nickname &&
		state.gender &&
		state.password &&
		!state.error.passwordConfirmError.isError &&
		!state.error.passwordError.isError &&
		state.passwordConfirm &&
		state.password === state.passwordConfirm &&
		state.checkPrivacyPolicy &&
		state.checkServiceTerms
	);

	return (
		<ContainerSmall>
			<LogoMobile src={mLogo}></LogoMobile>
			<OnlyShow isMobile={true} display={'block'}>
				<H1>????????????</H1>
			</OnlyShow>
			<SpacerBottom size={80} mSize={30} />
			<CommonInput
				label={'?????????'}
				value={state.email}
				setValue={setEmail}
				type={'text'}
				error={state.error.emailError}
			/>
			<SpacerBottom size={50} />
			<CommonInput
				label={'?????????'}
				value={state.nickname}
				setValue={setNickname}
				type={'text'}
			/>
			<SpacerBottom size={30} />
			<CommonRadio
				label={'??????'}
				value={state.gender}
				setValue={setGender}
				radioList={genderList}
			/>
			<SpacerBottom size={50} />
			<CommonInput
				label={'????????????'}
				value={state.password}
				setValue={setPassword}
				type={'password'}
				error={state.error.passwordError}
			/>
			<SpacerBottom size={50} />
			<CommonInput
				label={'???????????? ??????'}
				value={state.passwordConfirm}
				setValue={setPasswordConfirm}
				type={'password'}
				error={state.error.passwordConfirmError}
			/>
			<SpacerBottom size={70} mSize={30} />

			<CommonCheckBox
				isChecked={state.checkPrivacyPolicy}
				label={'??? ???????????????.'}
				link={'https://www.naver.com'}
				linkText={'????????????????????????'}
				setIsChecked={setCheckPrivacyPolicy}
			/>
			<SpacerBottom size={15} />
			<CommonCheckBox
				isChecked={state.checkServiceTerms}
				label={'??? ???????????????.'}
				link={'https://www.naver.com'}
				linkText={'????????????'}
				setIsChecked={setCheckServiceTerms}
			/>
			<SpacerBottom size={70} mSize={30} />

			<CommonBtn text={'????????????'} callback={signUp} disabled={isDisabled} />
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
