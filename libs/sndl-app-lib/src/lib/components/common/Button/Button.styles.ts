import { Theme } from "@mui/material";
import { StyleList } from "../../../types";

export const buttonStyles: StyleList = {
	root: {
        
	},
	auth: {
		background: (theme: Theme) => theme.palette.sndlRed[700],
		color: (theme: Theme) => theme.palette.sndlGray[100],
		fontSize: "54px",
		textTransform: "capitalize",
		padding: "10px",
		"&:hover": {
			background: (theme: Theme) => theme.palette.sndlRed[600],
		}
	}
};