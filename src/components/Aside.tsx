import { BodyFont, FlexContainer, SpacerBottom } from 'assets/styles/global-styled';
import * as React from 'react';
import styled from 'styled-components';
import defaultProfile from 'assets/img/default-profile.png';
import Color from 'assets/styles/color';
import ArrRight from 'assets/img/arr-right.svg';
import { Link } from 'react-router-dom';

const Aside = () => {
	return (
		<AsideContainer>
			<FlexContainer justify={'flex-start'}>
				<ProfileImage src={defaultProfile} />
				<FlexContainer direction={'column'} aligin="flex-start">
					<BodyFont size={28} lineHeight={38} color="#000000">
						소피스트 유저
					</BodyFont>
					<SpacerBottom size={15} />
					<ArrFontContainer to={'/'}>
						<BodyFont size={14} lineHeight={19} color={Color.fontGray}>
							프로필 정보 변경
						</BodyFont>
						<ArrImg src={ArrRight} alt={'ArrRight'} />
					</ArrFontContainer>
				</FlexContainer>
			</FlexContainer>
			<SpacerBottom size={100} />

			<MyInfoListContainer>
				<MyInfoList>
					<BodyFont size={22} lineHeight={29}>
						내 정보
					</BodyFont>
				</MyInfoList>
				<SpacerBottom size={30} />
				<MyInfoList>
					<BodyFont size={16} lineHeight={29} color={Color.gray4444}>
						내가 개설한 모임
					</BodyFont>
					<BodyFont color={Color.fontGray}>2개</BodyFont>
				</MyInfoList>

				<MyInfoList>
					<BodyFont size={16} lineHeight={29} color={Color.gray4444}>
						내가 가입한 모임
					</BodyFont>
					<BodyFont color={Color.fontGray}>2개</BodyFont>
				</MyInfoList>

				<MyInfoList>
					<BodyFont size={16} lineHeight={29} color={Color.gray4444}>
						나의 소감문
					</BodyFont>
					<BodyFont color={Color.fontGray}>2개</BodyFont>
				</MyInfoList>

				<MyInfoList>
					<BodyFont size={16} lineHeight={29} color={Color.gray4444}>
						나의 참여 현황
					</BodyFont>
					<BodyFont color={Color.fontGray}>90%</BodyFont>
				</MyInfoList>
			</MyInfoListContainer>

			<SpacerBottom size={80} />

			<MyInfoListContainer>
				<MyInfoList>
					<BodyFont size={22} lineHeight={29}>
						메뉴
					</BodyFont>
				</MyInfoList>
				<SpacerBottom size={30} />
				<MyInfoList>
					<BodyFont size={16} lineHeight={29} color={Color.gray4444}>
						내가 개설한 모임
					</BodyFont>
				</MyInfoList>

				<MyInfoList>
					<BodyFont size={16} lineHeight={29} color={Color.gray4444}>
						내가 가입한 모임
					</BodyFont>
				</MyInfoList>

				<MyInfoList>
					<BodyFont size={16} lineHeight={29} color={Color.gray4444}>
						내가 찜한 모임
					</BodyFont>
				</MyInfoList>

				<MyInfoList>
					<BodyFont size={16} lineHeight={29} color={Color.gray4444}>
						마감된 모임
					</BodyFont>
				</MyInfoList>

				<MyInfoList>
					<BodyFont size={16} lineHeight={29} color={Color.gray4444}>
						나의 소감문
					</BodyFont>
				</MyInfoList>
			</MyInfoListContainer>
		</AsideContainer>
	);
};

const MyInfoList = styled.li`
	display: flex;
	justify-content: space-between;
	margin-bottom: 22px;
	aligin-items: center;
`;

const MyInfoListContainer = styled.ul`
	${MyInfoList}:first-child {
		margin-bottom: 0;
	}

	${MyInfoList}:last-child {
		margin-bottom: 0;
	}
`;

const AsideContainer = styled.div`
	width: 320px;
	flex-shrink: 0;

	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

const ArrFontContainer = styled(Link)`
	display: flex;
	align-items: center;
`;

const ArrImg = styled.img`
	margin-left: 10px;
`;
const ProfileImage = styled.img`
	margin-right: 20px;
`;

export default Aside;
