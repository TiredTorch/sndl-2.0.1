import { FC } from "react";
import {
	Box,
	Input,
	InputLabel,
	SxProps,
	Theme
} from "@mui/material";
import successIcon from "../../../assets/icons/create-workshop.png";
import { fieldStyles } from "./Field.styles";
import { FieldProps } from "./Field.types";

export const Field: FC<FieldProps> = ({
	sx,
	type,
	customVariant,
	error,
	value,
	customError,
	uploadIcon,
	...rest
}) => {
	return (
        <Box
            sx={[
                customVariant === "uploadSong" &&
                type === "file" && fieldStyles.uploadSongLabel,
            ] as SxProps<Theme>}
        >
            <InputLabel
                htmlFor={rest.id}
                sx={[
                    customVariant === "uploadSong" && fieldStyles.uploadSongLabel,
                    type !== "file" && fieldStyles.fileInput,
                ] as SxProps<Theme>}
            >
                {uploadIcon && (
                    <Box
                        src={value ? successIcon : uploadIcon}
                        component="img"
                    />
                )}
            </InputLabel>
            <Input
                value={type === "file" ? undefined : value}
                type={type}
                fullWidth
                sx={[
                    fieldStyles.root,
                    customVariant === "auth" && fieldStyles.auth,
                    customVariant === "uploadSong" && fieldStyles.uploadSong,
                    type === "file" && fieldStyles.fileInput,
                    sx
                ] as SxProps<Theme>}
                {...rest}
            />
            {error && (
                <Box
                    sx={fieldStyles.errorText}
                >
                    {customError}
                </Box>
            )}
        </Box>
	);
};

export default Field;