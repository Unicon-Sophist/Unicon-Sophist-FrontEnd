import Main from 'pages/main';
import MyClass from 'pages/myclass';
import Mypage from 'pages/mypage';
import RoomList from 'pages/room/list';
import Room from 'pages/room/room';
import SiginIn from 'pages/signin';
import SiginUp from 'pages/signup';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

const routers = () => {
	return (
		<Switch>
			<Route path="/" exact component={Main} />
			<Route path="/list" exact component={RoomList} />
			<Route path="/room/:id" exact component={Room} />
			<Route path="/login" exact component={SiginIn} />
			<Route path="/sign-up" exact component={SiginUp} />
			<Route path="/mypage" exact component={Mypage} />
			<Route path="/mypage/class" exact component={MyClass} />
		</Switch>
	);
};

export default routers;
