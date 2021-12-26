import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { removeToast } from 'store/toast-store';
import store, { toastName } from '../store';
import errorWhite from 'assets/img/error-white.svg';
import styled from 'styled-components';

const Toast = () => {
	const convertBackgroundColor = (type: string): string => {
		if (type === 'error') {
			return '#333333';
		} else if (type === 'info') {
			return '#2f80ed';
		}
		return '#ff3131';
	};
	const toast = useSelector((state) => state[toastName]);
	const { dispatch } = store;
	const { isActive, type, content } = toast;
	useEffect(() => {
		if (isActive) {
			setTimeout(() => {
				dispatch(removeToast());
			}, 2500);
		}
	}, [isActive, dispatch]);

	return (
		<ToastContainer isActive={isActive} backgroundColor={convertBackgroundColor(type)}>
			<ToastContent>
				<ToastImgContainer>
					<ToastImg src={errorWhite} alt="error-white" />
				</ToastImgContainer>
				<ToastContentText>{content || ''}</ToastContentText>
			</ToastContent>
		</ToastContainer>
	);
};

export default Toast;

const ToastContainer = styled.div<{ isActive: boolean; backgroundColor: string }>`
	opacity: ${({ isActive }) => (isActive ? 1 : 0)};
	display: flex;
	align-items: center;
	justify-self: center;
	top: ${({ isActive }) => (isActive ? `100px` : `-100%`)};
	left: 50%;
	transform: translateX(-50%);
	z-index: 999;
	position: fixed;
	padding: 16px 24px;
	border-radius: 6px;
	box-shadow: 0 6px 12px 0 rgba(117, 119, 123, 0.3);
	background-color: ${({ backgroundColor }) => backgroundColor};
	box-sizing: border-box;
	max-width: 500px;
	min-width: 350px;
	transition: opacity 0.3s;
	border-radius: 28px;
`;

const ToastContent = styled.div`
	display: flex;
	align-items: center;
`;

const ToastImgContainer = styled.div``;

const ToastImg = styled.img`
	width: 24px;
	height: 24px;
	margin-right: 8px;
`;

const ToastContentText = styled.p`
	font-size: 16px;
	line-height: 20px;
	color: white;
`;
