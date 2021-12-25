import { Main } from 'assets/styles/global-styled';
import Footer from 'components/Footer';
import Header from 'components/Header';
import MobileBottomTab from 'components/MobileBottomTab';
import Spinner from 'components/Spinner';
import * as React from 'react';
import Routers from './routes';

const App = () => {
	return (
		<>
			<Main>
				<Header />
				<Routers />
				<Footer />
				<MobileBottomTab />
			</Main>
			<Spinner />
		</>
	);
};

export default App;