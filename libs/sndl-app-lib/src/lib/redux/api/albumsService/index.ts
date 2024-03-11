import { createApi } from "@reduxjs/toolkit/query/react";
import { authAxiosBaseQuery } from "../../axios/authBaseQuery/authBaseQuery";

export const albumsService = createApi({
	reducerPath: "albumsService",
	baseQuery: authAxiosBaseQuery({
		baseUrl: "api/albums"
	}),
	endpoints: (builder) => ({
		deleteAlbum: builder.mutation({
			query: (body) => ({
				url: "/deleteAlbum",
				method: "DELETE",
				data: body
			})
		}),
		createAlbum: builder.mutation({
			query: (body) => ({
				url: "/createAlbum",
				method: "POST",
				data: body
			})
		}),
		updateAlbum: builder.mutation({
			query: (body) => ({
				url: "/updateAlbum",
				method: "PATCH",
				data: body
			})
		}),
		getAlbums: builder.query({
			query: (body) => ({
				url: "/getAlbums",
				method: "GET",
				data: body
			})
		}),
		getAlbum: builder.query({
			query: (body) => ({
				url: "/getAlbum",
				method: "GET",
				data: body
			})
		}),
	})
});

export const {
	createAlbum,
	deleteAlbum,
	getAlbum,
	getAlbums,
	updateAlbum
} = albumsService.endpoints;

export const {
	useCreateAlbumMutation,
	useDeleteAlbumMutation,
	useGetAlbumQuery,
	useGetAlbumsQuery,
	useUpdateAlbumMutation
} = albumsService;