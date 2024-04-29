import { FC } from "react";
import { Box } from "@mui/material";
import { ANON_AVATAR } from "../../../../utils";
import { savedPostItemStyles } from "./SavedPostItem.styles";
import { SavedPostItemProps } from "./SavedPostItem.types";

const SavedPostItem: FC<SavedPostItemProps> = ({
	creator,
	content
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
                    {creator.name}
                </Box>
                <Box
                    sx={savedPostItemStyles.image}
                    component="img"
                    src={creator.avatar ? creator.avatar : ANON_AVATAR}
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