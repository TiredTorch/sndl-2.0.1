import { FC } from "react";
import { Box } from "@mui/material";
import { dashboardPostItemStyles } from "./DashboardPostItem.styles";
import { DashboardPostItemProps } from "./DashboardPostItem.types";

const DashboardPostItem: FC<DashboardPostItemProps> = ({
	content,
	creator,
	imageUrl,
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
                    {creator}  
                </Box>
                <Box
                    sx={dashboardPostItemStyles.image}
                    component="img"
                    src={imageUrl}
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