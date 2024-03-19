import { StyleList } from "../../../types";

export const songCreationFormStyles: StyleList = {
	root: {
		width: "100%",
		maxHeight: "calc(100dvh - 120px)",
		minHeight: "calc(100dvh - 120px)",
		display: "flex",
		flexDirection: "column",
		padding: "80px",
		paddingBottom: "0px",
		gap: "100px"
	},
	fieldWrapper: {
		display: "flex",
		justifyContent: "space-between",
		gap: "80px"
	},
	leftFields: {
		minWidth: "300px",
		minHeight: "300px"
	},
	rightFields: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		gap: "50px"
	}
};