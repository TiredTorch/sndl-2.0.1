import { FC } from "react";
import { Box } from "@mui/material";
import { chatMessageItemStyles } from "./ChatMessageItem.styles";
import { ChatMessageItemProps } from "./ChatMessageItem.types";

const ChatMessageItem: FC<ChatMessageItemProps> = ({
	content,
	image,
	isMyMessage
}) => {
	return (
        <Box
            sx={chatMessageItemStyles.root}
        >
            <Box
                sx={isMyMessage ? chatMessageItemStyles.mineMessage : chatMessageItemStyles.othersMessage}
            >
                <Box
                    sx={chatMessageItemStyles.image}
                    component="img"
                    src={image}
                />
                <Box
                    sx={chatMessageItemStyles.content}
                >
                    {content}
                </Box>
            </Box>

        </Box>
	);
};

export default ChatMessageItem;