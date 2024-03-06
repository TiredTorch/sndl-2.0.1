import { ModalProps } from "@mui/material";
import { DashboardPost } from "../../../types";

export type ExpandedPostModalProps = {
	selectedPost: DashboardPost | null;
	onClose: ModalProps["onClose"]
};