import { Theme } from "@mui/material";
import { StyleList } from "../../types";

export const publicPagesLayoutStyles: StyleList = {
	root: {
		background: (theme: Theme) => theme.palette.sndlGray[300],
		minHeight: "100dvh",
		minWidth: "100dvw",
		maxHeight: "100dvh",
		maxWidth: "100dvw"
	},
	innerBoxLeft: {
		background: (theme: Theme) => theme.palette.sndlGray[500],
		boxShadow: (theme: Theme) => `35px 0px 109px 100px ${theme.palette.sndlGray[500]}`,
		minHeight: "100dvh",
		minWidth: "35dvw",
		maxHeight: "100dvh",
		maxWidth: "35dvw",
		position: "absolute",
		top: "0px",
		left: "0px",
		zIndex: 5,
		padding: "20px",
		overflowX: "clip",
		overflowY: "auto"
	},
	innerBoxRight: {
		minHeight: "100dvh",
		minWidth: "65dvw",
		maxHeight: "100dvh",
		maxWidth: "65dvw",
		position: "absolute",
		top: "0px",
		right: "0px",
		zIndex: 2
	}
};