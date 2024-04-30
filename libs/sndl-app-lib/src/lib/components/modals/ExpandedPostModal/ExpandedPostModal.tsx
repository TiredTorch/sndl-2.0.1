import {
	FC,
	useCallback
} from "react";
import {
	Box,
	Modal
} from "@mui/material";
import { PostCommentForm } from "../../../components";
import {
	useShowSnackbarError,
	useShowSnackbarSuccess
} from "../../../hooks";
import {
	useAddCommentMutation,
	useGetPostQuery,
	useSharePostMutation
} from "../../../redux";
import {
	CommonErrorType,
	PostCommentFormData
} from "../../../types";
import { ANON_AVATAR } from "../../../utils";
import CommentItem from "./CommentItem/CommentItem";
import { expandedPostModalStyles } from "./ExpandedPostModal.styles";
import { ExpandedPostModalProps } from "./ExpandedPostModal.types";

export const ExpandedPostModal: FC<ExpandedPostModalProps> = ({
	onClose,
	selectedPost
}) => {

	const {
		data: postData,
		error: postDataError,
		isError: postDataIsError,
	} = useGetPostQuery(
		selectedPost?.id as number,
		{
			skip: !selectedPost?.id
		}
	);

	const [
		addComment,
		{
			isError: addCommentIsError,
			error: addCommentError,
			isSuccess: addCommentIsSuccess
		}
	] = useAddCommentMutation();

	const [
		sharePost,
		{
			isError: sharePostIsError,
			error: sharePostError,
			isSuccess: sharePostIsSuccess
		}
	] = useSharePostMutation();

	useShowSnackbarError(
		postDataIsError,
		postDataError as CommonErrorType
	);

	useShowSnackbarSuccess(
		addCommentIsSuccess,
		"TXT_REQUEST_SUCCESS_COMMENT_POST"
	);

	useShowSnackbarError(
		addCommentIsError,
		addCommentError as CommonErrorType
	);

	useShowSnackbarSuccess(
		sharePostIsSuccess,
		"TXT_REQUEST_SUCCESS_SHARE_POST"
	);

	useShowSnackbarError(
		sharePostIsError,
		sharePostError as CommonErrorType
	);

	const handleSharePost = useCallback(
		() => {
			if (!selectedPost?.id) return;

			sharePost({
				postId: selectedPost.id
			});
		},
		[sharePost, selectedPost],
	);

	const handleAddComment = useCallback(
		(data: PostCommentFormData) => {
			if (!selectedPost?.id) return;

			addComment({
				comment: data.message,
				postId: selectedPost.id
			});
		},
		[addComment, selectedPost],
	);

	return (
        <Modal
            open={!!selectedPost}
            onClose={onClose}
            disableAutoFocus
            disableEnforceFocus
        >
            <Box
                sx={expandedPostModalStyles.root}
            >
                <Box
                    sx={expandedPostModalStyles.authorWrapper}
                >
                    <Box
                        sx={expandedPostModalStyles.text}
                    >
                        {selectedPost?.creator.name}
                    </Box>
                    <Box
                        sx={expandedPostModalStyles.image}
                        component="img"
                        src={selectedPost?.creator.avatar ? selectedPost?.creator.avatar : ANON_AVATAR}
                    />
                </Box>
                <Box
                    sx={expandedPostModalStyles.contentWrapper}
                >
                    {selectedPost?.content}
                </Box>
                <Box
                    sx={expandedPostModalStyles.commentWrapper}
                >
                    {postData?.comments?.map((
                        item, i
                        ) => (
                            <CommentItem
                                key={i}
                                {...item}
                            />
                        ))
                    }
                </Box>
                <PostCommentForm 
                    onSubmit={handleAddComment} 
                    initState={{
                        message: ""
                    }}
                    sharePost={handleSharePost}
                />
            </Box>
        </Modal>
	);
};

export default ExpandedPostModal;