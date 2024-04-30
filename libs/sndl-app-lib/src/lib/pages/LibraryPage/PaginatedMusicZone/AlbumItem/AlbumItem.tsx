import { FC } from "react";
import { Box } from "@mui/material";
import { AlbumData } from "../../../../types";
import { paginatedMusicZoneStyles } from "../PaginatedMusicZone.styles";

const AlbumItem: FC<AlbumData & {
	handleClick: VoidFunction
}> = ({
	image,
	name,
	pseudoAuthor,
	handleClick
}) => {
	return (
        <Box
            sx={paginatedMusicZoneStyles.albumWrapper}
        >
            <Box
                sx={paginatedMusicZoneStyles.albumImage}
                component="img"
                src={image}
                onClick={handleClick}
            />
            <Box
                sx={paginatedMusicZoneStyles.textWrapper}
            >
                <Box
                    sx={paginatedMusicZoneStyles.titleText}
                >
                    {name}
                </Box>
                <Box
                    sx={paginatedMusicZoneStyles.authorText}
                >
                    {pseudoAuthor}
                </Box>
            </Box>
        </Box>
	);
};

export default AlbumItem;