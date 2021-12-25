import * as React from 'react';
import GroupDetail from 'pages/group/Detail';
import GroupList from 'pages/group';
import Main from 'pages/main';
import MyClass from 'pages/myclass';
import Mypage from 'pages/mypage';
import NoticeList from 'pages/notice';
import NoticeDetail from 'pages/notice/detail';
import Room from 'pages/room/room';
import SiginIn from 'pages/signin';
import SiginUp from 'pages/signup';
import Dashboard from 'pages/dashboard';
import KakaoLogin from 'pages/signin/KakaoLogin';
import { Route, Switch } from 'react-router-dom';

const routers = () => {
	return (
		<Switch>
			<Route path="/" exact component={Main} />
			<Route path="/room/:id" exact component={Room} />
			<Route path="/login" exact component={SiginIn} />
			<Route path="/sign-up" exact component={SiginUp} />
			<Route path="/mypage" exact component={Mypage} />
			<Route path="/mypage/class" exact component={MyClass} />
			<Route path="/notice" exact component={NoticeList} />
			<Route path="/notice/:noticeId" exact component={NoticeDetail} />
			<Route path="/group" exact component={GroupList} />
			<Route path="/Dashboard" exact component={Dashboard} />
			<Route path="/group/:groupId" exact component={GroupDetail} />
			<Route path="/login/kakao" exact component={KakaoLogin} />
		</Switch>
	);
};

export default routers;
