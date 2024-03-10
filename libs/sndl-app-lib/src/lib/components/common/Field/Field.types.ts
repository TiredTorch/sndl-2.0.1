import { InputProps } from "@mui/material";

export type FieldProps = InputProps & {
	customVariant?: "auth"
	customError?: string
};