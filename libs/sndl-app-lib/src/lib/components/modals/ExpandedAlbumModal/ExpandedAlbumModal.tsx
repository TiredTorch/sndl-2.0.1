import { FC } from "react";
import {
	Box,
	Modal
} from "@mui/material";
import {
	expandedAlbumModalStyles,
	headerStyle
} from "./ExpandedAlbumModal.styles";
import { ExpandedAlbumModalProps } from "./ExpandedAlbumModal.types";
import SongItem from "./SongItem/SongItem";

const ExpandedAlbumModal: FC<ExpandedAlbumModalProps> = ({
	onClose,
	selectedAlbum
}) => {
	return (
        <Modal
            open={!!selectedAlbum}
            onClose={onClose}
            disableAutoFocus
            disableEnforceFocus
        >
            <Box
                sx={expandedAlbumModalStyles.root}
            >
                <Box
                    sx={headerStyle(selectedAlbum?.image)}
                >
                    <Box
                        sx={expandedAlbumModalStyles.backdrop}
                    >
                        <Box
                            sx={expandedAlbumModalStyles.title}
                        >
                            {selectedAlbum?.name}
                        </Box>
                        <Box
                            sx={expandedAlbumModalStyles.author}
                        >
                            {selectedAlbum?.pseudoAuthor}
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={expandedAlbumModalStyles.contentWrapper}
                >
                    {selectedAlbum?.songs.map((
                    item, i
                    ) => (
                        <SongItem
                            handlePlay={console.log}
                            index={i + 1}
                            song={item}
                            key={i}
                        />
                    ))}
                </Box>
            </Box>
        </Modal>
	);
};

export default ExpandedAlbumModal;