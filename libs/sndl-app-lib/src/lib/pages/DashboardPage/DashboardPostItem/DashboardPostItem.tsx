import { FC } from "react";
import { Box } from "@mui/material";
import { ANON_AVATAR } from "../../../utils";
import { dashboardPostItemStyles } from "./DashboardPostItem.styles";
import { DashboardPostItemProps } from "./DashboardPostItem.types";

const DashboardPostItem: FC<DashboardPostItemProps> = ({
	content,
	creator,
	created_at,
	onClick
}) => {
	return (
        <Box
            sx={dashboardPostItemStyles.root}
        >
            <Box
                sx={dashboardPostItemStyles.header}
                onClick={onClick}
            >
                <Box>
                    {creator.name}  
                </Box>
                <Box
                    sx={dashboardPostItemStyles.image}
                    component="img"
                    src={creator.avatar ? creator.avatar : ANON_AVATAR}
                />
            </Box>
            <Box
                sx={dashboardPostItemStyles.content}
            >
                {content}
            </Box>

        </Box>
	);
};

export default DashboardPostItem;