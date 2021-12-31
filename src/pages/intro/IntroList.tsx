import React, { useEffect, useRef, useState } from 'react';
import { introData } from 'utils';
import { throttle } from 'lodash';
import styled from 'styled-components';
import { SpacerBottom } from 'assets/styles/global-styled';

const IntroList = ({ scrollPostion }: { scrollPostion: number }) => {
	const elRefs = useRef<HTMLDivElement[]>([]);
	const [aniArray, setAniArray] = useState<HTMLDivElement[]>([]);
	const [activeList, setActiveList] = useState<{ isActive: boolean }[]>([
		{ isActive: false },
		{ isActive: false },
		{ isActive: false },
		{ isActive: false },
	]);

	useEffect(() => {
		const debounceFun = throttle(() => {
			let insertList = activeList.map((j) => j);
			aniArray.forEach((ani, index: number) => {
				const postionTop = ani.getBoundingClientRect().top;

				if (scrollPostion - 400 > postionTop) {
					insertList = activeList.map((item, i) => {
						if (i === index) return { isActive: true };
						return { ...item };
					});
				}
			});
			setActiveList(insertList);
		}, 1000);
		debounceFun();
		// eslint-disable-next-line
	}, [scrollPostion]);

	useEffect(() => {
		setAniArray(elRefs.current);
	}, []);

	return (
		<ListContainer>
			{introData.map((item, i) => {
				return (
					<IntroListItem
						index={i}
						active={activeList[i]?.isActive}
						key={item.key}
						ref={(e: HTMLDivElement) => {
							elRefs.current[i] = e;
						}}
					>
						<IntroLeftTxtContainer active={activeList[i]?.isActive}>
							<SpacerBottom size={16}>
								<VisualTitle>{item.title}</VisualTitle>
							</SpacerBottom>
							<SpacerBottom size={25}>
								<VisualDesc>
									{window.screen.width > 768
										? item.content.split('\n').map((line, index) => {
												return <div key={'text' + index}>{line}</div>;
										  })
										: item.content}
								</VisualDesc>
							</SpacerBottom>
						</IntroLeftTxtContainer>
						<IntroRightImgContainer active={activeList[i]?.isActive}>
							<IntroRightImg src={item.img} alt="" />
						</IntroRightImgContainer>
					</IntroListItem>
				);
			})}
			<SpacerBottom size={100} />
		</ListContainer>
	);
};

export default IntroList;

const ListContainer = styled.div`
	overflow: hidden;
	max-width: 1000px;
	margin: 0 auto;
	@media only screen and (max-width: 768px) {
		padding-left: 10px;
		padding-right: 10px;
	}
`;

const IntroListItem = styled.div<{ active: boolean; index: number }>`
	opacity: ${({ active }) => (active ? 1 : 0)};
	transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	transition: 0.9s;
	position: relative;

	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 100px 0;
	flex-direction: ${({ index }) => (index % 2 === 0 ? 'row-reverse' : 'row')};

	@media only screen and (max-width: 768px) {
		padding: 50px 0;
		flex-direction: column;
	}
`;

const VisualTitle = styled.h3`
	font-size: 28px;
	line-height: 42px;
	font-weight: 700;
	text-align: center;

	@media only screen and (max-width: 768px) {
		font-size: 20px;
		line-height: 28px;
	}
`;

const VisualDesc = styled.h5`
	font-size: 16px;
	line-height: 30px;
	color: #333333;
	text-align: center;
	margin-bottom: 20px;

	@media only screen and (max-width: 768px) {
		font-size: 12px;
		line-height: 24px;
	}
`;

const IntroLeftTxtContainer = styled.div<{ active: boolean }>`
	opacity: ${({ active }) => (active ? 1 : 0)};
	transform: translateX(${({ active }) => (active ? `0` : `300px`)});
	transition: 1.5s;
	transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
`;

const IntroRightImgContainer = styled.div<{ active: boolean }>`
	opacity: ${({ active }) => (active ? 1 : 0)};
	transform: translateX(${({ active }) => (active ? `0` : `-300px`)});
	transition: 1.5s;
	transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
`;

const IntroRightImg = styled.img`
	width: 500px;
`;
