import { createApi } from "@reduxjs/toolkit/query";
import { axiosBaseQuery } from "../../axios/baseQuery/baseQuery";

export const songsService = createApi({
	reducerPath: "songsService",
	baseQuery: axiosBaseQuery({
		baseUrl: "/songs"
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