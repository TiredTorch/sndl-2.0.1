import { Theme } from "@mui/material";
import { StyleList } from "../../../types";

export const dashboardPostItemStyles: StyleList = {
	root: {
		width: "42%",
		background: (theme: Theme) => theme.palette.sndlGray[900],
		marginBottom: "30px",
		borderRadius: "20px",
		overflow: "clip",
		maxHeight: "350px",
	},
	header: {
		background: (theme: Theme) => theme.palette.sndlGray[800],
		color: (theme: Theme) => theme.palette.sndlGray[100],
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: "10px",
		fontSize: "24px",
		fontWeight: "700",
		cursor: "pointer"
	},
	content: {
		display: "flex",
		alignItems: "center",
		color: (theme: Theme) => theme.palette.sndlGray[300],
		padding: "10px"
	},
	image: {
		width: "50px",
		height: "50px",
		borderRadius: "50%"
	}
};