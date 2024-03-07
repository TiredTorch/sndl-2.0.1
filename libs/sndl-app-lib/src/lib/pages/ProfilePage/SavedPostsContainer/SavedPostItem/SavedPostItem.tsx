import { FC } from "react";
import { Box } from "@mui/material";
import { savedPostItemStyles } from "./SavedPostItem.styles";
import { SavedPostItemProps } from "./SavedPostItem.types";

const SavedPostItem: FC<SavedPostItemProps> = ({
	content,
	image,
	author
}) => {
	return (
        <Box
            sx={savedPostItemStyles.root}
        >
            <Box
                sx={savedPostItemStyles.header}
            >
                <Box
                    sx={savedPostItemStyles.author}
                >
                    {author}
                </Box>
                <Box
                    sx={savedPostItemStyles.image}
                    component="img"
                    src={image}
                />
            </Box>
            <Box
                sx={savedPostItemStyles.content}
            >
                {content}
            </Box>
        </Box>
	);
};

export default SavedPostItem;