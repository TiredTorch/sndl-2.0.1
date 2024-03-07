import { FC } from "react";
import {
	Box,
	Modal
} from "@mui/material";
import { expandedUserModalStyles } from "./ExpandedUserModal.styles";
import { ExpandedUserModalProps } from "./ExpandedUserModal.types";

const ExpandedUserModal: FC<ExpandedUserModalProps> = ({
	onClose,
	selectedUser
}) => {
	return (
        <Modal
            open={!!selectedUser}
            onClose={onClose}
            disableAutoFocus
        >
            <Box
                sx={expandedUserModalStyles.root}
            >
                <Box
                />
            </Box>
        </Modal>
	);
};

export default ExpandedUserModal;