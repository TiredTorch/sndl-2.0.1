import { Theme } from "@mui/material";
import { StyleList } from "../../../../types";

export const friendsListItemStyles: StyleList = {
	root: {
		display: "flex",
		background: (theme: Theme) => theme.palette.sndlGray[800],
		borderTop: (theme: Theme) => `2px solid ${theme.palette.sndlGray[200]}`,
		borderBottom: (theme: Theme) => `2px solid ${theme.palette.sndlGray[200]}`,
		gap: "10px",
		cursor: "pointer"
	},
	image: {
		width: "80px",
		height: "80px",
	},
	text: {
		color: (theme: Theme) => theme.palette.sndlGray[200],

	}
};