import React from 'react';
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	BarChart,
	Tooltip,
	Legend,
	Bar,
} from 'recharts';
import './dash.scss';

const Dashboard = () => {
	const tempNoticeData = {
		maxSize: 302,
		currentPage: 1,
		list: [
			{
				id: 1,
				title: '치약',
				date: '2021. 05. 23',
			},
			{
				id: 2,
				title: '게임',
				date: '2021. 05. 23',
			},
			{
				id: 3,
				title: '칫솔',
				date: '2021. 05. 23',
			},
			{
				id: 4,
				title: '젤다',
				date: '2021. 05. 23',
			},
			{
				id: 5,
				title: '모바일',
				date: '2021. 05. 23',
			},
			{
				id: 6,
				title: '프로그램 업데이트 안내',
				date: '2021. 05. 23',
			},
		],
	};

	const data = [
		{
			name: 'Page A',
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: 'Page B',
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: 'Page C',
			uv: 2000,
			pv: 9800,
			amt: 2290,
		},
		{
			name: 'Page D',
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: 'Page E',
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: 'Page F',
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: 'Page G',
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
	];

	const varData = [
		{
			name: 'Page A',
			uv: 4000,
			pv: 2400,
		},
		{
			name: 'Page B',
			uv: 3000,
			pv: 1398,
		},
		{
			name: 'Page C',
			uv: 2000,
			pv: 9800,
		},
		{
			name: 'Page D',
			uv: 2780,
			pv: 3908,
		},
		{
			name: 'Page E',
			uv: 1890,
			pv: 4800,
		},
		{
			name: 'Page F',
			uv: 2390,
			pv: 3800,
		},
		{
			name: 'Page G',
			uv: 3490,
			pv: 4300,
		},
	];
	return (
		<div className="dashboard">
			<LineChart width={600} height={300} data={data}>
				<Line type="monotone" dataKey="uv" stroke="#8884d8" />
				<CartesianGrid stroke="#ccc" />
				<XAxis dataKey="name" />
				<YAxis />
			</LineChart>

			<BarChart width={730} height={250} data={varData}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="pv" fill="#8884d8" />
				<Bar dataKey="uv" fill="#82ca9d" />
			</BarChart>

			<table className="dash">
				<thead>
					<tr>
						<th>순위</th>
						<th>검색어</th>
					</tr>
				</thead>

				<tbody>
					{tempNoticeData.list.map((i, index) => {
						return (
							<tr key={index + 'notice'}>
								<td>{index}</td>
								<td>{i.title}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Dashboard;
