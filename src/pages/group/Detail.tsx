import { Container, H4, SpacerBottom } from 'assets/styles/global-styled';
import * as React from 'react';
import styled from 'styled-components';
import best from 'assets/img/best.png';
import book from 'assets/img/book.png';
import Color from 'assets/styles/color';
import { FlexContainer } from 'assets/styles/global-styled';
import StartGrade from 'components/StarGrade';

const GroupDetail = () => {
	return (
		<Container>
			<SpacerBottom size={150} />

			<GroupItemContainer>
				<GroupImageWrap>
					<GroupImgContainer background={book}>
						{/* {Math.floor((Math.random() * 100) % 2) === 0 && (
						<IsEnd>
							<EndTitle>마감되었습니다!</EndTitle>
						</IsEnd>
					)} */}

						<IsBestImg src={best} />
					</GroupImgContainer>

					<FlexContainer>
						<StartGrade size={3} starSize={30} />
						<AfterFeelContainer>
							<AfterFeelGrade>3.0</AfterFeelGrade>
							<AfterFeelNumber>(5명의 후기)</AfterFeelNumber>
						</AfterFeelContainer>
					</FlexContainer>
				</GroupImageWrap>

				<GroupInfoContainer>
					<GroupText>역사 문화</GroupText>
					<TitleText>역사 문학 토론방</TitleText>

					<ContentContainer>
						<Content>
							책에서 찾아낸 한줌의 소중한 문구와 그 문구의 깊음 문구와 그... 책에서
							찾아낸 한줌의 소중한 문구와 그 문구의 깊음 문구와 그... 책에서 찾아낸
						</Content>
					</ContentContainer>

					<TagWrap>
						<TagContainer>
							<Tag>#역사</Tag>
							<Tag>#아시아</Tag>
							<Tag>#문화</Tag>
							<Tag>#동남아시아</Tag>
						</TagContainer>
					</TagWrap>
				</GroupInfoContainer>
			</GroupItemContainer>

			<SpacerBottom size={100} />
		</Container>
	);
};

const AfterFeelContainer = styled.div`
	display: flex;
	aligin-item: center;
	margin-left: 20px;
`;

const AfterFeelGrade = styled.p`
	font-size: 25px;
	line-height: 30px;
	color: ${Color.gray4444};
	font-family: Roboto;
	font-weight: bold;
`;

const AfterFeelNumber = styled.p`
	font-size: 18px;
	line-height: 30px;
	color: ${Color.fontGray};
	margin-right: 5px;
`;

const Tag = styled.p`
	font-size: 14px;
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

const TagWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const TitleText = styled(H4)`
	font-weight: bold;
	margin-bottom: 30px;
`;

const Content = styled.h4`
	width: 100%;
	font-size: 18px;
	line-height: 28px;
	color: ${Color.activeGray};
`;

const ContentContainer = styled.div`
	margin-bottom: 30px;
`;

const GroupText = styled.h4`
	font-size: 14px;
	color: ${Color.mainPink};
	margin-bottom: 5px;
`;

const GroupItemContainer = styled.div`
	flex-basis: 100%;
	padding-top: 3px;
	position: relative;
	display: flex;
	flex-direction: row;
	margin-bottom: 20px;
`;

const GroupImageWrap = styled.div`
	width: 40%;
`;

const GroupImgContainer = styled.div<{ background: any }>`
	position: relative;
	background-image: url(${(props) => props.background});
	height: 350px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	border-radius: 20px;
	margin-right: 50px;
	margin-bottom: 25px;
`;

const IsBestImg = styled.img`
	position: absolute;
	right: 0;
	top: -15px;
	z-index: 3;
`;

const GroupInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 60%;
`;

export default GroupDetail;
