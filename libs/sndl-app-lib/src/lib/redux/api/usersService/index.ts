import { createApi } from "@reduxjs/toolkit/query";
import { axiosBaseQuery } from "../../axios/baseQuery/baseQuery";

export const usersService = createApi({
	reducerPath: "usersService",
	baseQuery: axiosBaseQuery({
		baseUrl: "api/users"
	}),
	endpoints: (builder) => ({
		getFriends: builder.mutation({
			query: (body) => ({
				url: "/login",
				method: "POST",
				data: body
			})
		})
	})
});