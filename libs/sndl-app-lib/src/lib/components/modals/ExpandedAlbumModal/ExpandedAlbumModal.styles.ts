import { Theme } from "@mui/material";
import { StyleList } from "../../../types";

export const expandedAlbumModalStyles: StyleList = {
	root: {
		position: "absolute",
		width: "90%",
		maxWidth: "990px",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		height: "100dvh",
		background: (theme: Theme) => theme.palette.sndlGray[700],
		display: "flex",
		flexDirection: "column",
		gap: "30px",
	},
	contentWrapper: {
		minHeight: "70dvh",
		padding: "0px 10%",
		display: "flex",
		flexDirection: "column",
		gap: "10px",
		overflowY: "auto"
	},
	backdrop: {
		backdropFilter: "blur(10px)",
		height: "20dvh",
		width: "100%",
		paddingLeft: "10%"
	},
	author: {
		fontSize: "2.5rem",
		color: (theme: Theme) => theme.palette.sndlGray[300],
		fontStyle: "italic"
	},
	title: {
		fontSize: "3rem",
		color: (theme: Theme) => theme.palette.sndlGray[400]
	}
};

export const headerStyle = (imgSrc?: string) => ({
	backgroundImage: `url("${imgSrc}")`,
	backgroundPosition: "center",
	minHeight: "30dvh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "100%"
});