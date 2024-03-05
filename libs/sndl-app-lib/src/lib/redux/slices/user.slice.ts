import { createSlice } from "@reduxjs/toolkit";

const initialState: {
	isOpenNavBar: boolean
} = {
	isOpenNavBar: false
};

export const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {
		toggleNavBar(state) {
			state.isOpenNavBar = !state.isOpenNavBar;
		}
	}
});

export const userReducer = userSlice.reducer;

export const {
	toggleNavBar
} = userSlice.actions;