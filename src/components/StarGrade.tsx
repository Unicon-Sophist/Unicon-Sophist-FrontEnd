import * as React from 'react';
import styled from 'styled-components';
import emptyStar from 'assets/img/icon-startempty.png';
import fullStar from 'assets/img/icon-startfull.png';

const StartGrade = ({ size }: { size: number }) => {
	return (
		<StartContainer>
			{[1, 2, 3, 4, 5].map((item) => {
				if (item <= size) return <Star src={fullStar} key={'starGrade' + item} />;
				return <Star src={emptyStar} key={'starGrade' + item} />;
			})}
		</StartContainer>
	);
};

const StartContainer = styled.div`
	display: flex;
	aligin-items: center;
`;

const Star = styled.img``;

export default StartGrade;
