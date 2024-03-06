import { FC } from "react";
import {
	Box,
	Divider
} from "@mui/material";
import { commentItemStyles } from "./CommentItem.styles";
import { CommentItemProps } from "./CommentItem.types";

const CommentItem: FC<CommentItemProps> = ({
	content,
	creator,
	imageUrl
}) => {
	return (
        <Box
            sx={commentItemStyles.root}
        >
            <Box
                sx={commentItemStyles.left}
            >
                <Box
                    sx={commentItemStyles.image}
                    component="img"
                    src={imageUrl}
                />
                <Box
                    sx={commentItemStyles.title}
                >
                    {creator}
                </Box>
            </Box>
            <Divider
                sx={commentItemStyles.divider}
                orientation="vertical" 
                flexItem
            />
            <Box
                sx={commentItemStyles.right}
            >
                {content}
            </Box>
        </Box>
	);
};

export default CommentItem;