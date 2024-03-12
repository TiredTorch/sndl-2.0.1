import {
	albumsService,
	authService,
	chatService,
	postsService,
	usersService
} from "../api";
import {
	authReducer,
	authSlice,
	userReducer,
	userSlice
} from "../slices";

export const reducers = {
	[userSlice.name]: userReducer,
	[authSlice.name]: authReducer,

	[albumsService.reducerPath]: albumsService.reducer,
	[authService.reducerPath]: authService.reducer,
	[chatService.reducerPath]: chatService.reducer,
	[postsService.reducerPath]: postsService.reducer,
	[usersService.reducerPath]: usersService.reducer,
};