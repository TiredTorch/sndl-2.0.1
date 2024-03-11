import { createApi } from "@reduxjs/toolkit/query";
import { axiosBaseQuery } from "../../axios/baseQuery/baseQuery";

export const commentsService = createApi({
	reducerPath: "commentsService",
	baseQuery: axiosBaseQuery({
		baseUrl: "/comments"
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