import { FC } from "react";
import { Box } from "@mui/material";
import { musicHistoryItemStyles } from "./MusicHistoryItem.styles";
import { MusicHistoryItemProps } from "./MusicHistoryItem.types";

const MusicHistoryItem: FC<MusicHistoryItemProps> = ({
	author,
	image,
	title
}) => {
	return (
        <Box
            sx={musicHistoryItemStyles.root}
        >
            <Box
                sx={musicHistoryItemStyles.image}
                component="img"
                src={image}
            />
            <Box
                sx={musicHistoryItemStyles.textWrapper}
            >
                <Box
                    sx={musicHistoryItemStyles.author}
                >
                    {author}
                </Box>
                <Box
                    sx={musicHistoryItemStyles.name}
                >
                    {title}
                </Box>
            </Box>
        </Box>
	);
};

export default MusicHistoryItem;