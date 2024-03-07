import { FC } from "react";
import { Box } from "@mui/material";
import { userSearchItemStyles } from "./UserSearchItem.styles";
import { UserSearchItemProps } from "./UserSearchItem.types";

const UserSearchItem: FC<UserSearchItemProps> = ({
	id,
	imageUrl,
	name,
	onUserSelect
}) => {
	return (
        <Box
            sx={userSearchItemStyles.root}
            onClick={onUserSelect}
        >
            <Box
                sx={userSearchItemStyles.image}
                component="img"
                src={imageUrl}
            />
            <Box
                sx={userSearchItemStyles.text}
            >
                {name}
            </Box>
        </Box>
	);
};

export default UserSearchItem;