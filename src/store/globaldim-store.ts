import { createSlice } from '@reduxjs/toolkit';

const { name, reducer, actions } = createSlice({
	name: 'dim',
	initialState: { isActive: false, type: '', callback: () => {} },
	reducers: {
		addDim(_, { payload }) {
			console.log(payload);
			return { isActive: true, ...payload.payload };
		},
		removeDim() {
			return { isActive: false, type: '', callback: () => {} };
		},
	},
});

const { addDim, removeDim } = actions;
export default reducer;
export { name, addDim, removeDim };
