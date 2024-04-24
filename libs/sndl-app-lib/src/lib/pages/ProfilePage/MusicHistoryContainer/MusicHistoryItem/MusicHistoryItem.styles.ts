import { Theme } from "@mui/material";
import { StyleList } from "../../../../types";

export const musicHistoryItemStyles: StyleList = {
	root: {
		borderRadius: "20px",
		display: "flex",
		background: (theme: Theme) => theme.palette.sndlGray[400],
		color: (theme: Theme) => theme.palette.sndlGray[200],
		overflowX: "clip",
	},
	image: {
		minHeight: "100px",
		width: "100px"
	},
	textWrapper: {
		padding: "10px"
	},
	author: {
		fontSize: "24px",
		fontWeight: 700
	},
	name: {
		fontSize: "16px"
        
	}
};