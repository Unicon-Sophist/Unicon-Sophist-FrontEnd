import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { userInfoName } from '../store';

interface IProps {
	exact?: boolean;
	path: string;
	component: React.ComponentType<any>;
}

const ProvideAuth = ({ component: Component }: IProps) => {
	const { loginStatus } = useSelector((state) => state[userInfoName]);
	if (loginStatus === 'login') {
		return <Route render={(otherProps) => <Component {...otherProps} />} />;
	}
	return (
		<Route
			render={() => (
				<Redirect
					to={{
						pathname: '/login',
					}}
				/>
			)}
		/>
	);
};

export default ProvideAuth;
