import {
	Box,
	Divider
} from "@mui/material";
import { PostForm } from "../../components";
import { useTypedSelector } from "../../redux";
import MusicHistoryContainer from "./MusicHistoryContainer/MusicHistoryContainer";
import { profilePageStyles } from "./ProfilePage.styles";
import SavedPostsContainer from "./SavedPostsContainer/SavedPostsContainer";

const ProfilePage = () => {
	const userImage = useTypedSelector(store => store.userSlice.userImage);
	const userName = useTypedSelector(store => store.userSlice.userName);
	const userStatus = useTypedSelector(store => store.userSlice.userStatus);

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
                        onSubmit={console.log}
                        initState={{
                            field: ""
                        }}/>
                    <SavedPostsContainer/>
                </Box>

            </Box>
            <MusicHistoryContainer/>
        </Box>
	);
};

export default ProfilePage;