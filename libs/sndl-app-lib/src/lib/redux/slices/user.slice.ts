import { faker } from "@faker-js/faker";
import {
	createSlice,
	PayloadAction
} from "@reduxjs/toolkit";

const initialState: {
    //user data section
	userId: number | null,
	userImage: string | null,
	userName: string | null,
	userStatus: string | null,

    //app state section
	isOpenNavBar: boolean,

    //user config section
	isWorkshopSoundMuted: boolean,
	isNotificationsEnabled: boolean,
	isListenHistoryPublic: boolean,
	isAdorable: boolean,
	isVisualizerEnabled: boolean,

    //audio and song data
	currentPlaylist: null,
	songPlaylistIndex: number,
	currentSongTime: number,
	currentVolumeLevel: number
} = {
    //user data section
	userId: 1,
	userImage: faker.image.url(),
	userName: faker.internet.displayName(),
	userStatus: faker.lorem.paragraph(),

    //app state section
	isOpenNavBar: false,
    
    //user config section
	isWorkshopSoundMuted: false,
	isNotificationsEnabled: false,
	isListenHistoryPublic: true,
	isAdorable: true,
	isVisualizerEnabled: true,
    
    //audio and song data
	currentPlaylist: null,
	songPlaylistIndex: 0,
	currentSongTime: 0,
	currentVolumeLevel: 1
};

export const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {
		clearUserSliceState(state) {
			state = initialState;  
		},
		toggleNavBar(state) {
			state.isOpenNavBar = !state.isOpenNavBar;
		},
		setVolumeLevel(
			state, value: PayloadAction<number>
		) {
			state.currentVolumeLevel = value.payload;
		},
		setSongTime(
			state, value: PayloadAction<number>
		) {
			state.currentSongTime = value.payload;
		}
	}
});

export const userReducer = userSlice.reducer;

export const {
	toggleNavBar,
	setVolumeLevel,
	setSongTime,
	clearUserSliceState
} = userSlice.actions;