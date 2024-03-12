import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../axios/baseQuery/baseQuery";

export const chatService = createApi({
	reducerPath: "chatService",
	baseQuery: axiosBaseQuery({
		baseUrl: "/chats"
	}),
	endpoints: (builder) => ({
		getMessages: builder.query({
			query: (params) => ({
				url: "/",
				method: "GET",
				params
			})
		}),
		sendMessage: builder.mutation({
			query: (body) => ({
				url: "/",
				method: "POST",
				data: body
			})
		})
	})
});
export const {
	getMessages,
	sendMessage
} = chatService.endpoints;

export const {
	useGetMessagesQuery,
	useSendMessageMutation
} = chatService;