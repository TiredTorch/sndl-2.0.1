import { Theme } from "@mui/material";
import { StyleList } from "../../../types";

export const fieldStyles: StyleList = {
	root: {
        
	},
	auth: {
		fontSize: "30px",
		color: (theme: Theme) => theme.palette.sndlGray[200],
		":after": { 
			borderBottomColor: (theme: Theme) => theme.palette.sndlRed[800] 
		},
	},
	errorText: {
		color: (theme: Theme) => theme.palette.sndlRed[300],
		fontSize: "20px"
	}
};