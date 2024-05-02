import {
	FC,
	useCallback
} from "react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import {
	Box,
	Modal
} from "@mui/material";
import {
	useShowSnackbarError,
	useShowSnackbarSuccess
} from "../../../hooks";
import { useAddFriendMutation } from "../../../redux";
import { CommonErrorType } from "../../../types";
import { ANON_AVATAR } from "../../../utils";
import { Button } from "../../common";
import { expandedUserModalStyles } from "./ExpandedUserModal.styles";
import { ExpandedUserModalProps } from "./ExpandedUserModal.types";

export const ExpandedUserModal: FC<ExpandedUserModalProps> = ({
	onClose,
	selectedUser
}) => {
	const intl = useIntl();
	const navigate = useNavigate();

	const [
		addFriend,
		{
			isError,
			isSuccess,
			error
		}
	] = useAddFriendMutation();

	const handleAddFriend = useCallback(
		() => {
			if (!selectedUser) return;
			addFriend({
				friendId: selectedUser.id
			});
		},
		[addFriend, selectedUser],
	);

	const handleNavigateUser = useCallback(
		() => {
			if (!selectedUser) return;
			navigate(`/profile/${selectedUser.id}`);
		},
		[navigate, selectedUser],
	);

	useShowSnackbarError(
		isError,
		error as CommonErrorType
	);

	useShowSnackbarSuccess(
		isSuccess,
		"TXT_REQUEST_SUCCESS_COMMENT_POST"
	);

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
                    sx={expandedUserModalStyles.name}
                >
                    {selectedUser?.name}
                </Box>
                <Box
                    sx={expandedUserModalStyles.avatar}
                    component="img"
                    src={selectedUser?.avatar ? selectedUser?.avatar : ANON_AVATAR}
                />
                <Box
                    sx={expandedUserModalStyles.buttonWrapper}
                >
                    <Button
                        customVariant="sendMessageForm"
                        onClick={handleAddFriend}
                    >
                        {intl.formatMessage({ id: "TXT_MODAL_USERS_ADD_FRIEND" })}
                    </Button>
                    <Button
                        customVariant="sendMessageForm"
                    >
                        {intl.formatMessage({ id: "TXT_MODAL_USERS_TEXT_FRIEND" })}
                    </Button>
                    <Button
                        customVariant="sendMessageForm"
                        onClick={handleNavigateUser}
                    >
                        {intl.formatMessage({ id: "TXT_MODAL_USERS_CHECK_PAGE" })}
                    </Button>
                </Box>
            </Box>
        </Modal>
	);
};

export default ExpandedUserModal;