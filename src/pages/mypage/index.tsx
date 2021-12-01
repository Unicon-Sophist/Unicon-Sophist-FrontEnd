import Color from 'assets/styles/color';
import {
	BodyFont,
	Container,
	FlexContainer,
	NoShrinkContainer,
	SpacerBottom,
} from 'assets/styles/global-styled';
import Aside from 'components/Aside';
import styled from 'styled-components';
import * as React from 'react';
import { useState } from 'react';
import CommonTab from 'components/CommonTab';
import TagSelect from 'components/TagSelect';
import { genderList, specialtyList } from 'utils';
import CommonTextArea from 'components/CommonTextArea';
import CommonBtn from 'components/CommonBtn';
import ModifyProfileUploader from 'components/ModifyProfileUploader';
import CommonInput from 'components/CommonInput';
import CommonRadio from 'components/CommonRadio';

const Mypage = () => {
	const [nickname, setNickname] = useState<string>('sophist');
	const [selectList, setSelectList] = useState<{ label: string; value: string }[]>([]);
	const [selectList2, setSelectList2] = useState<{ label: string; value: string }[]>([]);
	const modMyInfoRef = React.useRef<HTMLDivElement>(null);
	const modDetailProfileRef = React.useRef<HTMLDivElement>(null);

	const changeSelectList = (value: string, label: string) => {
		const filterList = selectList.filter((item) => item.value === value);
		if (filterList.length > 0) {
			setSelectList(selectList.filter((item) => item.value !== value));
		} else {
			setSelectList([...selectList, { label, value }]);
		}
	};

	const changeSelectList2 = (value: string, label: string) => {
		const filterList = selectList2.filter((item) => item.value === value);
		if (filterList.length > 0) {
			setSelectList2(selectList2.filter((item) => item.value !== value));
		} else {
			setSelectList2([...selectList2, { label, value }]);
		}
	};

	const myPageTabList = [
		{
			label: '나의 정보 수정 ',
			value: 'modMyInfo',
			callback: () => modMyInfoRef.current && modMyInfoRef.current.scrollIntoView(),
		},
		{
			label: '상세 프로필 수정',
			value: 'modDetailProfile',
			callback: () =>
				modDetailProfileRef.current && modDetailProfileRef.current.scrollIntoView(),
		},
	];

	return (
		<Container>
			<SpacerBottom size={150} />
			<FlexContainer aligin="flex-start" justify="flex-start">
				<Aside />
				<AsideContent>
					<BodyFont size={22} lineHeight={29} color={Color.fontBrown}>
						나의 프로필
					</BodyFont>
					<SpacerBottom size={15} />
					<BodyFont size={16} lineHeight={36} color={Color.activeGray}>
						나의 프로필에서 프로필정보를 확인하고 수정해보세요!
					</BodyFont>
					<SpacerBottom size={60} />
					<CommonTab tabList={myPageTabList} activeTab={''} setActiveTab={() => {}} />
					<SpacerBottom size={70} />
					<div ref={modMyInfoRef}>
						<BodyFont>나의 정보 수정</BodyFont>
					</div>
					<SpacerBottom size={50} />
					<ModifyProfileContainer>
						<NoShrinkContainer style={{ marginTop: -20 }}>
							<ModifyProfileUploader />
						</NoShrinkContainer>

						<ModifyProfileContent>
							<CommonInput
								label={'이메일'}
								value={'sophist@sophist.co.kr'}
								setValue={() => {}}
								type={'text'}
								readonly={true}
							/>
							<SpacerBottom size={50} />
							<CommonInput
								label={'닉네임'}
								value={nickname}
								setValue={setNickname}
								type={'text'}
							/>
							<SpacerBottom size={25} />
							<CommonRadio
								label={'성별'}
								value={'1'}
								setValue={() => {}}
								radioList={genderList}
								colorType={'black'}
							/>
						</ModifyProfileContent>
					</ModifyProfileContainer>
					<SpacerBottom size={90} />
					<div ref={modDetailProfileRef}>
						<CommonTextArea
							placeholder={'자기 소개를 작성해주세요!'}
							title={'자기 소개를 작성해주세요!'}
						/>
					</div>

					<SpacerBottom size={20} />
					<TagSelect
						labelList={specialtyList}
						selectList={selectList}
						setSelectList={changeSelectList}
						placeholder={'카테고리를 선택해주세요.'}
						title={'전문 분야를 선택해주세요!'}
						max={3}
					/>
					<SpacerBottom size={30} />
					<TagSelect
						labelList={specialtyList}
						selectList={selectList2}
						setSelectList={changeSelectList2}
						placeholder={'카테고리를 선택해주세요.'}
						title={'관심 분야를 선택해주세요!'}
						max={3}
					/>

					<SpacerBottom size={70} />

					<CommonBtn text={'프로필 정보 변경'} />
					<SpacerBottom size={20} />
					<DelUsrFontContainer>
						<DelUsrFont>탈퇴하기</DelUsrFont>
					</DelUsrFontContainer>
				</AsideContent>
			</FlexContainer>
			<SpacerBottom size={150} />
		</Container>
	);
};

const DelUsrFontContainer = styled.div`
	display: flex;
	justify-content: center;
	cursor: pointer;
`;

const DelUsrFont = styled(BodyFont)`
	font-size: 13px;
	line-height: 18px;
	color: ${Color.fontGray};
	border-bottom: 1px solid ${Color.fontGray};
`;

const ModifyProfileContainer = styled.div`
	display: flex;
	aligin-items: flex-start;
`;

const AsideContent = styled.div`
	width: 100%;
	margin-left: 135px;
`;

const ModifyProfileContent = styled.div`
	width: 100%;
	margin-left: 85px;
`;

export default Mypage;
