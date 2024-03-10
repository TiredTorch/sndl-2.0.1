import { FC } from "react";
import { useIntl } from "react-intl";
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
	const intl = useIntl();

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
                    {intl.formatMessage({id: customError})}
                </Box>
            )}
        </Box>
	);
};

export default Field;