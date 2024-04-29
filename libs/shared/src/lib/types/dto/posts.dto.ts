export interface AddCommentDto {
	postId: number;
	comment: string;
}

export interface SharedPostDto {
	postId: number
}

export interface RemovePostDto {
	postId: number
}

export interface CreatePostDto {
	content: string;
}
