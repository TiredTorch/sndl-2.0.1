import { Theme } from "@mui/material";
import { StyleList } from "../../types";

export const libraryPageStyles: StyleList = {
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		height: "100dvh",
		maxHight: "100dvh",
		padding: "20px",
		paddingRight: "0px"
	},
	albumWrapper: {
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		height: "80dvh",
		maxHight: "80dvh",
		overflowY: "auto",
		paddingBottom: "200px"
	},
	albumWrapperWithNoDivider: {
		display: "flex",
		gap: "20px",
		flexWrap: "wrap",
		justifyContent: "space-between",
		padding: "20px"
	},
	album: {
		background: (theme: Theme) => theme.palette.sndlGray[500],
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		gap: "5px",
		width: "25%",
		padding: "5px"
	},
	albumTitle: {
		fontSize: "30px",
		color: (theme: Theme) => theme.palette.sndlGray[100],
		overflow: "clip",
		maxHeight: "40px"
	},
	albumImage: {
		height: "100px",
		width: "100px",
		borderRadius: "5px"
	},
	albumSingleWrapper: {
		display: "flex",
		justifyContent: "space-between"
	},
	albumSongWrapper: {
		maxHeight: "100px",
		overflowY: "auto",
		width: "-webkit-fill-available",
		padding: "0px 10px",
		gap: "10px",
		display: "flex",
		flexDirection: "column"
	},
	song: {
		background: (theme: Theme) => theme.palette.sndlGray[800],
		padding: "2px",
		color: (theme: Theme) => theme.palette.sndlGray[200]
	},
	divider: {
		fontSize: "36px",
		fontWeight: "700",
		width: "100%",
		color: (theme: Theme) => theme.palette.sndlGray[700]
	},
	albumZoneWrapper: {
		display: "flex",
		flexWrap: "wrap",
		gap: "30px"
	}
};