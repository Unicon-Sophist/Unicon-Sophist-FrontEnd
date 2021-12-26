import cat from 'assets/img/cat.png';

/* eslint-disable */
// export const SOCKET_SERVER_URL = 'https://sophistes-server.herokuapp.com/';\
export const SOCKET_SERVER_URL = 'http://localhost:8001';
export const CONFIG = {
	iceServers: [
		{
			urls: 'stun:stun.l.google.com:19302',
		},
	],
};

// 비밀번호 정규식
export const regCheckPassword = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/; // eslint-disable-line

//eslint-disable-line
// 이메일 정규식
export const regCheckEmail =
	/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{1,10}$/i; // eslint-disable-line

/* eslint-disable-next-line */
// 특수문자 확인
export const checkSpecial = (str: string) => {
	const special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi; /* eslint-disable-next-line */
	if (special_pattern.test(str) === true) {
		return true;
	} else {
		return false;
	}
};

/* eslint-disable-next-line */
// 대소문자 확인
export const checkLetter = (str: string) => {
	const special_pattern = /[a-zA-z]/gi; /* eslint-disable-next-line */
	if (special_pattern.test(str) === true) {
		return true;
	} else {
		return false;
	}
};

// 모바일 체크
export const isMobile = () => {
	const UserAgent = navigator.userAgent;

	if (
		UserAgent.match(
			/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i,
		) != null ||
		UserAgent.match(/LG|SAMSUNG|Samsung/) != null
	) {
		return false;
	} else {
		return true;
	}
};

export const isMobileSize = window.innerWidth < 768;

//eslint-disable-line
export const currentRoute = document.location.href.split(document.location.origin)[1];

//eslint-disable-line
export const checkMobile = () => {
	const UA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

	if (UA.indexOf('android') > -1) {
		return 'android';
	} else if (UA.indexOf('iphone') > -1 || UA.indexOf('ipad') > -1 || UA.indexOf('ipod') > -1) {
		return 'ios';
	} else {
		return 'other';
	}
};

export const genderList = [
	{ label: '남자', value: 'M' },
	{ label: '여자', value: 'F' },
	{ label: '기타', value: 'E' },
];

export const specialtyList = [
	{ value: 'social', label: '사회' },
	{ value: 'culture', label: '문화' },
	{ value: 'person', label: '인문' },
	{ value: 'sopi', label: '철학' },
	{ value: 'engineering', label: '공학' },
];

export const categoryList = [
	{ title: '역사', img: cat },
	{ title: '철학', img: cat },
	{ title: '문학', img: cat },
	{ title: '사회', img: cat },
	{ title: '공학', img: cat },
];
