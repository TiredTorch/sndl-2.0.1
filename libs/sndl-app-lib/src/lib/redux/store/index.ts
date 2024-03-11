import {
	TypedUseSelectorHook,
	useDispatch,
	useSelector
} from "react-redux";
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE
} from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";
import {
	combineReducers,
	configureStore
} from "@reduxjs/toolkit";
import {
	authService,
	usersService
} from "../api";
import { reducers } from "../reducers";
import { encryptTransform } from "./encryptTransform";

const secretKey: string = import.meta.env.VITE_CRYPTO_JS_KEY ?? "secretKey";

const encryptor = encryptTransform({ secretKey: secretKey });

const persistConfig = {
	key: "root",
	storage,
	whitelist: [
		"authSlice",
		"userSlice"
	],
	transforms: [encryptor]
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

const persistedReducer = persistReducer(
	persistConfig,
	combinedReducer
);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: import.meta.env.DEV ? true : false,
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER
				]
			}
		}).concat([
			authService.middleware,
			usersService.middleware
		])
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootReduxState = ReturnType<typeof store.getState>;
