import { Main } from 'assets/styles/global-styled';
import Footer from 'components/Footer';
import Header from 'components/Header';
import * as React from 'react';
import Routers from './routes';

const App = () => {
	return (
		<Main>
			<Header />
			<Routers />
			<Footer />
		</Main>
	);
};

export default App;
