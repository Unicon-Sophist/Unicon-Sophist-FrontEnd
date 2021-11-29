import Color from 'assets/styles/color';
import { BodyFont } from 'assets/styles/global-styled';
import * as React from 'react';
import styled from 'styled-components';

interface PropsTypes {
	tabList: { label: string; value: string; callback?: () => void }[];
	activeTab: string;
	setActiveTab: (tab: string) => void;
}

const CommonTab = (props: PropsTypes) => {
	return (
		<TabContaiber>
			{props.tabList.map((tab) => {
				return (
					<Tab
						key={tab.value}
						onClick={() => {
							props.setActiveTab(tab.value);
							tab.callback && tab.callback();
						}}
						isActive={tab.value === props.activeTab}
					>
						<TabText isActive={tab.value === props.activeTab}>{tab.label}</TabText>
					</Tab>
				);
			})}
		</TabContaiber>
	);
};

const TabText = styled(BodyFont)<{ isActive: boolean }>`
	font-size: 18px;
	line-height: 24px;
	font-weight: ${(props) => (props.isActive ? 'bold' : '400')};
	color: ${(props) => (props.isActive ? Color.gray6666 : Color.gray4444)};
`;

const Tab = styled.div<{ isActive: boolean }>`
	padding-bottom: 5px;
	border-bottom: 2px solid ${(props) => (props.isActive ? Color.mainPink : 'white')};
	margin-right: 35px;
	cursor: pointer;
	&:hover {
		border-color: ${Color.mainPink};
		${TabText} {
			color: ${Color.gray6666};
			font-weight: bold;
		}
	}
`;

const TabContaiber = styled.div`
	display: flex;
	${Tab}:last-child {
		margin-right: 0;
	}
`;
export default CommonTab;
