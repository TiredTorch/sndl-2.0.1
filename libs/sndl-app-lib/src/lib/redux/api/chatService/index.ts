import { createApi } from "@reduxjs/toolkit/query/react";
import {
	ChatroomRequest,
	ChatroomResponse
} from "../../../types";
import { authAxiosBaseQuery } from "../../axios/authBaseQuery/authBaseQuery";

export const chatService = createApi({
	reducerPath: "chatService",
	baseQuery: authAxiosBaseQuery({
		baseUrl: "api/chats"
	}),
	endpoints: (builder) => ({
		getMessages: builder.query<ChatroomResponse, ChatroomRequest>({
			query: (params) => ({
				url: "",
				method: "GET",
				params
			})
		}),
	})
});
export const {
	getMessages,
} = chatService.endpoints;

export const {
	useGetMessagesQuery,
} = chatService;