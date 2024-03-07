import { Theme } from "@mui/material";
import { StyleList } from "../../../../types";

export const chatMessageItemStyles: StyleList = {
	root: {
	},
	mineMessage: {
		background: (theme: Theme) => theme.palette.sndlGray[100],
		display: "flex",
		gap: "20px",
		justifyContent: "flex-start",
		flexDirection: "row-reverse",
		padding: "10px",
		width: "90%",
		marginLeft: "10%",
		borderRadius: "10px"
	},
	othersMessage: {
		background: (theme: Theme) => theme.palette.sndlGray[100],
		display: "flex",
		gap: "20px",
		justifyContent: "flex-start",
		padding: "10px",
		width: "90%",
		borderRadius: "10px"
	},
	image: {
		height: "50px",
		width: "50px",
		borderRadius: "50%"
	},
	content: {
        
	}
};