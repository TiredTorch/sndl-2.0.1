import {
	createSlice,
	PayloadAction
} from "@reduxjs/toolkit";
import { AlbumData } from "../../types";

const initialState: {
    //app state section
	isOpenNavBar: boolean,

    //user config section
	isWorkshopSoundMuted: boolean,
	isNotificationsEnabled: boolean,
	isListenHistoryPublic: boolean,
	isAdorable: boolean,
	isVisualizerEnabled: boolean,

    //audio and song data
	isMusicPlaying: boolean;
	currentPlaylist: AlbumData | null,
	songPlaylistIndex: number,
	currentSongTime: number,
	currentVolumeLevel: number
} = {
    //app state section
	isOpenNavBar: false,
    
    //user config section
	isWorkshopSoundMuted: false,
	isNotificationsEnabled: false,
	isListenHistoryPublic: true,
	isAdorable: true,
	isVisualizerEnabled: true,
    
    //audio and song data
	isMusicPlaying: false,
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
		},
		setIsMusicPlaying(
			state, value: PayloadAction<boolean>
		) {
			state.isMusicPlaying = value.payload;
		},
		setSongIndex(
			state, value: PayloadAction<number>
		) {
			state.songPlaylistIndex = value.payload;
		},
		setCurrentPlaylist(
			state, value: PayloadAction<AlbumData>
		) {
			state.currentPlaylist = value.payload;
		}
	}
});

export const userReducer = userSlice.reducer;

export const {
	toggleNavBar,
	setVolumeLevel,
	setSongTime,
	clearUserSliceState,
	setSongIndex,
	setCurrentPlaylist,
	setIsMusicPlaying
} = userSlice.actions;