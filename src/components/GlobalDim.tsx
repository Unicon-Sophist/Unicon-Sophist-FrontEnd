import * as React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { globalDimName, RootState } from 'store';
import { removeDim } from 'store/globaldim-store';

const GlobalDim = () => {
	const dispatch = useDispatch();
	const { isActive, type, callback } = useSelector((state: RootState) => state[globalDimName]);
	return isActive ? (
		<Dim
			type={type}
			onClick={() => {
				dispatch(removeDim());
				callback();
			}}
		/>
	) : (
		<></>
	);
};

const Dim = styled.div<{ type: string }>`
	position: fixed;
	width: 100%;
	height: 100vh;
	left: 0;
	top: 0;
	background-color: ${(props) =>
		props.type === 'transparent' ? 'transparent' : 'rgba(0, 0, 0, 0.6)'};
`;

export default GlobalDim;
