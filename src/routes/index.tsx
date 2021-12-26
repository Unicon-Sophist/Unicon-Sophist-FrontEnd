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
import ProvideAuth from './ProvideAuth';
import ScrollToTop from './ScrollTopRoute';
import Intro from 'pages/intro';

const routers = () => {
	return (
		<>
			<ScrollToTop />
			<Switch>
				<Route path="/" exact component={Main} />
				<ProvideAuth path="/room/:id" component={Room} />
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
				<Route path="/intro" exact component={Intro} />
			</Switch>
		</>
	);
};

export default routers;
