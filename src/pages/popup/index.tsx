import { Container, SpacerBottom } from 'assets/styles/global-styled';
import GlobalDim from 'components/GlobalDim';
import * as React from 'react';
import { useState, useEffect } from 'react';
import FirstLoginPopup from './FirstLoginPopup';
import ReviewPopup from './ReviewPopup';
import styled from 'styled-components';
import CommonBtn from 'components/CommonBtn';

const Popup = () => {
	const [isFirstPopup, setIsFirstPopup] = useState(false);
	const [reviewPopup, setReviewPopup] = useState(false);
	return (
		<Container>
			<SpacerBottom size={100} />

			{isFirstPopup && (
				<Dim
					onClick={(e) => {
						setIsFirstPopup(false);
					}}
				>
					<Inner>
						<FirstLoginPopup />
					</Inner>
				</Dim>
			)}

			{reviewPopup && (
				<Dim
					id="dim"
					onClick={(e) => {
						setReviewPopup(false);
					}}
				>
					<InnerReview>
						<ReviewPopup />
					</InnerReview>
				</Dim>
			)}

			<CommonBtn text={'처음 팝업'} callback={() => setIsFirstPopup(true)}></CommonBtn>
			<SpacerBottom size={20} />
			<CommonBtn text={'리뷰 팝업'} callback={() => setReviewPopup(true)}></CommonBtn>

			<SpacerBottom size={100} />
		</Container>
	);
};

export default Popup;

const Dim = styled.div<{ type?: string }>`
	position: fixed;
	width: 100%;
	height: 100vh;
	left: 0;
	top: 0;
	background-color: ${(props) =>
		props.type === 'transparent' ? 'transparent' : 'rgba(0, 0, 0, 0.6)'};
	z-index: 100;
	display: flex;
	align-items: center;
`;

const Inner = styled.div`
	display: flex;
	width: 800px;
	margin: auto;
	background-color: white;
	flex-direction: column;
	padding: 50px;
	border-radius: 20px;
`;

const InnerReview = styled.div`
	height: 80%;
	display: flex;
	width: 1200px;
	margin: auto;
	background-color: white;
	flex-direction: column;
	padding: 50px;
	border-radius: 20px;
	overflow: scroll;
`;
