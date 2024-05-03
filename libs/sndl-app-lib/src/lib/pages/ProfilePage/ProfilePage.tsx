import {
	useCallback,
	useEffect
} from "react";
import { useParams } from "react-router-dom";
import {
	Box,
	Divider
} from "@mui/material";
import { PostForm } from "../../components";
import {
	useShowSnackbarError,
	useShowSnackbarSuccess
} from "../../hooks";
import {
	useCreatePostMutation,
	useGetOneUserQuery
} from "../../redux";
import {
	CommonErrorType,
	PostFormData
} from "../../types";
import { ANON_AVATAR } from "../../utils";
import { profilePageStyles } from "./ProfilePage.styles";
import SavedPostsContainer from "./SavedPostsContainer/SavedPostsContainer";

const ProfilePage = () => {
	const { id: userId } = useParams();

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

	const [
		createPost,
		{
			isError: createPostIsError,
			error: createPostError,
			isSuccess: createPostSuccess
		}
	] = useCreatePostMutation();

	useShowSnackbarSuccess(
		createPostSuccess,
		"TXT_REQUEST_SUCCESS_POST_CREATE"
	);

	useShowSnackbarError(
		createPostIsError,
		createPostError as CommonErrorType
	);

	useShowSnackbarError(
		userIsError,
		userError as CommonErrorType
	);

	const handleCreatePost = useCallback(
		(data: PostFormData) => {
			createPost({
				content: data.message
			});
		},
		[createPost],
	);

	useEffect(
		() => {
			refetchUser();
		},
		[refetchUser]
	);

	return (
        <Box
            sx={profilePageStyles.root}
        >
            <Box
                sx={profilePageStyles.leftSize}
            >
                <Box
                    sx={profilePageStyles.profile}
                >
                    <Box
                        component="img"
                        src={userData?.avatar ? userData.avatar : ANON_AVATAR}
                        sx={profilePageStyles.image}
                    />
                    <Box
                        sx={profilePageStyles.textWrapper}
                    >
                        <Box
                            sx={profilePageStyles.name}
                        >
                            {userData?.name}
                        </Box>
                        <Box
                            sx={profilePageStyles.status}
                        >
                            {userData?.status}
                        </Box>
                    </Box>
                </Box>
                <Divider
                    sx={profilePageStyles.divider}
                />
                <Box
                    sx={profilePageStyles.postsWrapper}
                >
                    <PostForm 
                        onSubmit={handleCreatePost}
                        initState={{
                            message: ""
                        }}/>
                    <SavedPostsContainer
                        posts={userData?.followedPosts ?? []}
                    />
                </Box>

            </Box>
        </Box>
	);
};

export default ProfilePage;