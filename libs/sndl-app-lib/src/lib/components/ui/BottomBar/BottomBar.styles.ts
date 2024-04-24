
import {
	alpha,
	Theme
} from "@mui/material";
import { StyleList } from "../../../types";

export const bottomBarStyles: StyleList = {
	authorTitle: {
		color: (theme: Theme) => theme.palette.sndlGray[100],
		fontSize: "30px"
	},
	songTitle: {
		color: (theme: Theme) => theme.palette.sndlGray[200],
		fontSize: "24px"

	},
	root: {
		background: (theme: Theme) => `linear-gradient(0deg, ${theme.palette.sndlGray[500]} 0%, ${alpha(
			theme.palette.sndlGray[500] ?? "",
			0.9
		)} 55%, ${alpha(
			theme.palette.sndlGray[700] ?? "",
			0.5
		)} 100%)`,
		bottom: "0px",
		minWidth: "calc(100dvw - 80px)",
		minHeight: "120px",
		maxWidth: "calc(100dvw - 80px)",
		maxHeight: "120px",
		right: 0,
		position: "absolute",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "0 50px",
		top: "auto"
	},
	audioWrapper: {
		display: "flex",
		gap: "40px",
		alignItems: "center"
	},
	innerSoundWrapper: {
		display: "flex",
		gap: "25px",
		alignItems: "center"
	},
	sliderWrapper: {
		display: "flex",
		flexDirection: "column",
		gap: "5px",
		minWidth: "30dvw",
	},
	timeSlider: {
		minWidth: "100%",
		color: (theme: Theme) => theme.palette.sndlGray[200]
	},
	volumeSlider: {
		maxWidth: "50%",
		color: (theme: Theme) => theme.palette.sndlGray[200]
	},
	timeCounter: {
		color: (theme: Theme) => theme.palette.sndlGray[200]
	},
	volumeWrapperCounter: {
		display: "flex",
		gap: "20px",
		alignItems: "center",
		justifyContent: "space-between",
		paddingRight: "10px"
	}
};