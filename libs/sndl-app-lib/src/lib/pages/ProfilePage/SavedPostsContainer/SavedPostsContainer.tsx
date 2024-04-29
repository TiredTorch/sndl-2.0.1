import { FC } from "react";
import { Box } from "@mui/material";
import SavedPostItem from "./SavedPostItem/SavedPostItem";
import { savedPostItemStyles } from "./SavedPostItem/SavedPostItem.styles";
import { SavedPostsContainerProps } from "./SavedPostsContainer.types";

const SavedPostsContainer: FC<SavedPostsContainerProps> = ({
	posts
}) => {

	return (
        <Box
            sx={savedPostItemStyles.rootWrapper}
        >
            {posts.map((
                item, i
                ) => (
                    <SavedPostItem
                        key={i}
                        {...item}
                    />
                ))
            }
        </Box>
	);
};

export default SavedPostsContainer;