import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import React from 'react';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from 'store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { render, hydrate } from 'react-dom';
import GlobalStyle from 'assets/styles/global-styled';

const rootElement = document.getElementById('root');
const persistor = persistStore(store);

const isEletron = process.env.REACT_APP_IS_ELECTRON === 'true';
if (rootElement) {
	if (rootElement.hasChildNodes()) {
		if (isEletron) {
			hydrate(
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<HashRouter basename={process.env.PUBLIC_URL}>
							<GlobalStyle />
							<App />
						</HashRouter>
					</PersistGate>
				</Provider>,
				rootElement,
			);
		} else {
			hydrate(
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<BrowserRouter basename={process.env.PUBLIC_URL}>
							<GlobalStyle />
							<App />
						</BrowserRouter>
					</PersistGate>
				</Provider>,
				rootElement,
			);
		}
	} else {
		if (isEletron) {
			render(
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<HashRouter basename={process.env.PUBLIC_URL}>
							<GlobalStyle />
							<App />
						</HashRouter>
					</PersistGate>
				</Provider>,
				rootElement,
			);
		} else {
			render(
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<BrowserRouter basename={process.env.PUBLIC_URL}>
							<GlobalStyle />
							<App />
						</BrowserRouter>
					</PersistGate>
				</Provider>,
				rootElement,
			);
		}
	}
}
