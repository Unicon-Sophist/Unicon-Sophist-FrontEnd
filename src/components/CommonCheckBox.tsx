import Color from 'assets/styles/color';
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

interface PropsTypes {
	label: string;
	linkText?: string;
	link?: string;
	isChecked?: boolean;
	setIsChecked?: (value: boolean) => void;
}

const CommonCheckBox = (props: PropsTypes) => {
	const [checked, setChecked] = useState<boolean>(props.isChecked ? props.isChecked : false);
	const randomId = Math.random().toString(36).substr(2, 11);

	useEffect(() => {
		setChecked(props.isChecked as boolean);
	}, [props.isChecked]);

	return (
		<CheckBoxWrap>
			<CheckBox
				type={'checkbox'}
				id={randomId}
				checked={checked}
				onChange={() => {
					props.setIsChecked ? props.setIsChecked(!checked) : setChecked(!checked);
				}}
			/>
			<CheckBoxLabel htmlFor={randomId}>
				<Link href={props.link} target="_blank">
					{props.linkText}
				</Link>
				{props.label}
				<IsEssenalFont>(필수)</IsEssenalFont>
			</CheckBoxLabel>
		</CheckBoxWrap>
	);
};
const Link = styled.a`
	font-size: 12px;
	color: ${Color.gray6666};
	border-bottom: 1px solid ${Color.gray6666};
`;

const CheckBoxWrap = styled.div`
	display: flex;
	align-items: center;
`;
const CheckBoxLabel = styled.label`
	margin-left: 10px;
	font-size: 12px;
	color: ${Color.gray4444};
`;
const CheckBox = styled.input`
	margin-right: 6px;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: solid 2px ${Color.grayDDDD};
	background-color: #ffffff;
	-webkit-appearance: none;
	outline: none;
	cursor: pointer;
	margin: 0;
	vertical-align: middle;

	&:checked {
		position: relative;
		background-color: ${Color.mainPink};
		background-size: 10px 8px;
		background-repeat: no-repeat;
		background-position: center center;
		border: 1px solid ${Color.mainPink};
		&:after {
			content: '';
			position: absolute;
			width: 7px;
			height: 2px;
			background-color: white;
			top: 9px;
			left: 2px;
			transform: rotate(45deg);
		}
		&:before {
			content: '';
			position: absolute;
			width: 11px;
			height: 2px;
			background-color: white;
			top: 8px;
			right: 1px;
			transform: rotate(130deg);
		}
	}
`;
const IsEssenalFont = styled.span`
	color: red;
	font-size: 10px;
`;
export default CommonCheckBox;
