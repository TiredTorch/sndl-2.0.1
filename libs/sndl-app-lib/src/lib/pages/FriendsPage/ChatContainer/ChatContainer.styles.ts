import { Theme } from "@mui/material";
import { StyleList } from "../../../types";

export const chatContainerStyles: StyleList = {
	root: {
		height: "100dvh",
		maxHeight: "100dvh",
		width: "calc(100dvw - 330px)",
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "column",
		overflowX: "clip",
		overflowY: "auto",
		paddingBottom: "130px",
		gap: "20px"
	},
	header: {
		background: (theme: Theme) => theme.palette.sndlGray[200],
		color: (theme: Theme) => theme.palette.sndlGray[800],
		padding: "10px",
		fontWeight: "700",
		fontSize: "30px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center"
	},
	messagesWrapper: {
		height: "100%",
		overflowX: "clip",
		overflowY: "auto",
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		padding: "20px"
	}
};