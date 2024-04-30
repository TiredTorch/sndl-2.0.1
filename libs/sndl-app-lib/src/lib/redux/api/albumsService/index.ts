import { createApi } from "@reduxjs/toolkit/query/react";
import {
	AlbumData,
	PaginatedData,
	PaginationParams
} from "../../../types";
import { authAxiosBaseQuery } from "../../axios/authBaseQuery/authBaseQuery";

export const albumsService = createApi({
	reducerPath: "albumsService",
	baseQuery: authAxiosBaseQuery({
		baseUrl: "api/albums"
	}),
	endpoints: (builder) => ({
		getSavedAlbums: builder.query<PaginatedData<AlbumData[]>, PaginationParams>({
			query: (params) => ({
				url: "/all/saved",
				method: "GET",
				params
			})
		}),
		getNewAlbums: builder.query<PaginatedData<AlbumData[]>, PaginationParams>({
			query: (params) => ({
				url: "/all/new",
				method: "GET",
				params
			})
		}),
		getFriendsFeaturedAlbums: builder.query<PaginatedData<AlbumData[]>, PaginationParams>({
			query: (params) => ({
				url: "/all/friendsFeatured",
				method: "GET",
				params
			})
		}),
		addSongToAlbum: builder.mutation({
			query: (body) => ({
				url: "/addSongToAlbum",
				method: "POST",
				data: body
			})
		}),
		getAlbum: builder.query<void, number>({
			query: (id) => ({
				url: `/${id}`,   
				method: "GET"
			})
		}),
		uploadSongToAlbum: builder.mutation<void, {
			formData: FormData,
			paramsData: {
				albumName: string,
				author: string,
				songName: string
			}
		}>({
			query: ({formData, paramsData}) => ({
				url: "/uploadSong",
				method: "POST",
				data: formData,
				headers: {
					"Content-Type": "multipart/form-data"
				},
				params: {
					albumName: paramsData.albumName,
					author: paramsData.author,
					songName: paramsData.songName
				}
			}),
            
		}),
	})
});

export const {
	getSavedAlbums,
	getFriendsFeaturedAlbums,
	getAlbum,
	getNewAlbums,
	addSongToAlbum,
	uploadSongToAlbum
} = albumsService.endpoints;

export const {
	useGetSavedAlbumsQuery,
	useGetAlbumQuery,
	useGetFriendsFeaturedAlbumsQuery,
	useGetNewAlbumsQuery,
	useAddSongToAlbumMutation,
	useUploadSongToAlbumMutation
} = albumsService;