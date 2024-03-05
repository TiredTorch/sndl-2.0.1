
import {
	alpha,
	Theme
} from "@mui/material";
import { StyleList } from "../../../types";

export const bottomBarStyles: StyleList = {
	root: {
		background: (theme: Theme) => `linear-gradient(0deg, ${theme.palette.sndlGray[500]} 0%, ${alpha(
			theme.palette.sndlGray[500] ?? "",
			0.7
		)} 55%, ${alpha(
			theme.palette.sndlGray[700] ?? "",
			0.1
		)} 100%)`,
		bottom: "0px",
		minWidth: "100dvw",
		minHeight: "120px",
		maxWidth: "100dvw",
		maxHeight: "120px",
		left: 0,
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "5px",
		flexDirection: "row-reverse",
		top: "auto"
	}
};