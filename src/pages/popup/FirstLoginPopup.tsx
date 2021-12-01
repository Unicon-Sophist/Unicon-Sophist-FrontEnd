import Color from 'assets/styles/color';
import { BodyFont, FlexContainer, SpacerBottom } from 'assets/styles/global-styled';
import CommonBtn from 'components/CommonBtn';
import CommonTextArea from 'components/CommonTextArea';
import TagSelect from 'components/TagSelect';
import * as React from 'react';
import { useState } from 'react';
import { specialtyList } from 'utils';

const FirstLoginPopup = () => {
	const [selectList, setSelectList] = useState<{ label: string; value: string }[]>([]);
	const [selectList2, setSelectList2] = useState<{ label: string; value: string }[]>([]);

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

	return (
		<>
			<BodyFont size={20} lineHeight={24} color={Color.fontBlack}>
				상세 프로필 작성
			</BodyFont>
			<SpacerBottom size={10} />
			<BodyFont size={14} lineHeight={24} color={Color.activeGray}>
				아래의 질문을 작성하셔서 프로필을 완성해주세요!
			</BodyFont>

			<SpacerBottom size={50} />

			<CommonTextArea
				placeholder={'자기 소개를 작성해주세요!'}
				title={'자기 소개를 작성해주세요!'}
			/>
			<SpacerBottom size={50} />
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
			<FlexContainer>
				<CommonBtn text={'상세 프로필 제출'} size={400} />
			</FlexContainer>
		</>
	);
};

export default FirstLoginPopup;
