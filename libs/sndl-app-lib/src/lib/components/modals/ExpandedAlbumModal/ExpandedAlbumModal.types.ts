import { ModalProps } from "@mui/material";
import { AlbumData } from "../../../types";

export type ExpandedAlbumModalProps = {
	selectedAlbum: AlbumData | null;
	onClose: ModalProps["onClose"]
};