import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import spinner, { name as spinnerName } from 'store/spinner-store';
import toast, { name as toastName } from 'store/toast-store';
import userinfo, { name as userInfoName } from 'store/userinfo-store';
import globalpopup, { name as globalPopupName } from 'store/globalpopup-store';
import globaldim, { name as globalDimName } from 'store/globaldim-store';
import layout, { name as layoutName } from 'store/layout-store';
import storage from 'redux-persist/lib/storage';

export const enum reducerList {
	spinnerName,
	toastName,
	userInfoName,
	globalPopupName,
	globalDimName,
	layoutName,
}

const persistConfig = {
	key: 'root',
	blacklist: [spinnerName, globalDimName, toastName],
	storage,
};

export const reducer = combineReducers({
	[spinnerName]: spinner,
	[toastName]: toast,
	[userInfoName]: userinfo,
	[globalPopupName]: globalpopup,
	[globalDimName]: globaldim,
	[layoutName]: layout,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export { spinnerName, userInfoName, toastName, globalPopupName, layoutName, globalDimName };

const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV === 'development',
	middleware: [],
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
