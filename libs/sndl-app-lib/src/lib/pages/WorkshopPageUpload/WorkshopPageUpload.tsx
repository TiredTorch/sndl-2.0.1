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

			formData.append(
				"songFile",
				data.songFile
			);
            
			data.albumImage && formData.append(
				"albumImage",
				data.albumImage
			);

			const jsonData = {
				albumName: data.albumName,
				author: data.author,
				songName: data.songName
			};

			uploadSongToAlbum({
				formData: formData,
				paramsData: jsonData
			});
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