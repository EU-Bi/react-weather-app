import { configureStore } from "@reduxjs/toolkit";

import citiesReducer from "./citiesSlice";

export const store = configureStore({
	reducer: {
		cities: citiesReducer,
	},
});

store.subscribe(() => {
	localStorage.setItem(
		"cities",
		JSON.stringify(store.getState().cities.cities),
	);
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
