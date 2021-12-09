import * as React from 'react';
import styled from 'styled-components';
import emptyStar from 'assets/img/icon-startempty.png';
import fullStar from 'assets/img/icon-startfull.png';

const StartGrade = ({ size, starSize }: { size: number; starSize?: number }) => {
	return (
		<StartContainer>
			{[1, 2, 3, 4, 5].map((item) => {
				if (item <= size)
					return (
						<Star
							starSize={starSize ? starSize : 18}
							src={fullStar}
							key={'starGrade' + item}
						/>
					);
				return (
					<Star
						starSize={starSize ? starSize : 18}
						src={emptyStar}
						key={'starGrade' + item}
					/>
				);
			})}
		</StartContainer>
	);
};

const StartContainer = styled.div`
	display: flex;
	aligin-items: center;
`;

const Star = styled.img<{ starSize: number }>`
	width: ${({ starSize }) => starSize + 'px'};
`;

export default StartGrade;
