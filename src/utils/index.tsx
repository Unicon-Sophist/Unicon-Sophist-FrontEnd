import cat from 'assets/img/cat.png';
import { ChattingListType } from 'types';

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
	{ label: '남자', value: '1' },
	{ label: '여자', value: '2' },
	{ label: '기타', value: '3' },
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

export const tempChattingList: ChattingListType = [
	{
		nickname: 'test1',
		content:
			'갑작스레 많은 눈이 학교에 찾아왔습니다. 한층 낭만이 더해진 캠퍼스를 즐겨보세요!!❄😆',
	},
	{
		nickname: 'test1',
		content:
			'수직공간이 암만 중요하다해도 수평공간도 중요해요... 저희 냥이도 본가에 있다 원룸 가니 애가 우울증마냥 무기력해져서 이러다 큰일나겠다싶어 다시 본가갔어요... 넓은 공간에서 우다다 못하면 병납니다...',
	},
	{
		nickname: 'test1',
		content:
			'저였으면 계단형 캣타워를 이사할 곳에 설치하고, 그 옆에 고양이가 뛰어도 관절에 무리가 없게끔 침대나 매트리스를 놓을 것 같네요 ',
	},
	{
		nickname: 'test1',
		content: '꽂게...손질...간장...끓이고...식하고 담가서 완성...아주 성공적!!!!👏👏',
	},
	{
		nickname: 'test1',
		content: '[생후479일] 이렇게 TV고 소파고 다 없애고 싶어했던 아모이는 어떻게 되었을까요',
	},
	{
		nickname: 'test1',
		content: '드디어 왔다..마누라 고마우이😍',
	},
	{
		nickname: 'test1',
		content: '비전의 최후',
	},
	{
		nickname: 'test1',
		content:
			'갑작스레 많은 눈이 학교에 찾아왔습니다. 한층 낭만이 더해진 캠퍼스를 즐겨보세요!!❄😆',
	},
	{
		nickname: 'test1',
		content:
			'수직공간이 암만 중요하다해도 수평공간도 중요해요... 저희 냥이도 본가에 있다 원룸 가니 애가 우울증마냥 무기력해져서 이러다 큰일나겠다싶어 다시 본가갔어요... 넓은 공간에서 우다다 못하면 병납니다...',
	},
	{
		nickname: 'test1',
		content:
			'저였으면 계단형 캣타워를 이사할 곳에 설치하고, 그 옆에 고양이가 뛰어도 관절에 무리가 없게끔 침대나 매트리스를 놓을 것 같네요 ',
	},
	{
		nickname: 'test1',
		content: '꽂게...손질...간장...끓이고...식하고 담가서 완성...아주 성공적!!!!👏👏',
	},
	{
		nickname: 'test1',
		content: '[생후479일] 이렇게 TV고 소파고 다 없애고 싶어했던 아모이는 어떻게 되었을까요',
	},
	{
		nickname: 'test1',
		content: '드디어 왔다..마누라 고마우이😍',
	},
	{
		nickname: 'test1',
		content: '비전의 최후',
	},
	{
		nickname: 'test1',
		content:
			'갑작스레 많은 눈이 학교에 찾아왔습니다. 한층 낭만이 더해진 캠퍼스를 즐겨보세요!!❄😆',
	},
	{
		nickname: 'test1',
		content:
			'수직공간이 암만 중요하다해도 수평공간도 중요해요... 저희 냥이도 본가에 있다 원룸 가니 애가 우울증마냥 무기력해져서 이러다 큰일나겠다싶어 다시 본가갔어요... 넓은 공간에서 우다다 못하면 병납니다...',
	},
	{
		nickname: 'test1',
		content:
			'저였으면 계단형 캣타워를 이사할 곳에 설치하고, 그 옆에 고양이가 뛰어도 관절에 무리가 없게끔 침대나 매트리스를 놓을 것 같네요 ',
	},
	{
		nickname: 'test1',
		content: '꽂게...손질...간장...끓이고...식하고 담가서 완성...아주 성공적!!!!👏👏',
	},
	{
		nickname: 'test1',
		content: '[생후479일] 이렇게 TV고 소파고 다 없애고 싶어했던 아모이는 어떻게 되었을까요',
	},
	{
		nickname: 'test1',
		content: '드디어 왔다..마누라 고마우이😍',
	},
	{
		nickname: 'test1',
		content: '비전의 최후',
	},
];
