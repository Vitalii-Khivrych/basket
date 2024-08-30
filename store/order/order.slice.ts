import { SingleMenuLItemProps } from '@/components/MenuItem/MenuItem.props';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type OrderState = SingleMenuLItemProps[];

const initialState: OrderState = [];

export const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		dishAdded: (state, { payload }: PayloadAction<SingleMenuLItemProps>) => {
			state.push(payload);
		},
		dishRemoved: (state, { payload }: PayloadAction<SingleMenuLItemProps>) => {
			const index = state.findIndex(item => item.id === payload.id);
			if (index === -1) return;
			state.splice(index, 1);
		},
	},
});

export const { dishAdded, dishRemoved } = orderSlice.actions;

export default orderSlice.reducer;
