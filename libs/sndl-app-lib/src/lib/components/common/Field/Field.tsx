import { FC } from "react";
import {
	Box,
	Input,
	SxProps,
	Theme
} from "@mui/material";
import { fieldStyles } from "./Field.styles";
import { FieldProps } from "./Field.types";

export const Field: FC<FieldProps> = ({
	sx,
	customVariant,
	error,
	customError,
	...rest
}) => {
	return (
        <Box>
            <Input
                fullWidth
                sx={[
                    fieldStyles.root,
                    customVariant === "auth" && fieldStyles.auth,
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