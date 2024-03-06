import { Theme } from "@mui/material";
import { StyleList } from "../../types";

export const privatePagesLayoutStyles: StyleList = {
	root: {
		background: (theme: Theme) => theme.palette.sndlGray[300],
		minHeight: "100dvh",
		minWidth: "100dvw",
		maxHeight: "100dvh",
		maxWidth: "100dvw",
		paddingLeft: "80px",
	},
	innerBox: {
		width: "100%",
		height: "100dvh",
		padding: "20px",
		paddingRight: "0px",
		overflow: "hidden"
	}
};