import { FC } from "react";
import { Box } from "@mui/material";
import { ANON_AVATAR } from "../../../../utils";
import { friendsListItemStyles } from "./FriendsListItem.styles";
import { FriendsListItemProps } from "./FriendsListItem.types";

const FriendsListItem: FC<FriendsListItemProps> = ({
	id,
	avatar,
	name,
	onUserSelect
}) => {
	return (
        <Box
            sx={friendsListItemStyles.root}
            onClick={onUserSelect}
        >
            <Box
                sx={friendsListItemStyles.image}
                component="img"
                src={avatar ? avatar : ANON_AVATAR}
            />
            <Box
                sx={friendsListItemStyles.text}
            >
                {name}
            </Box>
        </Box>
	);
};

export default FriendsListItem;