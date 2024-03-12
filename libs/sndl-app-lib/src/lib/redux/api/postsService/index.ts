import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../axios/baseQuery/baseQuery";

export const postsService = createApi({
	reducerPath: "postsService",
	baseQuery: axiosBaseQuery({
		baseUrl: "/posts"
	}),
	endpoints: (builder) => ({
		getPosts: builder.query({
			query: (params) => ({
				url: "/all",
				method: "GET",
				params
			})
		}),
		getPost: builder.query({
			query: (params) => ({
				url: "/",
				method: "GET",
				params
			})
		}),
		addComment: builder.mutation({
			query: (body) => ({
				url: "/addComment",
				method: "POST",
				data: body
			})
		}),
		toggleLike: builder.mutation({
			query: (body) => ({
				url: "/toggleLike",
				method: "PATCH",
				data: body
			})
		}),
		sharePost: builder.mutation({
			query: (body) => ({
				url: "/sharePost",
				method: "POST",
				data: body
			})
		}),
		createPost: builder.mutation({
			query: (body) => ({
				url: "/createPost",
				method: "POST",
				data: body
			})
		}),
		removePost: builder.mutation({
			query: (body) => ({
				url: "/removePost",
				method: "DELETE",
				data: body
			})
		}),
	})
});

export const {
	getPosts,
	getPost,
	addComment,
	toggleLike,
	sharePost,
	createPost,
	removePost
} = postsService.endpoints;

export const {
	useGetPostsQuery,
	useGetPostQuery,
	useAddCommentMutation,
	useToggleLikeMutation,
	useSharePostMutation
} = postsService;