import { createApi } from "@reduxjs/toolkit/query";
import { axiosBaseQuery } from "../../axios/baseQuery/baseQuery";

export const postsService = createApi({
	reducerPath: "postsService",
	baseQuery: axiosBaseQuery({
		baseUrl: "/posts"
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