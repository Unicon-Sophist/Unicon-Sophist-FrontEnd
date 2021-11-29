import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { addDim, removeDim } from 'store/globaldim-store';
import { useDispatch } from 'react-redux';
import GlobalDim from './GlobalDim';
import Color from 'assets/styles/color';
import arrBottom from 'assets/img/arr-bottom.png';
import { BodyFont } from 'assets/styles/global-styled';
import xbtn from 'assets/img/xbtn.svg';

interface PropsTypes {
	labelList: { label: string; value: string }[];
	selectList: { label: string; value: string }[];
	setSelectList: (value: string, label: string) => void;
	placeholder: string;
	title: string;
	max?: number;
}

const TagSelect = (props: PropsTypes) => {
	const [activeSelect, setActiveSelect] = useState<boolean>(false);
	const dispatch = useDispatch();
	const deleteActiveSelect = () => {
		setActiveSelect(false);
	};

	const activeSelectFun = React.useCallback(() => {
		if (activeSelect) {
			setActiveSelect(false);
			dispatch(removeDim());
		} else {
			setActiveSelect(true);
			dispatch(addDim({ payload: { type: 'transparent', callback: deleteActiveSelect } }));
		}
	}, [activeSelect, dispatch]);

	return (
		<SelectWrapper>
			<SelectTitle>
				{props.title} {props.max && <MaxText>(최대 {props.max}개)</MaxText>}
			</SelectTitle>
			<SelectContainer>
				<SelectBox activeSelect={activeSelect} onClick={activeSelectFun}>
					{props.placeholder}
				</SelectBox>
				{activeSelect ? (
					<SelectItemContainer>
						{props.labelList.map((label) => {
							return (
								<SelectItem
									onClick={() => props.setSelectList(label.value, label.label)}
								>
									<SelectItemFont
										isActiveItem={
											props.selectList.filter(
												(item) => item.value === label.value,
											).length > 0
										}
									>
										{label.label}
									</SelectItemFont>
								</SelectItem>
							);
						})}
					</SelectItemContainer>
				) : null}
			</SelectContainer>
			<TagContainer>
				{props.selectList.map((selectItem) => {
					return (
						<Tag
							onClick={() => props.setSelectList(selectItem.value, selectItem.label)}
						>
							<TagFont>{selectItem.label}</TagFont>
							<DeleteTag src={xbtn} />
						</Tag>
					);
				})}
			</TagContainer>
			<GlobalDim />
		</SelectWrapper>
	);
};

const SelectTitle = styled(BodyFont)`
	font-size: 14px;
	margin-bottom: 10px;
`;

const MaxText = styled.span`
	font-size: 10px;
	color: ${Color.mainRed};
`;

const DeleteTag = styled.img`
	margin-left: 10px;
`;

const SelectWrapper = styled.div`
	z-index: 10;
`;

const TagContainer = styled.div`
	display: flex;
	aligin-item: center;
`;

const Tag = styled.div`
	cursor: pointer;
	padding-left: 10px;
	padding-right: 10px;
	border-radius: 5px;
	background-color: ${Color.borderGray};
	height: 30px;
	margin-right: 10px;
	display: flex;
	align-items: center;
`;
const TagFont = styled(BodyFont)`
	font-size: 14px;
	color: ${Color.gray6666};
`;
const SelectContainer = styled.div`
	position: relative;
	z-index: 1;
	margin-bottom: 10px;
`;
const SelectBox = styled.div<{ activeSelect: boolean }>`
	cursor: pointer;
	height: 50px;
	background: #ffffff;
	border: 1px solid ${Color.grayDDDD};
	border-bottom-width: ${(props) => (props.activeSelect ? '0px' : '1px')};
	border-radius: 5px;
	border-bottom-left-radius: ${(props) => (props.activeSelect ? '0' : '5px')};
	border-bottom-right-radius: ${(props) => (props.activeSelect ? '0' : '5px')};
	font-size: 14px;
	line-height: 20px;
	padding: 15px;
	background-image: url(${arrBottom});
	background-repeat: no-repeat;
	background-position: center right 20px;
`;

const SelectItemFont = styled(BodyFont)<{ isActiveItem: boolean }>`
	cursor: pointer;
	font-weight: ${(props) => (props.isActiveItem ? 'bold' : '')};
	font-size: 14px;
	line-height: 20px;
`;

const SelectItem = styled.div`
	margin-bottom: 20px;
	&:hover ${SelectItemFont} {
		font-weight: bold;
	}
`;

const SelectItemContainer = styled.div`
	position: relative;
	top: -2px;
	border: 1px solid ${Color.grayDDDD};
	border-radius: 5px;
	border-top-left-radius: 0px;
	border-top-right-radius: 0px;
	border-top: 0px;
	font-size: 14px;
	line-height: 20px;
	padding: 15px;
	padding-top: 5px;
	${SelectItem}:last-child {
		margin-bottom: 0;
	}
`;

export default TagSelect;
