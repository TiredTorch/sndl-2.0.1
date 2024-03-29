import { Theme } from "@mui/material";
import { StyleList } from "../../../types";

export const expandedPostModalStyles: StyleList = {
	root: {
		position: "absolute",
		width: "50%",
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
		maxHeight: "20%"
	},
	text: {
		fontWeight: "700",
		fontSize: "36px",
		color: (theme: Theme) => theme.palette.sndlGray[100]
	},
	contentWrapper: {
		fontWeight: "700",
		fontSize: "24px",
		color: (theme: Theme) => theme.palette.sndlGray[300],
		maxHeight: "50%",
		overflowY: "auto"
	},
	commentWrapper: {
		maxHeight: "20%",
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		overflowY: "auto",
		paddingRight: "5px"
	}
};