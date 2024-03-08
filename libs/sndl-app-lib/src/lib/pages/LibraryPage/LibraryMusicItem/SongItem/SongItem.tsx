import { FC } from "react";
import { Box } from "@mui/material";
import { libraryPageStyles } from "../../LibraryPage.styles";
import { SongItemProps } from "./SongItem.types";

const SongItem: FC<SongItemProps> = ({
	song
}) => {
	return (
        <Box
            sx={libraryPageStyles.song}
        >
            <Box>
                {song.name}
            </Box>
            <Box>
                
            </Box>
        </Box>
	);
};

export default SongItem;