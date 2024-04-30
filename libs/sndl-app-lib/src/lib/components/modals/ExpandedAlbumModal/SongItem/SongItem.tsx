import { FC } from "react";
import {
	Box,
	Divider
} from "@mui/material";
import { Button } from "../../../common";
import { songItemStyles } from "./SongItem.styles";
import { SongItemProps } from "./SongItem.types";

const SongItem: FC<SongItemProps> = ({
	handlePlay,
	index,
	song
}) => {
	return (
        <Box
            sx={songItemStyles.root}
        >
            <Box
                sx={songItemStyles.left}
            >
                <Box>
                    {index}
                </Box>
                <Divider
                    flexItem
                    orientation="vertical"
                />
                <Box>
                    <Button
                        onClick={handlePlay}
                        customVariant="sendMessageForm"
                    >
                        Play
                    </Button>
                </Box>
            </Box>
            <Box
                sx={songItemStyles.mid}
            >
                {song.name}
            </Box>
            <Box
                sx={songItemStyles.right}
            >
                <Button
                    customVariant="sendMessageForm"
                >
                    Add to album
                </Button>
            </Box>
        </Box>
	);
};

export default SongItem;