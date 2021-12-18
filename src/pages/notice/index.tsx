import Color from 'assets/styles/color';
import { Container, H1, SpacerBottom } from 'assets/styles/global-styled';
import Paging from 'components/Paging';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const tempNoticeData = {
	maxSize: 302,
	currentPage: 1,
	list: [
		{
			id: 1,
			title: '모바일 화상 프로그램 업데이트 안내',
			date: '2021. 05. 23',
			isFixed: true,
		},
		{
			id: 2,
			title: '모바일 화상 프로그램 업데이트 안내',
			date: '2021. 05. 23',
			isFixed: false,
		},
		{
			id: 3,
			title: '모바일 화상 프로그램 업데이트 안내',
			date: '2021. 05. 23',
			isFixed: false,
		},
		{
			id: 4,
			title: '모바일 화상 프로그램 업데이트 안내',
			date: '2021. 05. 23',
			isFixed: false,
		},
		{
			id: 5,
			title: '모바일 화상 프로그램 업데이트 안내',
			date: '2021. 05. 23',
			isFixed: false,
		},
		{
			id: 6,
			title: '모바일 화상 프로그램 업데이트 안내',
			date: '2021. 05. 23',
			isFixed: false,
		},
		{
			id: 7,
			title: '모바일 화상 프로그램 업데이트 안내',
			date: '2021. 05. 23',
			isFixed: false,
		},
	],
};

const NoticeList = () => {
	const History = useHistory();
	return (
		<Container>
			<SpacerBottom size={100} mSize={50} />
			<H1>공지사항</H1>
			<SpacerBottom size={60} mSize={30} />

			<CommonTable>
				<Theader>
					<Tr>
						<Th aligin={'left'}>번호</Th>
						<Th>제목</Th>
						<Th aligin={'right'}>작성일</Th>
					</Tr>
				</Theader>

				<Tbody>
					{tempNoticeData.list.map((i, index) => {
						if (i.isFixed)
							return (
								<Tr
									key={index + 'notice'}
									isFixed={i.isFixed}
									onClick={() => {
										History.push(`/notice/${i.id}`);
									}}
								>
									<Td isFixed={i.isFixed}>공지</Td>
									<Td>{i.title}</Td>
									<Td aligin={'right'} color={Color.fontGray}>
										{i.date}
									</Td>
								</Tr>
							);
						return (
							<Tr
								key={index + 'notice'}
								isFixed={i.isFixed}
								onClick={() => {
									History.push(`/notice/${i.id}`);
								}}
							>
								<Td>{index}</Td>
								<Td>{i.title}</Td>
								<Td aligin={'right'} color={Color.fontGray}>
									{i.date}
								</Td>
							</Tr>
						);
					})}
				</Tbody>
			</CommonTable>
			<SpacerBottom size={50} />
			<Paging />
			<SpacerBottom size={150} />
		</Container>
	);
};

const CommonTable = styled.table`
	width: 100%;
`;

const Th = styled.th<{ aligin?: string }>`
	font-size: 18px;
	padding-top: 20px;
	padding-bottom: 20px;
	font-weight: normal;
	text-align: ${({ aligin }) => (aligin ? aligin : 'center')};

	@media only screen and (max-width: 768px) {
		font-size: 16px;
		padding-top: 10px;
		padding-bottom: 10px;
	}
`;
const Tbody = styled.tbody``;

const Td = styled.td<{ isFixed?: boolean; aligin?: string; color?: string }>`
	font-size: 18px;
	padding-top: 20px;
	padding-bottom: 20px;
	color: ${({ isFixed, color }) => (isFixed ? Color.fontPink : color ? color : Color.fontBlack)};
	text-align: ${({ aligin }) => (aligin ? aligin : 'left')};

	@media only screen and (max-width: 768px) {
		font-size: 12px;
	}
`;

const Tr = styled.tr<{ isFixed?: boolean }>`
	border-bottom: 1px solid ${Color.borderGray};
	background-color: ${(props) => (props.isFixed ? Color.grayF7F7F7 : 'white')};
	cursor: pointer;
	&:hover {
		transition: 0.3s;
		background-color: ${Color.grayF7F7F7};
	}
	${Td}:last-child {
		padding-right: 30px;
	}
	${Td}:first-child {
		padding-left: 30px;
	}

	@media only screen and (max-width: 768px) {
		${Td}:last-child {
			padding-right: 5px;
		}
		${Td}:first-child {
			padding-left: 5px;
			padding-right: 5px;
		}
	}
`;

const Theader = styled.thead`
	${Th}:last-child {
		padding-right: 30px;
	}
	${Th}:first-child {
		padding-left: 30px;
	}
	${Tr} {
		border: none;
	}
	border-bottom: 1px solid ${Color.gray6666};

	@media only screen and (max-width: 768px) {
		${Th}:last-child {
			padding-right: 10px;
		}
		${Th}:first-child {
			padding-left: 10px;
		}
	}
`;

export default NoticeList;
