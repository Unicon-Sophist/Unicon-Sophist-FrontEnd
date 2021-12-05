import * as React from 'react';
import styled from 'styled-components';
import best from 'assets/img/best.png';
import book from 'assets/img/book.png';
import heartFull from 'assets/img/icon-heart-full.png';
import heartEmpty from 'assets/img/icon-heart-empty.png';
import Color from 'assets/styles/color';
import { BodyFont, FlexContainer } from 'assets/styles/global-styled';

const ReivewItem = ({ index }: { index: number }) => {
	return (
		<ReviewItemContainer index={index}>
			<ReviewImgContainer background={book}>
				{Math.floor((Math.random() * 100) % 2) === 0 && (
					<IsEnd>
						<EndTitle>마감되었습니다!</EndTitle>
					</IsEnd>
				)}

				<IsBestImg src={best} />
				<HeartImg
					src={Math.floor((Math.random() * 100) % 2) === 0 ? heartFull : heartEmpty}
				/>
			</ReviewImgContainer>
			<ReviewInfoContainer>
				<GroupText>역사 문화</GroupText>
				<TitleText>역사 문학 토론방</TitleText>

				<ContentContainer>
					<Content>
						책에서 찾아낸 한줌의 소중한 문구와 그 문구의 깊음 문구와 그...
					</Content>
				</ContentContainer>

				<FlexContainer justify={'space-between'}>
					<ReviewWritingText>소감문 작성하기</ReviewWritingText>
					<DateText>21. 11. 03 / 1:00 PM</DateText>
				</FlexContainer>
			</ReviewInfoContainer>
		</ReviewItemContainer>
	);
};

const ReviewWritingText = styled.p`
	color: ${Color.fontGray};
	font-size: 14px;
	line-height: 16px;
	border-bottom: 1px solid ${Color.fontGray};
`;

const DateText = styled.p`
	font-size: 10px;
	line-height: 18px;
	color: ${Color.grayCCCC};
`;

const Content = styled.h4`
	width: 100%;
	display: inline-block;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	font-size: 12px;
	line-height: 18px;
	color: ${Color.fontGray};
`;

const ContentContainer = styled.div`
	margin-bottom: 15px;
`;

const TitleText = styled(BodyFont)`
	color: ${Color.gray4444};
	margin-bottom: 5px;
`;

const GroupText = styled.h4`
	font-size: 10px;
	color: ${Color.mainPink};
	margin-bottom: 5px;
	font-weight: bold;
`;

const ReviewItemContainer = styled.div<{ index: number }>`
	flex-basis: 50%;
	padding-top: 3px;
	position: relative;
	display: flex;
	flex-direction: row;
	margin-bottom: 20px;
	padding-right: ${(prosp) => (prosp.index % 2 === 0 ? '20px' : '0px')};
	padding-left: ${(prosp) => (prosp.index % 2 === 1 ? '20px' : '0px')};
`;

const ReviewImgContainer = styled.div<{ background: any }>`
	width: 50%;
	position: relative;
	padding-top: 20px;
	background-image: url(${(props) => props.background});
	height: 120px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	border-radius: 20px;
	margin-right: 10px;
`;

const IsEnd = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	z-index: 1;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 20px;
`;

const EndTitle = styled.p`
	color: white;
	font-size: 16px;
`;

const HeartImg = styled.img`
	position: absolute;
	left: 10px;
	top: 10px;
`;

const IsBestImg = styled.img`
	position: absolute;
	right: 0;
	top: -15px;
	z-index: 3;
`;

const ReviewInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
export default ReivewItem;
