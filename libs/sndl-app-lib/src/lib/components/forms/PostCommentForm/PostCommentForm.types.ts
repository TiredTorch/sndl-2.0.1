import { PostCommentFormData } from "../../../types";

export type PostCommentFormProps = {
	onSubmit: (data: PostCommentFormData) => void;
	initState: PostCommentFormData;
	sharePost: VoidFunction;
};
