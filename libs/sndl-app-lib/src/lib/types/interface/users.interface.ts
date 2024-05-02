export type FriendsPageUser = {
	id: number;
	name: string;
	avatar: string;
};

export type FriendMessage = {
	senderId: number;
	content: string;
};

export type OneUserResponse = {
	avatar: string;
	status: string;
	name: string;
	followedPosts: OneUserFollowedPost[]
};

export type OneUserFollowedPost = {
	content: string;
	creator: {
		avatar: string;
		name: string;
		id: number;
	}
};