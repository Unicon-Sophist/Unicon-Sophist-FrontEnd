import Color from 'assets/styles/color';
import * as React from 'react';
import styled from 'styled-components';
import naverIcon from 'assets/img/icon-naver.png';
import kakaoIcon from 'assets/img/icon-kakao.png';

interface propsTypes {
	text: string;
	callback?: () => void;
	disabled?: boolean;
	size?: number;
	type?: string;
}

const CommonBtn = (props: propsTypes) => {
	if (props.type === 'kakao') {
		return (
			<BtnContainer
				onClick={props.callback}
				disable={props.disabled ? props.disabled : false}
				btnSize={props.size}
				backgroundColor={'linear-gradient(180deg, #fee500 0%, #eed80d 100%)'}
				type={props.type}
			>
				<BtnFont type={'kakao'}>{props.text}</BtnFont>
			</BtnContainer>
		);
	} else if (props.type === 'naver') {
		return (
			<BtnContainer
				onClick={props.callback}
				disable={props.disabled ? props.disabled : false}
				btnSize={props.size}
				backgroundColor={'#2db400'}
				type={props.type}
			>
				<BtnFont>{props.text}</BtnFont>
			</BtnContainer>
		);
	}
	return (
		<BtnContainer
			onClick={props.callback}
			disable={props.disabled ? props.disabled : false}
			btnSize={props.size}
			backgroundColor={Color.mainPink}
		>
			<BtnFont>{props.text}</BtnFont>
		</BtnContainer>
	);
};

const BtnContainer = styled.div<{
	disable: boolean;
	btnSize?: number;
	backgroundColor: string;
	type?: string;
}>`
	position: relative;
	width: ${(props) => {
		return props.btnSize ? props.btnSize + 'px' : '100%';
	}};
	height: 60px;
	background: ${(props) => (props.disable ? Color.grayCCCC : props.backgroundColor)};
	border-radius: 12px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.28s;
	box-shadow: none;

	&:hover {
		box-shadow: ${({ type, disable }) =>
			disable
				? 'none'
				: type === 'naver' || type === 'kakao'
				? 'none'
				: 'inset 1px 4px 4px rgba(0, 0, 0, 0.1)'};
	}

	&:after {
		left: 30px;
		content: '';
		position: absolute;
		width: 22px;
		height: 22px;
		background-image: url(${({ type }) =>
			type === 'kakao' ? kakaoIcon : type === 'naver' ? naverIcon : 'none'});
	}
`;

const BtnFont = styled.div<{ type?: string }>`
	font-weight: bold;
	font-size: 18px;
	line-height: 25px;
	color: ${({ type }) => (type === 'kakao' ? '#181600' : 'white')};
`;

export default CommonBtn;
