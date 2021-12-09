import Color from 'assets/styles/color';
import { BodyFont, BottomLine, FlexContainer, SpacerBottom } from 'assets/styles/global-styled';
import * as React from 'react';
import img from './temp-img.png';
import styled from 'styled-components';
import CommonTextArea from 'components/CommonTextArea';
import StarRating from 'components/StarRating';
import CommonBtn from 'components/CommonBtn';

const ReviewPopup = () => {
	return (
		<>
			<BodyFont size={20} lineHeight={24} color={Color.fontBlack}>
				참여 모임 소감문 작성
			</BodyFont>
			<SpacerBottom size={10} />
			<BodyFont size={14} lineHeight={24} color={Color.activeGray}>
				참여하신 모임 소감문을 작성해주세요!
			</BodyFont>
			<SpacerBottom size={50} />
			<GroupInfoContainer>
				<GroupImageContainer>
					<GroupImage src={img} />
				</GroupImageContainer>
				<GroupInfoTextContainer>
					<GroupInfoTextRow>
						<TextTitle>모임 이름</TextTitle>
						<TextDesc>역사 문학 토론방</TextDesc>
					</GroupInfoTextRow>
					<GroupInfoTextRow>
						<TextTitle>모임 설명</TextTitle>
						<TextDesc>
							책에서 찾아낸 한줌의 소중한 문구와 그 문구의 깊음책에서 찾아낸 한줌의
							소중한 문구와 그 문구의 깊음 책에서 찾아낸 한줌의 소중한 문구와 그
							문구의 깊음 책에서 찾아낸 한줌의 소중한 문구와 그 문구의 깊음 책에서
							찾아낸 한줌의 소중한 문구와 그 문구의 깊음 책에서 찾아낸 한줌의 소중한
							문구와 그 문구의 깊음 책에서 찾아낸 한줌의 소중한 문구와 그 문구의 깊음
							책에서 찾아낸 한줌의 소중한 문구와 그 문구의 깊음 책에서 찾아낸 한줌의
							소중한 문구와 그 문구의 깊음
						</TextDesc>
					</GroupInfoTextRow>
					<GroupInfoTextRow>
						<TextTitle>카테고리</TextTitle>
						<TextDesc>역사문학</TextDesc>
					</GroupInfoTextRow>
					<GroupInfoTextRow>
						<TextTitle>모임 일자</TextTitle>
						<TextDesc>2021. 11. 23</TextDesc>
					</GroupInfoTextRow>
				</GroupInfoTextContainer>
			</GroupInfoContainer>
			<SpacerBottom size={20} />
			<BottomLine />
			<SpacerBottom size={30} />
			<CommonTextArea placeholder={''} title={'오늘 모임을 위해 준비한 내용은 무엇인가요?'} />
			<SpacerBottom size={50} />
			<CommonTextArea placeholder={''} title={'오늘 모임에서 감명깊은 내용은 무엇인가요?'} />
			<SpacerBottom size={50} />
			<FlexContainer direction={'column'}>
				<BodyFont size={18} lineHeight={20} color={Color.gray4444}>
					오늘 모임은 어떠셨나요?
				</BodyFont>
				<SpacerBottom size={20} />
				<StarRating starSize={50} />
				<SpacerBottom size={70} />
				<FlexContainer>
					<CommonBtn text={'소감문 제출'} size={400} />
				</FlexContainer>
			</FlexContainer>
		</>
	);
};

const GroupInfoContainer = styled.div`
	display: flex;
	align-items: center;
`;
const GroupImageContainer = styled.div`
	margin-right: 30px;
	flex-shrink: 0;
`;
const GroupImage = styled.img`
	width: 200px;
	height: 140px;
	border-radius: 10px;
`;

const TextDesc = styled.p`
	font-size: 12px;
	line-height: 20px;
	color: ${Color.gray4444};
`;
const TextTitle = styled(TextDesc)`
	width: 80px;
	flex-shrink: 0;
`;
const GroupInfoTextRow = styled.div`
	display: flex;
	margin-bottom: 5px;
`;
const GroupInfoTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	${GroupInfoTextRow}:last-child {
		margin-bottom: 0px;
	}
`;
export default ReviewPopup;
