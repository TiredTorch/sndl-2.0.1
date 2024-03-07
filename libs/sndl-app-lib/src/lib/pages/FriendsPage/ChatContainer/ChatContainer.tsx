import {
	FC,
	useCallback,
	useEffect,
	useMemo,
	useRef
} from "react";
import { faker } from "@faker-js/faker";
import { Box } from "@mui/material";
import {
	Button,
	SendMessageForm
} from "../../../components";
import { useTypedSelector } from "../../../redux";
import { FriendMessage } from "../../../types";
import { chatContainerStyles } from "./ChatContainer.styles";
import { ChatContainerProps } from "./ChatContainer.types";
import ChatMessageItem from "./ChatMessageItem/ChatMessageItem";

const ChatContainer: FC<ChatContainerProps> = ({
	selectedUser
}) => {
	const chatContainerRef = useRef<HTMLDivElement | null>(null);

	const userId = useTypedSelector(store => store.userSlice.userId) ?? 0;
	const userImage = useTypedSelector(store => store.userSlice.userImage) ?? "";

	const mock = useMemo<FriendMessage[]>(
		() => [
			{
				senderId: selectedUser.id,
				content: faker.lorem.paragraphs({
					max: 3,
					min: 1
				})
			},
			{
				senderId: selectedUser.id,
				content: faker.lorem.paragraphs({
					max: 3,
					min: 1
				})
			},
			{
				senderId: selectedUser.id,
				content: faker.lorem.paragraphs({
					max: 3,
					min: 1
				})
			},
			{
				senderId: selectedUser.id,
				content: faker.lorem.paragraphs({
					max: 3,
					min: 1
				})
			},
			{
				senderId: userId,
				content: faker.lorem.paragraphs({
					max: 3,
					min: 1
				})
			},
			{
				senderId: userId,
				content: faker.lorem.paragraphs({
					max: 3,
					min: 1
				})
			},
			{
				senderId: selectedUser.id,
				content: faker.lorem.paragraphs({
					max: 3,
					min: 1
				})
			},
			{
				senderId: selectedUser.id,
				content: faker.lorem.paragraphs({
					max: 3,
					min: 1
				})
			},
			{
				senderId: selectedUser.id,
				content: faker.lorem.paragraphs({
					max: 3,
					min: 1
				})
			},
			{
				senderId: userId,
				content: faker.lorem.paragraphs({
					max: 3,
					min: 1
				})
			},
			{
				senderId: selectedUser.id,
				content: faker.lorem.paragraphs({
					max: 3,
					min: 1
				})
			},
			{
				senderId: selectedUser.id,
				content: faker.lorem.paragraphs({
					max: 3,
					min: 1
				})
			},
			{
				senderId: userId,
				content: faker.lorem.paragraphs({
					max: 3,
					min: 1
				})
			}
		],
		[selectedUser.id, userId]
	);

	const getUserImage = useCallback(
		(id: number) => {
			if (id === selectedUser.id) return selectedUser.imageUrl;
			if (id === userId) return userImage;
			throw new Error();
		},
		[selectedUser.id, selectedUser.imageUrl, userId, userImage],
	);

	useEffect(
		() => {
			if (chatContainerRef.current) {
				chatContainerRef.current.scrollTop =  chatContainerRef.current.scrollHeight;
			}
		},
		[selectedUser]
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
                {mock.map((
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
                onSubmit={console.log} 
                initState={{
                    field: ""
                }}
            />
        </Box>
	);
};

export default ChatContainer;