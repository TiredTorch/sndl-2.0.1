import { InputProps } from "@mui/material";

export type FieldProps = InputProps & {
	customVariant?: "auth" | "uploadSong" | "sendChatMessage" | "sendComment"
	customError?: string
	uploadIcon?: string
};