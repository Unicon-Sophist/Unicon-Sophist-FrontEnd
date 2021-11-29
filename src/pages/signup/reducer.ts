import { regCheckPassword, regCheckEmail } from 'utils';

interface DataType {
	email: string;
	gender: string;
	password: string;
	passwordConfirm: string;
	nickname: string;
	checkEmail: boolean;
	checkNickName: boolean;
	checkPrivacyPolicy: boolean;
	checkServiceTerms: boolean;
	error: {
		emailError: {
			content: string;
			isError: boolean;
		};
		passwordError: {
			content: string;
			isError: boolean;
		};
		passwordConfirmError: {
			content: string;
			isError: boolean;
		};
	};
}

export const initData: DataType = {
	email: '',
	gender: '1',
	password: '',
	passwordConfirm: '',
	nickname: '',
	checkEmail: false,
	checkNickName: false,
	checkPrivacyPolicy: false,
	checkServiceTerms: false,
	error: {
		emailError: {
			content: '',
			isError: false,
		},
		passwordError: {
			content: '',
			isError: false,
		},
		passwordConfirmError: {
			content: '',
			isError: false,
		},
	},
};

const checkEmail = (val: string): boolean => {
	return regCheckEmail.test(val);
};

const checkPassword = (val: string): boolean => {
	return regCheckPassword.test(val);
};

const checkPasswordEqual = (val: string, checkPassword: string): boolean => {
	return checkPassword === val;
};

interface Action {
	type: ReduceType;
	data?: DataType;
	email?: string | '';
	gender?: string | '';
	password?: string | '';
	passwordConfirm?: string | '';
	nickname?: string | '';
	checkEmail?: boolean | false;
	checkNickName?: boolean | false;
	checkPrivacyPolicy?: boolean | false;
	checkServiceTerms?: boolean | false;
}

export enum ReduceType {
	INIT = 'INIT',
	CHANGE_EMAIL = 'CHANGE_EMAIL',
	CHANGE_NICKNAME = 'CHANGE_NICKNAME',
	CHANGE_PASSWORD = 'CHANGE_PASSWORD',
	CHANGE_PASSWORD_CONFIRM = 'CHANGE_PASSWORD_CONFIRM',
	CHANGE_CHECK_EMAIL = 'CHANGE_CHECK_EMAIL',
	CHANGE_CHECK_NICKNAME = 'CHANGE_CHECK_NICKNAME',
	CHAHNE_PRIVACY_POLICY = 'CHAHNE_PRIVACY_POLICY',
	CHAHNE_SERVICE_TERMS = 'CHAHNE_SERVICE_TERMS',
	CHANGE_GENDER = 'CHANGE_GENDER',
}

export const signReducer = (state: DataType, action: Action): DataType => {
	switch (action.type) {
		case 'INIT':
			return {
				...state,
				...action.data,
			};
		case 'CHANGE_EMAIL':
			const emailError = {
				content: '',
				isError: false,
			};
			if (!checkEmail(action.email ? action.email : '')) {
				emailError.content = '이메일 형식이 올바르지 않습니다.';
				emailError.isError = true;
			}
			return {
				...state,
				checkEmail: false,
				email: action.email ? action.email : '',
				error: {
					...state.error,
					emailError,
				},
			};
		case 'CHANGE_NICKNAME':
			return {
				...state,
				checkNickName: false,
				nickname: action.nickname ? action.nickname : '',
			};
		case 'CHANGE_PASSWORD':
			const passwordError = {
				content: '',
				isError: false,
			};
			if (!checkPassword(action.password ? action.password : '')) {
				passwordError.content =
					' 8자 이상~20자 이하 / 영문 대 소문자, 숫자, 특수문자를 사용해주세요.';
				passwordError.isError = true;
			}
			return {
				...state,
				password: action.password ? action.password : '',
				error: {
					...state.error,
					passwordError,
				},
			};
		case 'CHANGE_PASSWORD_CONFIRM':
			const passwordConfirmError = {
				content: '',
				isError: false,
			};
			if (!checkPassword(action.passwordConfirm ? action.passwordConfirm : '')) {
				passwordConfirmError.content =
					'8자 이상~20자 이하 / 영문 대 소문자, 숫자, 특수문자를 사용해주세요.';
				passwordConfirmError.isError = true;
			} else if (
				!checkPasswordEqual(
					action.passwordConfirm ? action.passwordConfirm : '',
					action.password ? action.password : '',
				)
			) {
				passwordConfirmError.content = '비밀번호가 일치하지 않습니다.';
				passwordConfirmError.isError = true;
			} else {
				passwordConfirmError.content = '';
				passwordConfirmError.isError = false;
			}
			return {
				...state,
				passwordConfirm: action.passwordConfirm ? action.passwordConfirm : '',
				error: {
					...state.error,
					passwordConfirmError,
				},
			};
		case 'CHANGE_CHECK_EMAIL':
			return {
				...state,
				checkEmail: action.checkEmail ? action.checkEmail : false,
			};
		case 'CHANGE_CHECK_NICKNAME':
			return {
				...state,
				checkNickName: action.checkNickName ? action.checkNickName : false,
			};
		case 'CHAHNE_PRIVACY_POLICY':
			if (!action.checkPrivacyPolicy) {
				return {
					...state,
					checkPrivacyPolicy: action.checkPrivacyPolicy
						? action.checkPrivacyPolicy
						: false,
				};
			} else if (action.checkPrivacyPolicy) {
				return {
					...state,
					checkPrivacyPolicy: action.checkPrivacyPolicy,
				};
			}
			return {
				...state,
				checkPrivacyPolicy: action.checkPrivacyPolicy,
			};
		case 'CHAHNE_SERVICE_TERMS':
			if (!action.checkServiceTerms) {
				return {
					...state,
					checkServiceTerms: action.checkServiceTerms ? action.checkServiceTerms : false,
				};
			} else if (action.checkServiceTerms && state.checkPrivacyPolicy) {
				return {
					...state,
					checkServiceTerms: action.checkServiceTerms,
				};
			}
			return {
				...state,
				checkServiceTerms: action.checkServiceTerms,
			};
		case 'CHANGE_GENDER':
			return {
				...state,
				gender: action.gender ? action.gender : '',
			};
		default:
			return state;
	}
};
