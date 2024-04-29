import { createApi } from "@reduxjs/toolkit/query/react";
import {
	AddCommentDto,
	CreatePostDto,
	SharedPostDto
} from "@shared";
import {
	DashboardDetailedPost,
	DashboardPost
} from "../../../types";
import { authAxiosBaseQuery } from "../../axios/authBaseQuery/authBaseQuery";

export const postsService = createApi({
	reducerPath: "postsService",
	baseQuery: authAxiosBaseQuery({
		baseUrl: "api/posts"
	}),
	tagTypes: ["userPosts"],
	endpoints: (builder) => ({
		allShared: builder.query<void, void>({
			query: () => ({
				url: "/allShared",
				method: "GET",
			}),
			providesTags: ["userPosts"]
		}),
		getPosts: builder.query<DashboardPost[], void>({
			query: () => ({
				url: "/all",
				method: "GET",
			}),
			providesTags: ["userPosts"]
		}),
		addComment: builder.mutation<void, AddCommentDto>({
			query: (body) => ({
				url: "/addComment",
				method: "POST",
				data: body
			}),
			invalidatesTags: ["userPosts"]
		}),
		getPost: builder.query<DashboardDetailedPost, number>({
			query: (id) => ({
				url: `/${id}`,
				method: "GET",
			}),
			providesTags: ["userPosts"]
		}),
		sharePost: builder.mutation<void, SharedPostDto>({
			query: (body) => ({
				url: "/sharePost",
				method: "POST",
				data: body
			}),
			invalidatesTags: ["userPosts"]
		}),
		createPost: builder.mutation<void, CreatePostDto>({
			query: (body) => ({
				url: "/createPost",
				method: "POST",
				data: body
			}),
			invalidatesTags: ["userPosts"]
		})
	})
});

export const {
	allShared,
	getPosts,
	addComment,
	getPost,
	sharePost,
	createPost
} = postsService.endpoints;

export const {
	useAllSharedQuery,
	useGetPostsQuery,
	useAddCommentMutation,
	useGetPostQuery,
	useSharePostMutation,
	useCreatePostMutation
} = postsService;