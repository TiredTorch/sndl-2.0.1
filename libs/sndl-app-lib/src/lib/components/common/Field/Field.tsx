import { FC } from "react";
import {
	Box,
	Input
} from "@mui/material";
import { FieldProps } from "./Field.types";

export const Field: FC<FieldProps> = ({
	...rest
}) => {
	return (
        <Box>
            <Input
                {...rest}
            />
        </Box>
	);
};

export default Field;