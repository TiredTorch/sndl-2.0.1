import { Theme } from "@mui/material";
import { StyleList } from "../../../types";

export const fieldStyles: StyleList = {
	root: {
	},
	rootLabel: {

	},
	auth: {
		fontSize: "30px",
		color: (theme: Theme) => theme.palette.sndlGray[200],
		":after": { 
			borderBottomColor: (theme: Theme) => theme.palette.sndlRed[800] 
		},
	},
	sendChatMessage: {
		width: "100%",
	},
	sendChatMessageInput: {
		fontStyle: "italic",
		color: (theme: Theme) => theme.palette.sndlGray[700],
		fontWeight: "700",
		fontSize: "20px",
		"input": {
			"&::placeholder": {
				opacity: .9
			},
		},
		":after": { 
			borderBottomColor: (theme: Theme) => theme.palette.sndlRed[800] 
		},
	},
	uploadSong: {
		fontStyle: "italic",
		color: (theme: Theme) => theme.palette.sndlGray[700],
		fontWeight: "700",
		fontSize: "20px",
		"input": {
			"&::placeholder": {
				opacity: .9
			},
		},
		":after": { 
			borderBottomColor: (theme: Theme) => theme.palette.sndlRed[800] 
		},
	},
	uploadSongLabel: {
		cursor: "pointer",
		background: (theme: Theme) => theme.palette.sndlGray[700],
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100%"
	},
	fileInput: {
		display: "none"
	},
	errorText: {
		color: (theme: Theme) => theme.palette.sndlRed[300],
		fontSize: "20px"
	},
	stretch: {
		height: "100%"
	},
	sendComment: {
		width: "100%"
	},
	sendCommentInput: {
		fontStyle: "italic",
		color: (theme: Theme) => theme.palette.sndlGray[300],
		fontWeight: "700",
		fontSize: "20px",
		"input": {
			"&::placeholder": {
				opacity: .9
			},
		},
		":after": { 
			borderBottomColor: (theme: Theme) => theme.palette.sndlRed[800] 
		},
	}
};