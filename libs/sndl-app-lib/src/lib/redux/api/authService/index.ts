import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../axios/baseQuery/baseQuery";

export const authService = createApi({
	reducerPath: "authService",
	baseQuery: axiosBaseQuery({
		baseUrl: "api/auth"
	}),
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (body) => ({
				url: "/login",
				method: "POST",
				data: body
			})
		}),
		register: builder.mutation({
			query: (body) => ({
				url: "/register",
				method: "POST",
				data: body
			})
		}),
		forgotPassword: builder.mutation({
			query: (params) => ({
				url: "/forgotPassword",
				method: "POST",
				params
			})
		}),
		resetPassword: builder.mutation({
			query: (body) => ({
				url: "/resetPassword",
				method: "POST",
				data: body
			})
		})
	})
});

export const {
	login,
	register,
	forgotPassword,
	resetPassword
} = authService.endpoints;

export const {
	useLoginMutation,
	useRegisterMutation,
	useForgotPasswordMutation,
	useResetPasswordMutation
} = authService;