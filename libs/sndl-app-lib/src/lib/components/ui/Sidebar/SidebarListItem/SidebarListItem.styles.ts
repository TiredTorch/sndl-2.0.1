import { Theme } from "@mui/material";
import { StyleList } from "../../../../types";

export const sidebarListItemStyles: StyleList = {
	root: {
		display: "flex",
		alignItems: "center",
		gap: "10px",
		justifyContent: "flex-end",
		cursor: "pointer"
	},
	text: {
		width: "100%",
		fontSize: "20px",
		fontWeight: 700,
		color: (theme: Theme) => theme.palette.sndlGray[300]
	}
};