import { createApi } from "@reduxjs/toolkit/query/react";
import { authAxiosBaseQuery } from "../../axios/authBaseQuery/authBaseQuery";

export const albumsService = createApi({
	reducerPath: "albumsService",
	baseQuery: authAxiosBaseQuery({
		baseUrl: "api/albums"
	}),
	endpoints: (builder) => ({
		getAlbums: builder.query({
			query: (params) => ({
				url: "/all",
				method: "GET",
				params
			})
		}),
		getAlbum: builder.query({
			query: (params) => ({
				url: "/",
				method: "GET",
				params
			})
		}),
		getUserAlbums: builder.query({
			query: (params) => ({
				url: "/saved",
				method: "GET",
				params
			})
		}),
		createAlbum: builder.mutation({
			query: (body) => ({
				url: "/create",
				method: "POST",
				data: body
			})
		}),
		addSongToAlbum: builder.mutation({
			query: (body) => ({
				url: "/addSong",
				method: "POST",
				data: body
			})
		}),
	})
});

export const {
	getAlbums,
	getAlbum,
	getUserAlbums,
	createAlbum,
	addSongToAlbum
} = albumsService.endpoints;

export const {
	useGetAlbumsQuery,
	useGetAlbumQuery,
	useGetUserAlbumsQuery,
	useCreateAlbumMutation,
	useAddSongToAlbumMutation
} = albumsService;