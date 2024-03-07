import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
	userId: number | null,
	userImage: string | null,
	isLoggedIn: boolean,
	isOpenNavBar: boolean,
} = {
	userId: 1,
	userImage: faker.image.url(),
	isLoggedIn: true,
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