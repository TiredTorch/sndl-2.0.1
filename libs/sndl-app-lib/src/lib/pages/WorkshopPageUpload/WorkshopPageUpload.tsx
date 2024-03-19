import { useCallback } from "react";
import { Box } from "@mui/material";
import { SongCreationForm } from "../../components";
import { useShowSnackbarError } from "../../hooks";
import {
	useTypedSelector,
	useUploadSongToAlbumMutation
} from "../../redux";
import {
	CommonErrorType,
	SongCreationFormData
} from "../../types";

const WorkshopPageUpload = () => {
	const userName = useTypedSelector(state => state.authSlice.userName);

	const [uploadSongToAlbum, {
		isError,
		error
	}] = useUploadSongToAlbumMutation();

	useShowSnackbarError(
		isError,
		error as CommonErrorType
	);

	const handleUpload = useCallback(
		(data: SongCreationFormData) => {
			if (!data.songFile) return;
			const formData = new FormData();

			data.albumImage && formData.append(
				"files.albumImage",
				data.albumImage
			);
			formData.append(
				"files.songFile",
				data.songFile
			);
			formData.append(
				"data",
				JSON.stringify({
					albumName: data.albumName,
					author: data.author,
					songName: data.songName, 
				})
			);

			uploadSongToAlbum(formData);
		},
		[uploadSongToAlbum],
	);

	return (
        <Box>
            <SongCreationForm 
                onSubmit={handleUpload} 
                initState={{
                    author: userName,
                    songName: "",
                    albumName: ""
                }}
            />
        </Box>
	);
};

export default WorkshopPageUpload;