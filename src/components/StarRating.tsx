import React, { useEffect, useState } from 'react';
import fullStar from 'assets/img/full-star.png';
import emptyStar from 'assets/img/empty-star.png';
import styled from 'styled-components';

interface PropsType {
	starNumber?: number;
	setStartNumber?: (value: number) => void;
	isFixed?: boolean;
	starSize?: number;
}

const StarRating = (props: PropsType) => {
	const [fixed, setFixed] = useState<boolean>(false);
	const [starRatingOnOff, setStarRatingOnOff] = useState<boolean[]>([]);

	function mouseOverStarRating(inx: number) {
		let tempStarRating: Array<boolean> = [];
		if (!fixed) {
			for (let i = 0; i < 5; i++) {
				if (i <= inx) {
					tempStarRating.push(true);
				} else {
					tempStarRating.push(false);
				}
			}
			setStarRatingOnOff(tempStarRating);
		}
	}

	useEffect(() => {
		let starRatingState: Array<boolean> = [];
		for (let i = 0; i < 5; i++) {
			starRatingState.push(false);
		}
		setStarRatingOnOff(starRatingState);
	}, []);

	return (
		<StarContainer>
			<Star
				starSize={props.starSize}
				isFull={starRatingOnOff[0]}
				onMouseOver={() => mouseOverStarRating(0)}
				onClick={() => setFixed(!fixed)}
			/>
			<Star
				starSize={props.starSize}
				isFull={starRatingOnOff[1]}
				onMouseOver={() => mouseOverStarRating(1)}
				onClick={() => setFixed(!fixed)}
			/>
			<Star
				starSize={props.starSize}
				isFull={starRatingOnOff[2]}
				onMouseOver={() => mouseOverStarRating(2)}
				onClick={() => setFixed(!fixed)}
			/>
			<Star
				starSize={props.starSize}
				isFull={starRatingOnOff[3]}
				onMouseOver={() => mouseOverStarRating(3)}
				onClick={() => setFixed(!fixed)}
			/>
			<Star
				starSize={props.starSize}
				isFull={starRatingOnOff[4]}
				onMouseOver={() => mouseOverStarRating(4)}
				onClick={() => setFixed(!fixed)}
			/>
		</StarContainer>
	);
};

const StarContainer = styled.div`
	display: flex;
	aligin-items: center;
`;
const Star = styled.i<{ isFull: boolean; starSize?: number }>`
	width: ${(props) => (props.starSize ? props.starSize + 'px' : '33px')};
	height: ${(props) => (props.starSize ? props.starSize + 'px' : '33px')};
	margin-right: 10px;
	background-image: url(${(props) => (props.isFull ? emptyStar : fullStar)});
	background-size: cover;
	background-repeat: no-repeat;
`;

export default StarRating;
