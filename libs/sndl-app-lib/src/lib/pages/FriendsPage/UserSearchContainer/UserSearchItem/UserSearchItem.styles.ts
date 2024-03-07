import { Theme } from "@mui/material";
import { StyleList } from "../../../../types";

export const userSearchItemStyles: StyleList = {
	root: {
		width: "100%",
		maxWidth: "300px",
		height: "100px",
		margin: "20px",
		background: (theme: Theme) => theme.palette.sndlGray[200],
		border: (theme: Theme) => `1px solid ${theme.palette.sndlGray[800]}`,
		display: "flex",
		cursor: "pointer"
	},
	image: {
		width: "100px",
		height: "100%"
	},
	text: {
		display: "flex",
		alignContent: "center",
		justifyContent: "center",
		width: "100%",
		paddingTop: "10px",
		color: (theme: Theme) => theme.palette.sndlGray[800],
		fontWeight: 700,
		fontSize: "20px"
	}
};