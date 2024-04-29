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
				`${message.status}: ${intl.formatMessage({ id: `${message.message}`}) ?? message.message}`,
				{
					variant: "error",
					hideIconVariant: true
				}
			);
		},
		[intl, message, show]
	);
    
};

export const useShowSnackbarSuccess = (
	show: boolean, message: string
) => {
	const intl = useIntl();

	useEffect(
		() => {
			show && enqueueSnackbar(
				intl.formatMessage({ id: `${message}`}),
				{
					variant: "success",
					hideIconVariant: true
				}
			);
		},
		[intl, message, show]
	);
    
};