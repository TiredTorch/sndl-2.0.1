import { Theme } from "@mui/material";
import { StyleList } from "../../types";

export const dashboardPageStyles: StyleList = {
	root: {
		display: "flex",
		flexWrap: "wrap",
		gap: "6%",
		justifyContent: "flex-start",
		width: "100%",
		maxHeight: "100dvh",
		padding: "20px",
		paddingLeft: "100px",
		paddingBottom: "100px",
		overflowY: "scroll",
	},
	progressWrapper: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "100%"
	},
	noPostsText: {
		fontWeight: "700",
		fontSize: "1.9rem",
		textAlign: "center",
		color: (theme: Theme) => theme.palette.sndlGray[700],
	}
};