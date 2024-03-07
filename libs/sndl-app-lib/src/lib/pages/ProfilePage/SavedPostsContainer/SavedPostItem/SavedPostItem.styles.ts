import { Theme } from "@mui/material";
import { StyleList } from "../../../../types";

export const savedPostItemStyles: StyleList = {
	root: {
		background: (theme: Theme) => theme.palette.sndlGray[400]
	},
	author: {
		fontSize: "28px",
		fontWeight: "700",
		color: (theme: Theme) => theme.palette.sndlGray[200],
	},
	header: {
		background: (theme: Theme) => theme.palette.sndlGray[500],
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		paddingLeft: "20px"
	},
	image: {
		width: "100px",
		height: "100px",
		borderRadius: "50% 0% 0% 50%"
	},
	content: {
		fontSize: "20px",
		color: (theme: Theme) => theme.palette.sndlGray[100],
		padding: "20px"
	},
	rootWrapper: {
		overflowX: "clip",
		overflowY: "auto",
		marginBottom: "170px",
		display: "flex",
		flexDirection: "column",
		gap: "40px",
		paddingRight: "10px"
	}
};