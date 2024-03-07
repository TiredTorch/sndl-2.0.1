import { ModalProps } from "@mui/material";
import { FriendsPageUser } from "../../../types";

export type ExpandedUserModalProps = {
	selectedUser: FriendsPageUser | null;
	onClose: ModalProps["onClose"]
};