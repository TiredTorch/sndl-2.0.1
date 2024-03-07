import { FC } from "react";
import { useIntl } from "react-intl";
import {
	Box,
	Checkbox
} from "@mui/material";
import { settingItemFormStyles } from "./SettingItemForm.styles";
import { SettingItemFormProps } from "./SettingItemForm.types";

export const SettingItemForm: FC<SettingItemFormProps> = ({
	handler,
	title,
	value
}) => {
	const intl = useIntl();

	return (
        <Box
            sx={settingItemFormStyles.root}
        >
            <Checkbox
                checked={value}
                onChange={handler}
            />
            <Box>
                {intl.formatMessage({ id: title })}
            </Box>
        </Box>
	);
};

export default SettingItemForm;