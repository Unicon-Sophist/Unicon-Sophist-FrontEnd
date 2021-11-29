import Color from 'assets/styles/color';
import * as React from 'react';
import styled from 'styled-components';

interface propsTypes {
	label: string;
	value: string;
	setValue: (value: string) => void;
	radioList: { value: string; label: string }[];
	colorType?: string;
}

const CommonRadio = (props: propsTypes) => {
	const randomId = Math.random().toString(36).substr(2, 11);
	return (
		<RadioWrap>
			<LabelContainer>
				<Label htmlFor={randomId}>{props.label}</Label>
			</LabelContainer>

			<RadioBtnWrap>
				{props.radioList.map((radio, index) => {
					return (
						<RadioContainer key={index + 'radio'}>
							<Radio
								id={radio.value}
								onChange={(e) => props.setValue(e.target.value)}
								type={'radio'}
								value={radio.value}
								checked={props.value === radio.value}
								colorType={props.colorType ? props.colorType : 'pink'}
							/>
							<RadioLabel htmlFor={radio.value}>{radio.label}</RadioLabel>
						</RadioContainer>
					);
				})}
			</RadioBtnWrap>
		</RadioWrap>
	);
};

const RadioWrap = styled.div`
	position: relative;
`;

const RadioBtnWrap = styled.div`
	display: flex;
`;

const RadioContainer = styled.div`
	margin-right: 30px;
	position: relative;
`;

const Radio = styled.input<{ colorType: string }>`
	position: absolute;
	top: calc(50% - 20px);
	left: 0;
	cursor: pointer;
	width: 20px;
	height: 20px;
	opacity: 0;
	margin-right: 10px;

	+ label {
		font-size: 14px;
		line-height: 20px;
		padding-left: 28px;
		cursor: pointer;
		display: inline-block;
		position: relative;
		color: ${Color.gray6666};

		&:before {
			content: '';
			position: absolute;
			width: 20px;
			height: 20px;
			left: 0;
			border-radius: 50%;
			box-sizing: border-box;
			border: 1px solid ${Color.grayDDDD};
		}
	}

	&:checked {
		+ label {
			color: ${Color.gray4444};
		}
		+ label:before {
			background-color: white;
			border-color: ${(props) =>
				props.colorType === 'black' ? Color.gray6666 : Color.mainPink};
		}
		+ label:after {
			content: '';
			position: absolute;
			background-color: ${(props) =>
				props.colorType === 'black' ? Color.gray6666 : Color.mainPink};
			width: 12px;
			height: 12px;
			border-radius: 50%;
			left: 4px;
			top: 50%;
			transform: translateY(-50%);
		}
	}
`;

const RadioLabel = styled.label``;

const LabelContainer = styled.div`
	margin-bottom: 10px;
`;
const Label = styled.label`
	line-height: 21px;
	left: 0;
	transition: all 0.3s;
	color: ${Color.fontBlack};
	font-size: 12px;
`;

export default CommonRadio;
