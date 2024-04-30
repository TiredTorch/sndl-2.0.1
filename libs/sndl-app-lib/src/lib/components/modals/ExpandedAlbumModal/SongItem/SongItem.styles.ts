import { Theme } from "@mui/material";
import { StyleList } from "../../../../types";

export const songItemStyles: StyleList = {
	root: {
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		background: (theme: Theme) => theme.palette.sndlGray[200],
		padding: "8px 1rem"
	},
	left: {
		display: "flex",
		alignItems: "center",
		gap: "0.75rem",
		fontSize: "1.5rem",
		fontWeight: "700"
	},
	mid: {
		display: "flex",
		alignItems: "center",
		textAlign: "left",
		fontSize: "1.2rem"
	},
	right: {
		display: "flex",
		alignItems: "center",
		gap: "5px"
	}
};