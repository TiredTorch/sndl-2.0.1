import { createApi } from "@reduxjs/toolkit/query/react";
import { AddFriendDto } from "@shared";
import { FriendsPageUser } from "../../../types";
import { authAxiosBaseQuery } from "../../axios/authBaseQuery/authBaseQuery";

export const usersService = createApi({
	reducerPath: "usersService",
	baseQuery: authAxiosBaseQuery({
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
		getAllUsers: builder.query<FriendsPageUser[], void>({
			query: () => ({
				url: "/all",
				method: "GET",
			})
		}),
		getAllFriends: builder.query({
			query: (params) => ({
				url: "/friends",
				method: "GET",
				params
			})
		}),
		addFriend: builder.mutation<void, AddFriendDto>({
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

export const {
	addFriend,
	editProfile,
	getAllFriends,
	getAllUsers,
	removeFriend,
	setConfigProfile
} = usersService.endpoints;

export const {
	useAddFriendMutation,
	useEditProfileMutation,
	useGetAllFriendsQuery,
	useGetAllUsersQuery,
	useRemoveFriendMutation,
	useSetConfigProfileMutation
} = usersService;