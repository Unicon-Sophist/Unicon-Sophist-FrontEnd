import Color from 'assets/styles/color';
import * as React from 'react';
import styled from 'styled-components';

interface propsTypes {
	text: string;
	callback?: () => void;
	disabled?: boolean;
	size?: number;
}

const CommonBtn = (props: propsTypes) => {
	return (
		<BtnContainer
			onClick={props.callback}
			disable={props.disabled ? props.disabled : false}
			btnSize={props.size}
		>
			<BtnFont>{props.text}</BtnFont>
		</BtnContainer>
	);
};

const BtnContainer = styled.div<{ disable: boolean; btnSize?: number }>`
	width: ${(props) => {
		return props.btnSize ? props.btnSize + 'px' : '100%';
	}};
	height: 60px;
	background: ${(props) => (props.disable ? Color.grayCCCC : Color.mainBtnGradient)};
	border-radius: 12px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.28s;
	box-shadow: none;
	&:hover {
		box-shadow: inset 1px 4px 4px rgba(0, 0, 0, 0.1);
	}
`;

const BtnFont = styled.div`
	font-weight: bold;
	font-size: 18px;
	line-height: 25px;
	color: white;
`;

export default CommonBtn;
