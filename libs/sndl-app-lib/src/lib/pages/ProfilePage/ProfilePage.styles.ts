import { Theme } from "@mui/material";
import { StyleList } from "../../types";

export const profilePageStyles: StyleList = {
	root: {
		display: "flex",
		justifyContent: "space-between",
		height: "100dvh",
		padding: "20px",
		gap: "20px"
	},
	leftSize: {
		height: "100dvh",
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "column",
	},
	postsWrapper: {
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		minHeight: "60dvh"
	},
	profile: {
		minHeight: "200px",
		display: "flex",
	},
	image: {
		width: "200px",
		height: "200px",
		borderRadius: "50%"
	},
	textWrapper: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		padding: "30px"
	},
	status: {
		color: (theme: Theme) => theme.palette.sndlGray[200],
		fontSize: "25px",

	},
	name: {
		color: (theme: Theme) => theme.palette.sndlGray[100],
		fontSize: "36px",
		fontWeight: "700"
	},
	divider: {
		background: (theme: Theme) => theme.palette.sndlGray[200],
		height: "2px",
		width: "80%",
		marginLeft: "3%"
	},
	musicHistoryWrapper: {
		minWidth: "320px",
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		overflowY: "auto",
		overflowX: "hidden",
		marginBottom: "130px",
		paddingRight: "10px",
	}
};