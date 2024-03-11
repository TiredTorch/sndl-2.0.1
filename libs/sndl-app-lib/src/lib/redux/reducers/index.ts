import {
	albumsService,
	authService,
	chatService,
	commentsService,
	postsService,
	songsService,
	usersService
} from "../api";
import {
	userReducer,
	userSlice
} from "../slices";

export const reducers = {
	[userSlice.name]: userReducer,

	[albumsService.reducerPath]: albumsService.reducer,
	[authService.reducerPath]: authService.reducer,
	[chatService.reducerPath]: chatService.reducer,
	[commentsService.reducerPath]: commentsService.reducer,
	[postsService.reducerPath]: postsService.reducer,
	[songsService.reducerPath]: songsService.reducer,
	[usersService.reducerPath]: usersService.reducer,
};