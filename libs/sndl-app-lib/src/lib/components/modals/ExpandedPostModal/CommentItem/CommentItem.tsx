import { FC } from "react";
import {
	Box,
	Divider
} from "@mui/material";
import { ANON_AVATAR } from "../../../../utils";
import { commentItemStyles } from "./CommentItem.styles";
import { CommentItemProps } from "./CommentItem.types";

const CommentItem: FC<CommentItemProps> = ({
	content,
	author
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
                    src={author.avatar ? author.avatar : ANON_AVATAR}
                />
                <Box
                    sx={commentItemStyles.title}
                >
                    {author.name}
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