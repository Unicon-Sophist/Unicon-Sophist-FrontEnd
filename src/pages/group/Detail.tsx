import { BodyFont, Container, H4, SpacerBottom } from 'assets/styles/global-styled';
import styled from 'styled-components';
import best from 'assets/img/best.png';
import book from 'assets/img/book.png';
import Color from 'assets/styles/color';
import { FlexContainer } from 'assets/styles/global-styled';
import StartGrade from 'components/StarGrade';
import api from 'api';
import * as React from 'react';
import CommonTab from 'components/CommonTab';
import CommonBtn from 'components/CommonBtn';
import { isMobileSize, convertDate } from 'utils';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

type Params = {
	groupId: string;
};

type DetailParams = {
	9: string;
	categoryName: string;
	fileFullPath: string;
	groupDate: string;
	groupDesc: string;
	groupHeadCount: number;
	groupLeader: string;
	groupName: string;
	groupStarPoint: number;
	groupStartDay: string;
	groupState: string;
	groupStartTime: string;
};

const GroupDetail = () => {
	const params = useParams<Params>();
	const [detail, setDetail] = useState<DetailParams>();

	useEffect(() => {
		api.get(`group/${params.groupId}`).then((i) => {
			setDetail(i.data.content[0]);
		});
	}, [params.groupId]);

	const detailTab = [
		{
			label: '모임소개',
			value: 'introGruop',
			callback: () => console.log(''),
		},
		{
			label: '모임 상세 정보',
			value: 'introGroupDetail',
			callback: () => console.log(''),
		},
		{
			label: '모임 방장 정보',
			value: 'introGruopLeaderInfo',
			callback: () => console.log(''),
		},
	];

	return (
		<Container>
			<SpacerBottom size={150} mSize={30} />

			<GroupItemContainer>
				<GroupImageWrap>
					<GroupImgContainer background={book}>
						<IsBestImg src={best} />
					</GroupImgContainer>

					<FlexContainer>
						<StartGrade size={3} starSize={30} />
						<AfterFeelContainer>
							<AfterFeelGrade>{detail ? detail.groupStarPoint : 5}</AfterFeelGrade>
							<AfterFeelNumber>(5명의 후기)</AfterFeelNumber>
						</AfterFeelContainer>
					</FlexContainer>
				</GroupImageWrap>

				<GroupInfoContainer>
					<GroupText>{detail ? detail.categoryName : ''}</GroupText>
					<TitleText>{detail ? detail.groupName : ''}</TitleText>

					<ContentContainer>
						<Content>{detail ? detail.groupDesc : ''}</Content>
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

			<SpacerBottom size={100} mSize={50} />

			<SpacerBottom size={65} mSize={30}>
				<GroupTabInfoContainer justify={'space-between'} aligin={'flex-start'}>
					<LeftContentContainer>
						<SpacerBottom size={65} mSize={30}>
							<CommonTab
								tabList={detailTab}
								activeTab={'introGruop'}
								setActiveTab={() => {}}
							/>
						</SpacerBottom>

						<SpacerBottom size={20}>
							<GroupTitle>{detail ? detail.groupName : ''}</GroupTitle>
						</SpacerBottom>

						<SpacerBottom size={40}>
							<GroupDesc>{detail ? detail.groupDesc : ''}</GroupDesc>
						</SpacerBottom>

						<SpacerBottom size={40}>
							<GroupTitle>모임 상세 정보</GroupTitle>
						</SpacerBottom>

						<GroupTable>
							<colgroup>
								<col width="100" />
							</colgroup>
							<Tbody>
								<Tr>
									<Th isTerm={true}>모임 기간 </Th>
									<Td>
										{detail
											? detail.groupDate.split('~')[0].split(' ')[0] +
											  ' ~ ' +
											  detail.groupDate.split('~')[1].split(' ')[0]
											: ''}
									</Td>
								</Tr>
								<Tr>
									<Th>모임 요일</Th>
									<Td>{detail ? convertDate(detail.groupStartDay) : ''}</Td>
								</Tr>
								<Tr>
									<Th>모임 시간</Th>
									<Td>{detail ? detail.groupStartTime + '시' : ''}</Td>
								</Tr>
								<Tr>
									<Th>모임 상태</Th>
									<Td>
										{detail ? (detail.groupState === 'Y' ? '모임 중' : '') : ''}
									</Td>
								</Tr>
							</Tbody>
						</GroupTable>

						<SpacerBottom size={20}>
							<Link to={`/room/${params.groupId}`}>
								<FlexContainer>
									<CommonBtn
										size={isMobileSize ? window.innerWidth - 20 : 300}
										text={'참여하기'}
										callback={() => {}}
									/>
								</FlexContainer>
							</Link>
						</SpacerBottom>
					</LeftContentContainer>

					<RightBox />
				</GroupTabInfoContainer>
			</SpacerBottom>
		</Container>
	);
};

const GroupTable = styled.table`
	width: 100%;
	margin-bottom: 30px;
`;

const Tr = styled.tr``;
const Tbody = styled.tbody``;
const Th = styled.th<{ isTerm?: boolean }>`
	font-size: 18px;
	line-height: 28px;
	color: ${Color.fontBlack};
	padding: 10px;
	border-bottom: 1px solid ${Color.borderGray};
	background-color: ${({ isTerm }) => (isTerm ? Color.grayF7F7F7 : 'white')};
	padding-left: ${({ isTerm }) => (isTerm ? '10px' : 0)};
	font-weight: 400;
	text-align: left;
`;
const Td = styled.td`
	font-size: 18px;
	line-height: 28px;
	color: ${Color.fontBlack};
	padding: 10px;
	border-bottom: 1px solid ${Color.borderGray};
	background-color: white;
	padding-left: 20px;
`;

const GroupTabInfoContainer = styled(FlexContainer)`
	@media only screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

const GroupDesc = styled(BodyFont)`
	font-size: 18px;
	line-height: 28px;
	color: ${Color.fontBlack};
`;

const GroupTitle = styled(BodyFont)`
	font-size: 18px;
	line-height: 24px;
	font-weight: bold;
	color: ${Color.gray4444};
`;

const LeftContentContainer = styled.div``;

const RightBox = styled.div`
	flex-shrink: 0;
	width: 400px;
	border: 1px solid #dddddd;
	height: 645px;
	border-radius: 10px;
	margin-left: 130px;
	@media only screen and (max-width: 768px) {
		width: 100%;
		margin-left: 0;
		height: 300px;
	}
	margin-bottom: 200px;
`;

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
	margin-left: 5px;
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

	@media only screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

const GroupImageWrap = styled.div`
	width: 40%;

	@media only screen and (max-width: 768px) {
		width: 100%;
		margin-bottom: 30px;
	}
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

	@media only screen and (max-width: 768px) {
		margin-right: 0;
	}
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

	@media only screen and (max-width: 768px) {
		width: 100%;
	}
`;

export default GroupDetail;
