export type ChatroomRequest = {
	firstUserId: number;
	secondUserId: number;
};

export type ChatroomResponse = {
	id: number;
	messages: Array<ChatroomMessage>
};

export type ChatroomMessage = {
	content: string;
	senderId: number;
};
