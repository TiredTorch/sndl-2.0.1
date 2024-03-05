import { FC } from "react";
import {
	Box,
	Typography
} from "@mui/material";
import { sidebarListItemStyles } from "./SidebarListItem.styles";
import { SidebarListItemProps } from "./SidebarListItem.types";

export const SidebarListItem: FC<SidebarListItemProps> = ({
	icon,
	onClick,
	title,
	isOpenSidebar
}) => {
	return (
        <Box
            onClick={onClick}
            sx={sidebarListItemStyles.root}
        >
            <Box
                component="img"
                src={icon}
            />
            {isOpenSidebar && (
                <Typography
                    sx={sidebarListItemStyles.text}
                >
                    {title}
                </Typography>
            )}
        </Box>
	);
};

export default SidebarListItem;