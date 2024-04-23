import { InputProps } from "@mui/material";

export type FieldProps = InputProps & {
	customVariant?: "auth" | "uploadSong" | "sendChatMessage"
	customError?: string
	uploadIcon?: string
};