import { Theme } from "@mui/material";
import { StyleList } from "../../../types";

export const loginFormStyles: StyleList = {
	root: {
		display: "flex",
		height: "100dvh",
		flexDirection: "column",
		gap: "40px",
		padding: "20px"
	},
	title: {
		fontSize: "60px",
		color: (theme: Theme) => theme.palette.sndlGray[200],
		marginBottom: "70px"
	},
	buttonWrapper: {
		marginTop: "70px",
		display: "flex",
		gap: "20px"
	},
	routerLink: {
		textDecoration: "none"
	},
	link: {
		color: (theme: Theme) => `${theme.palette.sndlGray[200]} !important`,
		"&:hover": {
			color: (theme: Theme) => `${theme.palette.sndlGray[100]} !important`,
		},
		transition: "all .1s linear",
		fontSize: "20px",
		fontStyle: "italic"
	}
};