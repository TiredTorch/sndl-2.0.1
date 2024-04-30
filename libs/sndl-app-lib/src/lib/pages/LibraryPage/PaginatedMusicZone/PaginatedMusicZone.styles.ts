import { Theme } from "@mui/material";
import { StyleList } from "../../../types";

export const paginatedMusicZoneStyles: StyleList = {
	root: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		width: "100%",
		gap: "10px",
	},
	albumWrapper: {
		width: "100%",
		maxWidth: "300px",
		background: (theme: Theme) => theme.palette.sndlGray[200]
	},
	albumImage: {
		width: "100%",
		cursor: "pointer"
	},
	textWrapper: {
		padding: "5px"
	},
	authorText: {
		fontSize: "1.5rem",
		textAlign: "right",
		fontStyle: "italic",
		color: (theme: Theme) => theme.palette.sndlGray[300]
	},
	titleText: {
		fontSize: "1.9rem",
		fontWeight: "700",
		color: (theme: Theme) => theme.palette.sndlGray[700]
	}
};