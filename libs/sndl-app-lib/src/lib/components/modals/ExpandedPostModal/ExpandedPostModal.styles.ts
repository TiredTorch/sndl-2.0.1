import {
	alpha,
	Theme
} from "@mui/material";
import { StyleList } from "../../../types";

export const expandedPostModalStyles: StyleList = {
	root: {
		position: "absolute",
		width: "90%",
		maxWidth: "990px",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		height: "100dvh",
		padding: "20px",
		background: (theme: Theme) => theme.palette.sndlGray[700],
		display: "flex",
		flexDirection: "column",
		gap: "30px",
	},
	image: {
		width: "100px",
		height: "100px",
		borderRadius: "50px"
	},
	authorWrapper: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "flex-start",
		gap: "30px",
		maxHeight: "20%",
		minHeight: "20%",
	},
	text: {
		fontWeight: "700",
		fontSize: "2.2rem",
		color: (theme: Theme) => theme.palette.sndlGray[100]
	},
	contentWrapper: {
		fontWeight: "700",
		fontSize: "1.2rem",
		color: (theme: Theme) => theme.palette.sndlGray[300],
		background: (theme: Theme) => theme.palette.sndlGray[500],
		border: (theme: Theme) => `1px solid ${alpha(
			`${theme.palette.sndlGray[200]}`,
			.2
		)}`,
		maxHeight: "45%",
		minHeight: "45%",
		overflowY: "auto",
		padding: "20px"
	},
	commentWrapper: {
		background: (theme: Theme) => theme.palette.sndlGray[500],
		border: (theme: Theme) => `1px solid ${alpha(
			`${theme.palette.sndlGray[200]}`,
			.2
		)}`,
		maxHeight: "20%",
		minHeight: "20%",
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		overflowY: "auto",
		padding: "20px"
	},
	noCommentsText: {
		fontWeight: "700",
		fontSize: "1.9rem",
		textAlign: "center",
		color: (theme: Theme) => theme.palette.sndlGray[300],
	}
};