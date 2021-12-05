import * as React from 'react';
import book from 'assets/img/book.png';
import styled from 'styled-components';
import best from 'assets/img/best.png';
import StartGrade from './StarGrade';
import Color from 'assets/styles/color';
import heartFull from 'assets/img/icon-heart-full.png';
import heartEmpty from 'assets/img/icon-heart-empty.png';
import { BodyFont, FlexContainer } from 'assets/styles/global-styled';

const ClassItem = ({ hasmargin, index = 0 }: { hasmargin?: boolean; index?: number }) => {
	return (
		<ClassItemContainer hasmargin={hasmargin} index={index}>
			<ClassImgContainer background={book}>
				{Math.floor((Math.random() * 100) % 2) === 0 && (
					<IsEnd>
						<EndTitle>마감되었습니다!</EndTitle>
					</IsEnd>
				)}

				<IsBestImg src={best} />
				<HeartImg
					src={Math.floor((Math.random() * 100) % 2) === 0 ? heartFull : heartEmpty}
				/>
			</ClassImgContainer>

			<TitleContainer justify={'space-between'}>
				<TitleText>역사 문학 토론방</TitleText>
				<GroupText>역사 문화</GroupText>
			</TitleContainer>

			<ContentContainer>
				<Content>책에서 찾아낸 한줌의 소중한 문구와 그 문구의 깊음 문구와 그...</Content>
			</ContentContainer>

			<TagWrap>
				<TagContainer>
					<Tag>#역사</Tag>
					<Tag>#아시아</Tag>
					<Tag>#문화</Tag>
					<Tag>#동남아시아</Tag>
				</TagContainer>

				<StartGrade size={3} />
			</TagWrap>
		</ClassItemContainer>
	);
};

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

const ClassImgContainer = styled.div<{ background: any }>`
	position: relative;
	padding-top: 20px;
	margin-bottom: 15px;
	background-image: url(${(props) => props.background});
	height: 155px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	border-radius: 20px;
`;

const ClassItemContainer = styled.div<{ hasmargin?: boolean; index: number }>`
	padding-top: 3px;
	position: relative;
	margin-bottom: ${(props) => (props.hasmargin ? '20px' : 0)};
	margin-right: ${(props) => (props.hasmargin && (props.index + 1) % 3 !== 0 ? '30px' : 0)};
`;

const ContentContainer = styled.div`
	margin-bottom: 10px;
`;

const TagWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const TitleText = styled(BodyFont)`
	color: ${Color.gray4444};
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

const GroupText = styled.h4`
	font-size: 10px;
	color: ${Color.mainPink};
	font-weight: bold;
`;

const Tag = styled.p`
	font-size: 10px;
	color: ${Color.activeGray};
	margin-right: 5px;
`;

const TagContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	${Tag}:last-child {
		margin-right: 0px;
	}
`;

const TitleContainer = styled(FlexContainer)`
	margin-bottom: 5px;
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
export default ClassItem;
