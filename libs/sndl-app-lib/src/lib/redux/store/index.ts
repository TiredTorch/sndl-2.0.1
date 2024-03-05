import {
	TypedUseSelectorHook,
	useDispatch,
	useSelector
} from "react-redux";
import {
	combineReducers,
	configureStore
} from "@reduxjs/toolkit";
import { reducers } from "../reducers";

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const store = configureStore({
	reducer: combinedReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootReduxState = ReturnType<typeof store.getState>;
