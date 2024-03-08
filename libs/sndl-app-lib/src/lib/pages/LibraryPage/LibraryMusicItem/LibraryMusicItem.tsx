import { FC } from "react";
import { Box } from "@mui/material";
import { libraryPageStyles } from "../LibraryPage.styles";
import { LibraryMusicItemProps } from "./LibraryMusicItem.types";
import SongItem from "./SongItem/SongItem";

const LibraryMusicItem: FC<LibraryMusicItemProps> = ({
	album
}) => {
	return (
        <Box
            sx={libraryPageStyles.album}
        >
            <Box
                sx={libraryPageStyles.albumTitle}
            >
                {album.albumName}
            </Box>
            <Box
                sx={libraryPageStyles.albumSingleWrapper}
            >
                <Box
                    sx={libraryPageStyles.albumImage}
                    component="img"
                    src={album.image}
                />
                <Box
                    sx={libraryPageStyles.albumSongWrapper}
                >
                    {album.songs.map((
                        item, i
                        ) => (
                            <SongItem
                                key={i}
                                song={item}
                            />
                        ))
                    }
                </Box>
            </Box>
        </Box>
	);
};

export default LibraryMusicItem;