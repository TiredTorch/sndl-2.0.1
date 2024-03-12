import { enqueueSnackbar } from "notistack";
import { useEffect } from "react";

export const useShowSnackbarError = (
	show: boolean, message: string
) => {
	useEffect(
		() => {
			show && enqueueSnackbar(
				message,
				{
					variant: "error",
					hideIconVariant: true
				}
			);
		},
		[message, show]
	);
    
};