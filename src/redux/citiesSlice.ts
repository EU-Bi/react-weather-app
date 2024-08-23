import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CitiesState {
	cities: string[];
}

const initialState: CitiesState = {
	cities:
		localStorage.getItem("cities") ?? "[]"
			? JSON.parse(localStorage.getItem("cities") ?? "[]")
			: [],
};

export const citiesSlice = createSlice({
	name: "cities",
	initialState,
	reducers: {
		addCity: (state, action: PayloadAction<string>) => {
			state.cities.push(action.payload);
		},
		deleteCity: (state, action: PayloadAction<string>) => {
			state.cities = state.cities.filter((city) => city !== action.payload);
		},
	},
});

export const { addCity, deleteCity } = citiesSlice.actions;

export const getCities = (state: { cities: CitiesState }) => {
	return state.cities.cities;
};

export default citiesSlice.reducer;
