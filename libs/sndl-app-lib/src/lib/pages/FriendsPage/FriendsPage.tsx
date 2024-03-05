import ChatContainer from "./ChatContainer/ChatContainer";
import ExpandedUserModal from "./ExpandedUserModal/ExpandedUserModal";
import FriendsListContainer from "./FriendsListContainer/FriendsListContainer";
import UserSearchContainer from "./UserSearchContainer/UserSearchContainer";

const FriendsPage = () => {
	return (
        <div>
            <FriendsListContainer/>
            <ExpandedUserModal/>
            <ChatContainer/>
            <UserSearchContainer/>
        </div>
	);
};

export default FriendsPage;