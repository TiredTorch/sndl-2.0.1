import { PostForm } from "../../components";
import MusicHistoryContainer from "./MusicHistoryContainer/MusicHistoryContainer";
import SavedPostsContainer from "./SavedPostsContainer/SavedPostsContainer";

const ProfilePage = () => {
	return (
        <div>
            <MusicHistoryContainer/>
            <SavedPostsContainer/>
            <PostForm/>
        </div>
	);
};

export default ProfilePage;