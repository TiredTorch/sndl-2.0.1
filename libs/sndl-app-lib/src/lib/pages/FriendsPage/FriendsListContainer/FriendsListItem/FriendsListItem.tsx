import { FC } from "react";
import { Box } from "@mui/material";
import { friendsListItemStyles } from "./FriendsListItem.styles";
import { FriendsListItemProps } from "./FriendsListItem.types";

const FriendsListItem: FC<FriendsListItemProps> = ({
	id,
	imageUrl,
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
                src={imageUrl}
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