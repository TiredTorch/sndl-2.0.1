import {
	FC,
	useCallback
} from "react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { workshopPageStyles } from "../WorkshopPage.styles";
import { WorkshopButtonNavigateProps } from "./WorkshopButtonNavigate.types";

const WorkshopButtonNavigate: FC<WorkshopButtonNavigateProps> = ({
	icon,
	image,
	link,
	title
}) => {
	const intl = useIntl();
	const navigate = useNavigate();

	const handleClick = useCallback(
		() => {
			navigate(link);
		},
		[link, navigate],
	);

	return (
        <Box
            sx={{
                ...workshopPageStyles.item,
                backgroundImage: `url('${image}')`
            }}
            onClick={handleClick}
        >
            <Box
                sx={workshopPageStyles.wrapper}
            >
                <Box
                    sx={workshopPageStyles.title}
                    >
                    {intl.formatMessage({ id: title })}
                </Box>
                <Box
                    sx={workshopPageStyles.icon}
                    component="img"
                    src={icon}
                    />
            </Box>
        </Box>
	);
};

export default WorkshopButtonNavigate;