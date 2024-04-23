import { ButtonProps as MUIButtonProps } from "@mui/material";

export type ButtonProps = MUIButtonProps & {
	customVariant?: "auth" | "uploadSong" | "sendMessageForm",
	icon?: string
};