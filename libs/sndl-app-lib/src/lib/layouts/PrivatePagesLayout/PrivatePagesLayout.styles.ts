import { Theme } from "@mui/material";

export const privatePagesLayoutStyles = {
	root: {
		background: (theme: Theme) => theme.palette.sndlGray[300],
		minHeight: "100dvh",
		minWidth: "100dvw",
		maxHeight: "100dvh",
		maxWidth: "100dvw",
		paddingLeft: "80px"
	},
	innerBox: {
		width: "100%",
		height: "calc(100dvh - 50px)",
		padding: "20px",
		paddingBottom: "80px"
	}
};