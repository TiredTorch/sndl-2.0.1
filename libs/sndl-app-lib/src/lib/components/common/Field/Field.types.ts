import { InputProps } from "@mui/material";

export type FieldProps = InputProps & {
	customVariant?: "auth" | "uploadSong"
	customError?: string
	uploadIcon?: string
};