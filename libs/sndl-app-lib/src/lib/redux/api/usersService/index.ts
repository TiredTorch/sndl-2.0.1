import { createApi } from "@reduxjs/toolkit/query/react";
import { AddFriendDto } from "@shared";
import {
	FriendsPageUser,
	OneUserResponse
} from "../../../types";
import { authAxiosBaseQuery } from "../../axios/authBaseQuery/authBaseQuery";

export const usersService = createApi({
	reducerPath: "usersService",
	baseQuery: authAxiosBaseQuery({
		baseUrl: "api/users"
	}),
	tagTypes: ["friends", "users"],
	endpoints: (builder) => ({
		editProfile: builder.mutation<void, {
			formData: FormData,
			paramsData: {
				status: string,
				userName: string
			}
		}>({
			query: ({ formData, paramsData }) => ({
				url: "/me",
				method: "PATCH",
				data: formData,
				headers: {
					"Content-Type": "multipart/form-data"
				},
				params: {
					status: paramsData.status,
					userName: paramsData.userName
				}
			})
		}),
		getAllUsers: builder.query<FriendsPageUser[], void>({
			query: () => ({
				url: "/all",
				method: "GET",
			})
		}),
		getOneUser: builder.query<OneUserResponse, number>({
			query: (id) => ({
				url: `/${id}`,
				method: "GET",
			})
		}),
		getAllFriends: builder.query<FriendsPageUser[], void>({
			query: () => ({
				url: "/friends",
				method: "GET",
			}),
			providesTags: ["friends"]
		}),
		addFriend: builder.mutation<void, AddFriendDto>({
			query: (body) => ({
				url: "/add",
				method: "POST",
				data: body
			}),
			invalidatesTags: ["friends"]
		}),
		removeFriend: builder.mutation({
			query: (body) => ({
				url: "/remove",
				method: "DELETE",
				data: body
			}),
			invalidatesTags: ["friends"]
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
	setConfigProfile,
	getOneUser
} = usersService.endpoints;

export const {
	useAddFriendMutation,
	useEditProfileMutation,
	useGetAllFriendsQuery,
	useGetAllUsersQuery,
	useRemoveFriendMutation,
	useSetConfigProfileMutation,
	useGetOneUserQuery
} = usersService;