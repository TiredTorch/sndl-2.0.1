import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
    //user data section
	userId: number | null,
	userImage: string | null,
	userName: string | null,
	userStatus: string | null,

    //app state section
	isLoggedIn: boolean,
	isOpenNavBar: boolean,

    //user config section
	isWorkshopSoundMuted: boolean,
	isNotificationsEnabled: boolean,
	isListenHistoryPublic: boolean,
	isAdorable: boolean,
	isVisualizerEnabled: boolean,
} = {
    //user data section
	userId: 1,
	userImage: faker.image.url(),
	userName: faker.internet.displayName(),
	userStatus: faker.lorem.paragraph(),

    //app state section
	isLoggedIn: true,
	isOpenNavBar: false,
    
    //user config section
	isWorkshopSoundMuted: false,
	isNotificationsEnabled: false,
	isListenHistoryPublic: true,
	isAdorable: true,
	isVisualizerEnabled: true,
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