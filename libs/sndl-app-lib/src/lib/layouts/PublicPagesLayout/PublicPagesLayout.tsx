import {
	FC,
	PropsWithChildren
} from "react";
import { Box } from "@mui/material";
import backgroundImage from "../../assets/images/auth-background.png";
import { publicPagesLayoutStyles } from "./PublicPagesLayout.styles";

export const PublicPagesLayout: FC<PropsWithChildren> = ({
	children
}) => {
	return (
        <Box
            sx={publicPagesLayoutStyles.root}
        >
            <Box
                sx={publicPagesLayoutStyles.innerBoxLeft}
            >
                {children}
            </Box>
            <Box
                sx={publicPagesLayoutStyles.innerBoxRight}
                component="img"
                src={backgroundImage}
            />
        </Box>
	);
};

export default PublicPagesLayout;