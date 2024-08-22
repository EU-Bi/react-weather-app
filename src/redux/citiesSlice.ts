import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CitiesState {
	cities: string[];
}

const initialState: CitiesState = {
	cities: [],
};

export const citiesSlice = createSlice({
	name: "cities",
	initialState,
	reducers: {
		addCity: (state, action: PayloadAction<string>) => {
			state.cities.push(action.payload);
		},
	},
});

export const { addCity } = citiesSlice.actions;

export const getCities = (state: { cities: CitiesState }) => {
	return state.cities.cities;
};

export default citiesSlice.reducer;
