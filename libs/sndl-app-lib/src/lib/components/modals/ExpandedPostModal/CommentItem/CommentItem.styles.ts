import { Theme } from "@mui/material";
import { StyleList } from "../../../../types";

export const commentItemStyles: StyleList = {
	root: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		maxHeight: "100px",
		gap: "30px",
		padding: "10px",
		background: (theme: Theme) => theme.palette.sndlGray[400],
		borderRadius: "10px"
	},
	right: {
		maxHeight: "100px",
		overflow: "auto",
		fontSize: "1rem",
		color: (theme: Theme) => theme.palette.sndlGray[300]
	},
	left: {
		width: "15%",
		maxWidth: "15%",
		minWidth: "15%",
		padding: "10px 0",
		overflow: "clip"
	},
	image: {
		width: "50px",
		height: "50px",
		borderRadius: "50%"
	},
	divider: {
		background: (theme: Theme) => theme.palette.sndlGray[300]

	},
	title: {
		fontSize: "1.2rem",
		fontWeight: "700",
		color: (theme: Theme) => theme.palette.sndlGray[200]
	}
};