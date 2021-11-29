import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

interface PropsTypes {
	type: string;
	callback?: () => void;
}

const SnsBtn = (props: PropsTypes) => {
	return <BtnContainer></BtnContainer>;
};

const BtnContainer = styled.div`
	height: 60px;
	background: linear-gradient(180deg, #efbcbb 0%, #e59998 100%);
	border-radius: 12px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.28s;
	&:hover {
		opacity: 0.8;
	}
`;

export default SnsBtn;
