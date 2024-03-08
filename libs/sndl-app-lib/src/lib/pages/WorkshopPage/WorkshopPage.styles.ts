import { Theme } from "@mui/material";
import { StyleList } from "../../types";

export const workshopPageStyles: StyleList = {
	root: {
		display: "flex",
		width: "100%",
		justifyContent: "space-around",
		alignItems: "center",
		height: "100dvh"
	},
	item: {
		cursor: "pointer",
		backgroundSize: "cover",
		backgroundPosition: "center",
		width: "30%",
		aspectRatio: "1"
	},
	icon: {

	},
	title: {
		fontSize: "40px",
		color: (theme: Theme) => theme.palette.sndlGray[100],
		fontWeight: "700"
	},
	wrapper: {
		width: "100%",
		height: "100%",
		backdropFilter: "blur(1px)",
		"&:hover": {
			backdropFilter: "blur(10px)"
		},
		transition: "backdrop-filter .3s linear",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: "20px"
	}
};