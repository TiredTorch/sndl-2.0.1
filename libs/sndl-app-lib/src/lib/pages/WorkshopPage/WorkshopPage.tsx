import { useMemo } from "react";
import { Box } from "@mui/material";
import addIcon from "../../assets/icons/add-workshop.png";
import createIcon from "../../assets/icons/create-workshop.png";
import workshopCreateImage from "../../assets/images/workshop-button-1.png";
import workshopUploadImage from "../../assets/images/workshop-button-2.png";
import { PageRoutes } from "../../types";
import WorkshopButtonNavigate from "./WorkshopButtonNavigate/WorkshopButtonNavigate";
import { workshopPageStyles } from "./WorkshopPage.styles";

const WorkshopPage = () => {
	const buttonsData = useMemo(
		() => [
			{
				image: workshopCreateImage,
				title: "TXT_WORKSHOP_CREATE",
				icon: addIcon,
				link: PageRoutes.WORKSHOP_CREATE
			},
			{
				image: workshopUploadImage,
				title: "TXT_WORKSHOP_UPLOAD",
				icon: createIcon,
				link: PageRoutes.WORKSHOP_UPLOAD
			}
		],
		[]
	);

	return (
        <Box
            sx={workshopPageStyles.root}
        >
            {buttonsData.map((
                item, i
                ) => (
                    <WorkshopButtonNavigate
                        key={i}
                        {...item}
                    />
                ))
            }
        </Box>
	);
};

export default WorkshopPage;