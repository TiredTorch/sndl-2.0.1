import {
	FC,
	useCallback
} from "react";
import { useIntl } from "react-intl";
import {
	Box,
	Divider,
	Modal
} from "@mui/material";
import {
	useShowSnackbarError,
	useShowSnackbarSuccess
} from "../../../hooks";
import { useEditProfileMutation } from "../../../redux";
import {
	CommonErrorType,
	EditProfileFormData
} from "../../../types";
import { EditProfileForm } from "../../forms";
import { configProfileModalStyles } from "./ConfigProfileModal.styles";
import { ConfigProfileModalProps } from "./ConfigProfileModal.types";

export const ConfigProfileModal: FC<ConfigProfileModalProps> = ({
	isOpen,
	onClose
}) => {
	const intl = useIntl();

	const [editProfile, {
		isError,
		error,
		isSuccess
	}] = useEditProfileMutation();

	useShowSnackbarError(
		isError,
		error as CommonErrorType
	);

	useShowSnackbarSuccess(
		isSuccess,
		"TXT_REQUEST_SUCCESS_UPDATE_PROFILE"
	);

	const handleUpload = useCallback(
		(data: EditProfileFormData) => {
			const formData = new FormData();

			if (data.avatarFile) {

				formData.append(
					"avatar",
					data.avatarFile
				);
			}

			const jsonData = {
				status: data.status,
				userName: data.userName
			};

			editProfile({
				formData: formData,
				paramsData: jsonData
			});
		},
		[editProfile],
	);

	return (
        <Modal
            open={isOpen}
            onClose={onClose}
            disableAutoFocus
        >
            <Box
                sx={configProfileModalStyles.root}
            >
                <Divider
                    sx={configProfileModalStyles.divider}
                >
                    {intl.formatMessage({ id: "TXT_SETTING_EDIT_PROFILE_TEXT" })}
                </Divider>
                <EditProfileForm 
                    onSubmit={handleUpload} 
                    initState={{
                        status: "",
                        userName: ""
                    }}
                />
            </Box>
        </Modal>
	);
};

export default ConfigProfileModal;