import { Theme } from "@mui/material";
import { StyleList } from "../../../types";

export const friendsListContainer: StyleList = {
	root: {
		background: (theme: Theme) => theme.palette.sndlGray[400],
		display: "flex",
		flexDirection: "column",
		gap: "10px",
		minWidth: "250px",
		maxWidth: "250px",
		overflowX: "clip",
		overflowY: "auto",
		paddingBottom: "200px"
	}
};