import { FC } from "react";
import { useIntl } from "react-intl";
import { Divider } from "@mui/material";
import { libraryPageStyles } from "../LibraryPage.styles";
import { ZoneDividerProps } from "./ZoneDivider.types";

const ZoneDivider: FC<ZoneDividerProps> = ({
	title
}) => {
	const intl = useIntl();

	return (
        <Divider
            sx={libraryPageStyles.divider}
        >
            {intl.formatMessage({ id: title })}
        </Divider>
	);
};

export default ZoneDivider;