import { createApi } from "@reduxjs/toolkit/query";
import { axiosBaseQuery } from "../../axios/baseQuery/baseQuery";

export const usersService = createApi({
	reducerPath: "usersService",
	baseQuery: axiosBaseQuery({
		baseUrl: "api/users"
	}),
	endpoints: (builder) => ({
		editProfile: builder.mutation({
			query: (body) => ({
				url: "/me",
				method: "PATCH",
				data: body
			})
		}),
		getAllUsers: builder.query({
			query: (params) => ({
				url: "/all",
				method: "GET",
				params
			})
		}),
		getAllFriends: builder.query({
			query: (params) => ({
				url: "/friends",
				method: "GET",
				params
			})
		}),
		addFriend: builder.mutation({
			query: (body) => ({
				url: "/add",
				method: "POST",
				data: body
			})
		}),
		removeFriend: builder.mutation({
			query: (body) => ({
				url: "/remove",
				method: "DELETE",
				data: body
			})
		}),
		setConfigProfile: builder.mutation({
			query: (body) => ({
				url: "/config",
				method: "PATCH",
				data: body
			})
		}),
	})
});