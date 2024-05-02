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
	id: number | null;
} = {
	isLoggedIn: false,
	jwt: "",
	id: null
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
				state.id = payload.id;
			}
		);
		builder.addMatcher(
			register.matchFulfilled,
			(
				state, { payload }
			) => {
				state.isLoggedIn = true;
				state.jwt = payload.token;
				state.id = payload.id;
			}
		);
		builder.addMatcher(
			resetPassword.matchFulfilled,
			(
				state, { payload }
			) => {
				state.isLoggedIn = true;
				state.jwt = payload.token;
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