import * as React from 'react';
import { useState, useEffect } from 'react';
import Color from 'assets/styles/color';
import styled from 'styled-components';

interface propsTypes {
	error?: { content: string; isError: boolean };
	type: string;
	label: string;
	value: string;
	setValue: (value: string) => void;
	readonly?: boolean;
}

const CommonInput = (props: propsTypes) => {
	const randomId = Math.random().toString(36).substr(2, 11);
	const [labelIsActive, setLabeIsActive] = useState<boolean>(false);
	const changeValue = (e: React.FormEvent<HTMLInputElement>) => {
		props.setValue(e.currentTarget.value);
	};

	useEffect(() => {
		if (props.value.length !== 0) {
			setLabeIsActive(true);
		}
	}, [props.value]);

	return (
		<InputContainer>
			<Input
				value={props.value}
				id={randomId}
				onChange={changeValue}
				type={props.type}
				placeholder={props.label}
				labelIsActive={labelIsActive}
				onFocus={() => setLabeIsActive(true)}
				onBlur={() => props.value.length === 0 && setLabeIsActive(false)}
				readOnly={props.readonly ? props.readonly : false}
			/>
			<Label htmlFor={randomId}>{props.label}</Label>
			{props.error ? (
				props.error.isError ? (
					<ErrorTextContainer>
						<ErrorText>{props.error ? props.error.content : ''}</ErrorText>
					</ErrorTextContainer>
				) : null
			) : null}
		</InputContainer>
	);
};

const ErrorTextContainer = styled.div`
	margin-top: 10px;
`;

const ErrorText = styled.p`
	font-size: 12px;
	color: ${Color.mainRed};
`;

const InputContainer = styled.div`
	position: relative;
`;

const Label = styled.label`
	position: absolute;
	line-height: 21px;
	left: 0;
	transition: all 0.3s;
`;

const Input = styled.input<{ labelIsActive: boolean; readOnly: boolean }>`
	color: ${(props) => (props.readOnly ? Color.grayCCCC : Color.fontBlack)};
	width: 100%;
	border: none;
	border-bottom: 1px solid
		${(props) =>
			props.labelIsActive
				? props.readOnly
					? Color.borderGray
					: Color.mainPink
				: Color.borderGray};
	padding-bottom: 10px;
	transition: all 0.28s;
	font-size: 16px;
	&:focus {
		border-color: ${(props) => (props.readOnly ? Color.borderGray : Color.mainPink)};
		transition: all 0.28s;
	}
	& + ${Label} {
		color: ${(props) => (props.labelIsActive ? Color.activeGray : Color.fontGray)};
		font-size: ${(props) => (props.labelIsActive ? '12px' : '16px')};
		top: ${(props) => (props.labelIsActive ? '-30px' : '0')};
		font-weight: ${(props) => (props.labelIsActive ? 'bold' : 'normal')};
		transition: all 0.28s;
		opacity: ${(props) => (props.labelIsActive ? '1' : '0')};
	}
`;
export default CommonInput;
