import { configureStore } from '@reduxjs/toolkit';
import orderSlice from './order/order.slice';

export const makeStore = () => {
	return configureStore({
		reducer: { order: orderSlice },
	});
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
