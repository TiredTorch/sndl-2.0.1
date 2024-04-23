import { FC } from "react";
import {
	Box,
	Button as MUIButton,
	SxProps,
	Theme
} from "@mui/material";
import { buttonStyles } from "./Button.styles";
import { ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = ({
	children,
	customVariant,
	icon,
	sx,
	...rest
}) => {
	return (
        <MUIButton
            disableElevation
            disableFocusRipple
            disableRipple
            disableTouchRipple
            sx={[
                buttonStyles.root,
                customVariant === "auth" && buttonStyles.auth,
                customVariant === "sendMessageForm" && buttonStyles.sendMessageForm,
                sx
            ] as SxProps<Theme>}
            {...rest}
        >
            {icon && (
                <Box
                    component="img"
                    src={icon}
                />
            )}
            {children}
        </MUIButton>
	);
};

export default Button;