import { createApi } from "@reduxjs/toolkit/query";
import { axiosBaseQuery } from "../../axios/baseQuery/baseQuery";

export const usersService = createApi({
	reducerPath: "usersService",
	baseQuery: axiosBaseQuery({
		baseUrl: "/users"
	}),
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (body) => ({
				url: "/login",
				method: "POST",
				data: body
			})
		})
	})
});