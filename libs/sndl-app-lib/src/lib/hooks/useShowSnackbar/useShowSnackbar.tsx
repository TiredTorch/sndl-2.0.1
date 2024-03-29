import { enqueueSnackbar } from "notistack";
import { useEffect } from "react";
import { useIntl } from "react-intl";
import { CommonErrorType } from "../../types";

export const useShowSnackbarError = (
	show: boolean, message: CommonErrorType
) => {
	const intl = useIntl();

	useEffect(
		() => {
			show && enqueueSnackbar(
				`${message.status}: ${intl.formatMessage({ id: message.message ?? "" })}`,
				{
					variant: "error",
					hideIconVariant: true
				}
			);
		},
		[message, show]
	);
    
};