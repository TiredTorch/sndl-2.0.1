import {
	userReducer,
	userSlice
} from "../slices";

export const reducers = {
	[userSlice.name]: userReducer
};