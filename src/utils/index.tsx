import cat from 'assets/img/cat.png';
import Intro1 from 'assets/img/intro1.jpg';
import Intro2 from 'assets/img/intro2.jpg';
import Intro3 from 'assets/img/intro3.jpg';

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

export const introData = [
	{
		key: 'list-index-1',
		title: '소중한 문구',
		content: `위하여 보내는 설산에서 이 실현에 \n 청춘이 생의 희망의 용기가 교향악이다. `,
		img: Intro1,
	},
	{
		key: 'list-index-2',
		title: '소통하는 공간',
		content: `품으며, 심장은 싸인 날카로우나\n 만천하의 있는 시들어 그들에게 이성은 쓸쓸하랴?`,
		img: Intro2,
	},
	{
		key: 'list-index-3',
		title: '문구의 깊음',
		content: `같으며, 뭇 황금시대를 새 인도하겠다는 아니다. \n원질이 피가 밝은 피고, 거선의 일월과 가지에 돋고, 기쁘며, 있으랴? `,
		img: Intro3,
	},
];

export const convertDate = (code: string): string => {
	switch (code) {
		case 'Mon':
			return '월요일';
		case 'Tue':
			return '화요일';
		case 'WED':
			return '수요일';
		case 'Thur':
			return '목요일';
		case 'Fri':
			return '금요일';
		case 'Sat':
			return '토요일';
		case 'Sun':
			return '일요일';
		default:
			return '수요일';
	}
};
