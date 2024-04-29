import { useCallback } from "react";
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
	useTypedSelector
} from "../../redux";
import {
	CommonErrorType,
	PostFormData
} from "../../types";
import MusicHistoryContainer from "./MusicHistoryContainer/MusicHistoryContainer";
import { profilePageStyles } from "./ProfilePage.styles";
import SavedPostsContainer from "./SavedPostsContainer/SavedPostsContainer";

const ProfilePage = () => {
	const userImage = useTypedSelector(store => store.userSlice.userImage);
	const userName = useTypedSelector(store => store.userSlice.userName);
	const userStatus = useTypedSelector(store => store.userSlice.userStatus);

	const [
		createPost,
		{
			isError,
			error,
			isSuccess
		}
	] = useCreatePostMutation();

	useShowSnackbarSuccess(
		isSuccess,
		"TXT_REQUEST_SUCCESS_POST_CREATE"
	);

	useShowSnackbarError(
		isError,
		error as CommonErrorType
	);

	const handleCreatePost = useCallback(
		(data: PostFormData) => {
			createPost({
				content: data.message
			});
		},
		[createPost],
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
                    {(userImage && 
                        <Box
                            component="img"
                            src={userImage}
                            sx={profilePageStyles.image}
                        />
                    )}
                    <Box
                        sx={profilePageStyles.textWrapper}
                    >
                        {userName && (
                            <Box
                                sx={profilePageStyles.name}
                            >
                                {userName}
                            </Box>
                        )}
                        {userStatus && (
                            <Box
                                sx={profilePageStyles.status}
                            >
                                {userStatus}
                            </Box>
                        )}
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
                    <SavedPostsContainer/>
                </Box>

            </Box>
            <MusicHistoryContainer/>
        </Box>
	);
};

export default ProfilePage;