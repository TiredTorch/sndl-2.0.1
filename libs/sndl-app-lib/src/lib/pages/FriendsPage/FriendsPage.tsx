import {
	useCallback,
	useState
} from "react";
import { Box } from "@mui/material";
import { FriendsPageUser } from "../../types";
import ChatContainer from "./ChatContainer/ChatContainer";
import ExpandedUserModal from "./ExpandedUserModal/ExpandedUserModal";
import FriendsListContainer from "./FriendsListContainer/FriendsListContainer";
import { friendsPageStyles } from "./FriendsPage.styles";
import UserSearchContainer from "./UserSearchContainer/UserSearchContainer";

const FriendsPage = () => {
	const [selectedUser, setSelectedUser] = useState<FriendsPageUser | null>(null);
	const [selectedFriendChat, setSelectedFriendChat] = useState<FriendsPageUser | null>(null);

	const handleSelectUser = useCallback(
		(user: FriendsPageUser) => () => {
			setSelectedUser(user);
		},
		[setSelectedUser],
	);

	const handleDeselectUser = useCallback(
		() => {
			setSelectedUser(null);
		},
		[setSelectedUser],
	);

	const handleSelectFriendChat = useCallback(
		(user: FriendsPageUser) => () => {
			setSelectedFriendChat(prev => prev?.id === user.id ? null : user);
		},
		[setSelectedFriendChat],
	);

	return (
        <Box
            sx={friendsPageStyles.root}
        >
            <FriendsListContainer
                onUserSelect={handleSelectFriendChat}
            />
            {selectedFriendChat && (
                <ChatContainer 
                    selectedUser={selectedFriendChat}
                />
            )}
            {!selectedFriendChat && (
                <UserSearchContainer 
                    onUserSelect={handleSelectUser}
                />
            )}
            <ExpandedUserModal 
                selectedUser={selectedUser} 
                onClose={handleDeselectUser}
            />
        </Box>
	);
};

export default FriendsPage;