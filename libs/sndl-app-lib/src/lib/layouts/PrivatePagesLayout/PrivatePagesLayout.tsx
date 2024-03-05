import {
	FC,
	PropsWithChildren
} from "react";
import { Box } from "@mui/material";
import {
	BottomBar,
	Sidebar
} from "../../components";
import { privatePagesLayoutStyles } from "./PrivatePagesLayout.styles";

export const PrivatePagesLayout: FC<PropsWithChildren> = ({
	children
}) => {
	return (
        <Box
            sx={privatePagesLayoutStyles.root}
        >
            <Box>
                {children}
            </Box>
            <Sidebar/>
            <BottomBar/>
        </Box>
	);
};

export default PrivatePagesLayout;