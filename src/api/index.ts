import axios from 'axios';
import store from '../store';
import { addAsyncCountValue, minusAsyncCountValue } from 'store/spinner-store';
const BASE_URL = 'http://localhost:8000/';

const { dispatch } = store;

const Axios = axios.create({
	baseURL: BASE_URL,
	timeout: 5000,
	withCredentials: true,
});

// axios 함수 호출 전 실행되는 함수
Axios.interceptors.request.use(
	(config) => {
		dispatch(addAsyncCountValue());
		return config;
	},
	(error) => Promise.reject(error),
);

// api 실행 후 response를 감지하여 데이터를 return
Axios.interceptors.response.use(
	(response) => {
		// 로딩 창을 끔
		dispatch(minusAsyncCountValue());
		return response;
	},
	(error) => {
		dispatch(minusAsyncCountValue());
		return Promise.reject(error);
	},
);

export default Axios;
