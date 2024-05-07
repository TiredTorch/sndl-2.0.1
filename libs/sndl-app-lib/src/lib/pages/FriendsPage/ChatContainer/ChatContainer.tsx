import {
	FC,
	useCallback,
	useEffect,
	useRef,
	useState
} from "react";
import { Box } from "@mui/material";
import {
	Button,
	SendMessageForm
} from "../../../components";
import { useCurrentSocket } from "../../../hocs";
import { useShowSnackbarError } from "../../../hooks";
import {
	useGetMessagesQuery,
	useGetOneUserQuery,
	useTypedSelector
} from "../../../redux";
import {
	ChatroomResponse,
	CommonErrorType,
	SendMessageFormData
} from "../../../types";
import { ANON_AVATAR } from "../../../utils";
import { chatContainerStyles } from "./ChatContainer.styles";
import { ChatContainerProps } from "./ChatContainer.types";
import ChatMessageItem from "./ChatMessageItem/ChatMessageItem";

const ChatContainer: FC<ChatContainerProps> = ({
	selectedUser
}) => {
	const userId = useTypedSelector(store => store.authSlice.id);

	const [chatroom, setChatroom] = useState<ChatroomResponse>();

	const chatContainerRef = useRef<HTMLDivElement | null>(null);

	const currentSocket = useCurrentSocket();

	const {
		data: chatroomData,
		isError: chatroomIsError,
		error: chatroomError,
		isSuccess: chatroomSuccess,
		refetch: refetchChatroom
	} = useGetMessagesQuery(
		{
			firstUserId: userId ?? 0,
			secondUserId: selectedUser.id
		},
		{
			skip: !userId
		}
	);

	const {
		data: userData,
		isError: userIsError,
		error: userError,
		refetch: refetchUser
	} = useGetOneUserQuery(
		Number(userId) ?? 0,
		{
			skip: !userId
		}
	);

	useShowSnackbarError(
		chatroomIsError,
		chatroomError as CommonErrorType
	);

	useShowSnackbarError(
		userIsError,
		userError as CommonErrorType
	);

	useEffect(
		() => {
			if (!currentSocket?.socket) return;

			currentSocket.socket.on(
				"reveivingChatroom",
				(message) => setChatroom(message)
			);
		},
		[currentSocket]
	);

	const sendMessage = useCallback(
		(data: SendMessageFormData) => {
			if (!currentSocket?.socket) return;

			currentSocket.socket.emit(
				"sendMessage",
				{ 
					senderId: userId,
					recepientId: selectedUser.id,
					content: data.message
				}
			);
		},
		[currentSocket, selectedUser, userId]
	);

	const getUserImage = useCallback(
		(id: number) => {
			if (id === selectedUser.id) return selectedUser?.avatar ? selectedUser.avatar : ANON_AVATAR;
			if (id === userId) return userData?.avatar ? userData.avatar : ANON_AVATAR;
			throw new Error();
		},
		[userId, selectedUser, userData],
	);

	useEffect(
		() => {
			if (chatContainerRef.current) {
				chatContainerRef.current.scrollTop =  chatContainerRef.current.scrollHeight;
			}
		},
		[selectedUser]
	);

	useEffect(
		() => {
			if (chatroomSuccess && chatroomData) {
				setChatroom(chatroomData);
			}
		},
		[chatroomData, chatroomSuccess]
	);

	useEffect(
		() => {
			refetchUser();
			refetchChatroom();
		},
		[refetchUser, refetchChatroom, selectedUser]
	);

	return (
        <Box
            sx={chatContainerStyles.root}
        >
            <Box
                sx={chatContainerStyles.header}
            >
                {selectedUser.name}
                <Button/>
            </Box>
            <Box
                sx={chatContainerStyles.messagesWrapper}
                ref={chatContainerRef}
            >
                {chatroom?.messages.map((
                    item, i
                    ) => (
                        <ChatMessageItem
                            content={item.content}
                            key={i}
                            image={getUserImage(item.senderId)}
                            isMyMessage={item.senderId === userId}
                        />
                    ))
                }
            </Box>
            <SendMessageForm 
                onSubmit={sendMessage} 
                initState={{
                    message: ""
                }}
            />
        </Box>
	);
};

export default ChatContainer;