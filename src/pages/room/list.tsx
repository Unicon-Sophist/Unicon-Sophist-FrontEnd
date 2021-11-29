import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const RoomList = () => {
	const [roomList] = useState(['123', '1234', '12345']);

	return (
		<div className="">
			{roomList.map((i) => {
				return (
					<Link to={`room/${i}`} key={i}>
						<div
							className=""
							style={{ width: 100, height: 100, margin: 10, backgroundColor: 'red' }}
						>
							{i}
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default RoomList;
