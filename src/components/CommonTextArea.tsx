import Color from 'assets/styles/color';
import { BodyFont } from 'assets/styles/global-styled';
import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

interface PropsTypes {
	text?: string;
	setText?: (text: string) => void;
	placeholder?: string;
	title?: string;
}

const CommonTextArea = (props: PropsTypes) => {
	const [text, setText] = useState<string>(props.text ? props.text : '');
	return (
		<TextAreaContainer>
			<TextareaTitle>{props.title ? props.title : ''}</TextareaTitle>
			<TextArea
				placeholder={props.placeholder ? props.placeholder : ''}
				value={text}
				onChange={(e) =>
					props.setText ? props.setText(e.target.value) : setText(e.target.value)
				}
			/>
			<WritingTextContainer>
				<CurrentText>{text.length}</CurrentText>
				<MaxText>/ 300</MaxText>
			</WritingTextContainer>
		</TextAreaContainer>
	);
};
const TextareaTitle = styled(BodyFont)`
	color: ${Color.fontBlack};
	font-size: 14px;
	margin-bottom: 10px;
`;

const CurrentText = styled.p`
	font-size: 12px;
	color: ${Color.fontPink};
`;
const MaxText = styled.p`
	font-size: 12px;
	color: ${Color.fontBlack};
`;

const WritingTextContainer = styled.div`
	margin-top: 5px;
	justify-content: flex-end;
	display: flex;
`;

const TextAreaContainer = styled.div`
	position: relative;
`;

const TextArea = styled.textarea`
	width: 100%;
	background: #ffffff;
	border: 1px solid ${Color.grayDDDD};
	border-radius: 5px;
	height: 150px;
	resize: none;
	padding: 15px 20px;
`;

export default CommonTextArea;
