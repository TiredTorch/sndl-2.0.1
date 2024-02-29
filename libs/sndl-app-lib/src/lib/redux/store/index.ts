import {
	combineReducers,
	configureStore
} from "@reduxjs/toolkit";
import { reducers } from "../reducers";

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const store = configureStore({
	reducer: combinedReducer
});