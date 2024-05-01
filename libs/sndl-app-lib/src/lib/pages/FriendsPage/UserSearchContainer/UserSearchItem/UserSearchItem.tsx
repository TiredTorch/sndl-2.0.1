import { FC } from "react";
import { Box } from "@mui/material";
import { ANON_AVATAR } from "../../../../utils";
import { userSearchItemStyles } from "./UserSearchItem.styles";
import { UserSearchItemProps } from "./UserSearchItem.types";

const UserSearchItem: FC<UserSearchItemProps> = ({
	id,
	avatar,
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
                src={avatar ? avatar : ANON_AVATAR}
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