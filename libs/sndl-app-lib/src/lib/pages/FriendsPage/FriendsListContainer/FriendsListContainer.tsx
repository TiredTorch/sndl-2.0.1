import { SearchFriendForm } from "../../../components";
import FriendsListItem from "./FriendsListItem/FriendsListItem";

const FriendsListContainer = () => {
	return (
        <div>
            <FriendsListItem/>
            <SearchFriendForm/>
        </div>
	);
};

export default FriendsListContainer;