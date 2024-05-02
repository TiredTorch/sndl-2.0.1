import { Theme } from "@mui/material";
import { StyleList } from "../../../types";

export const configProfileModalStyles: StyleList = {
	root: {
		position: "absolute",
		width: "50%",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		height: "100dvh",
		padding: "20px",
		background: (theme: Theme) => theme.palette.sndlGray[400],
		display: "flex",
		flexDirection: "column",
		gap: "2rem",
		justifyContent: "center"
	},
	divider: {
		color: (theme: Theme) => theme.palette.sndlGray[200],
		fontSize: "2rem"
	}
};