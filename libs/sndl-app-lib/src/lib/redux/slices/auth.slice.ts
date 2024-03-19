import {
	createSlice,
	PayloadAction
} from "@reduxjs/toolkit";
import {
	login,
	register,
	resetPassword
} from "../api";

const initialState: {
	isLoggedIn: boolean;
	jwt: string;
	userName: string;
} = {
	isLoggedIn: false,
	jwt: "",
	userName: ""
};

export const authSlice = createSlice({
	name: "authSlice",
	initialState,
	reducers: {
		updateAccessToken(
			state, action: PayloadAction<string>
		) {
			state.jwt = action.payload;
			state.isLoggedIn = true;
		},
		updateIsLoggedIn(
			state, action: PayloadAction<boolean>
		) {
			state.isLoggedIn = action.payload;
		},
		clearUserData(state) {
			state.jwt = initialState.jwt;
			state.isLoggedIn = initialState.isLoggedIn;
		}
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			login.matchFulfilled,
			(
				state, { payload }
			) => {
				state.isLoggedIn = true;
				state.jwt = payload.token;
				state.userName = payload.userName;
			}
		);
		builder.addMatcher(
			register.matchFulfilled,
			(
				state, { payload }
			) => {
				state.isLoggedIn = true;
				state.jwt = payload.jwt;
			}
		);
		builder.addMatcher(
			resetPassword.matchFulfilled,
			(
				state, { payload }
			) => {
				state.isLoggedIn = true;
				state.jwt = payload.jwt;
			}
		);
	}
});

export const authReducer = authSlice.reducer;

export const {
	clearUserData,
	updateAccessToken,
	updateIsLoggedIn
} = authSlice.actions;