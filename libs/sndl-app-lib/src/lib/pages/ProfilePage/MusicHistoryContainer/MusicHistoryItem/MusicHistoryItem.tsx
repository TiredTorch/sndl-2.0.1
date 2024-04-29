import { FC } from "react";
import { Box } from "@mui/material";
import { ANON_AVATAR } from "../../../../utils";
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
                src={image ? image : ANON_AVATAR}
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