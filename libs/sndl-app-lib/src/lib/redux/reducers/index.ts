import {
	authService,
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

	[authService.reducerPath]: authService.reducer,
	[usersService.reducerPath]: usersService.reducer,
	// [albumsService.reducerPath]: albumsService.reducer,
	// [chatService.reducerPath]: chatService.reducer,
	// [commentsService.reducerPath]: commentsService.reducer,
	// [postsService.reducerPath]: postsService.reducer,
	// [songsService.reducerPath]: songsService.reducer,
};