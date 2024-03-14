export interface AddCommentDto {
	postId: number;
	comment: CommentDto
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

export interface CommentDto {
	author: string;
	content: string;
}