import { Theme } from "@mui/material";
import { StyleList } from "../../../types";

export const sidebarStyles: StyleList = {
	root: {
		position: "absolute",
		// zIndex: 1
	},
	paper: {
		maxWidth: "230px",
		width: "230px",
		background: (theme: Theme) => theme.palette.sndlGray[500],
		border: "none",
		borderRight: (theme: Theme) => `1px solid ${theme.palette.sndlGray[800]}`,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		padding: "30px 10px"
	},
	sidebarPart: {
		display: "flex",
		flexDirection: "column",
		gap: "30px",
	}
};