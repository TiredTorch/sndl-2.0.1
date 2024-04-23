export type PostCommentFormProps = {
	onSubmit: (data: PostCommentFormData) => void;
	initState: PostCommentFormData
};

export type PostCommentFormData = {
	message: string
};