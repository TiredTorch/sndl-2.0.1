
import {
	useCallback,
	useMemo
} from "react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import {
	Box,
	Drawer
} from "@mui/material";
import dashboardIcon from "../../../assets/icons/dashboardLinkIcon.png";
import friendsIcon from "../../../assets/icons/friendsLinkIcon.png";
import libraryIcon from "../../../assets/icons/libraryLinkIcon.png";
import logoutIcon from "../../../assets/icons/logoutLinkIcon.png";
import profileIcon from "../../../assets/icons/profileLinkIcon.png";
import settingsIcon from "../../../assets/icons/settingsLinkIcon.png";
import workshopIcon from "../../../assets/icons/workshopLinkIcon.png";
import { useTypedSelector } from "../../../redux";
import {
	PageRoutes,
	StyleList
} from "../../../types";
import { sidebarStyles } from "./Sidebar.styles";
import SidebarListItem from "./SidebarListItem/SidebarListItem";

export const Sidebar = () => {
	const intl = useIntl();
	const navigate = useNavigate();
	const isOpenSidebar = useTypedSelector(store => store.userSlice.isOpenNavBar);
	const userId = useTypedSelector(store => store.userSlice.userId);

	const handleLogout = useCallback(
		() => {
			console.log("a");
		},
		[],
	);

	const navbarItem = useMemo(
		() => [
			{
				image: dashboardIcon,
				position: "top",
				onClick: () => navigate(PageRoutes.DASHBOARD),
				title: "TXT_DASHBOARD_TITLE"
			},
			{
				image: profileIcon,
				position: "top",
				onClick: () => navigate(`/profile/${userId}`),
				title: "TXT_PROFILE_TITLE"
			},
			{
				image: friendsIcon,
				position: "top",
				onClick: () => navigate(PageRoutes.FRIENDS),
				title: "TXT_FRIENDS_TITLE"
			},
			{
				image: libraryIcon,
				position: "top",
				onClick: () => navigate(PageRoutes.LIBRARY),
				title: "TXT_LIBRARY_TITLE"
			},
			{
				image: workshopIcon,
				position: "top",
				onClick: () => navigate(PageRoutes.WORKSHOP),
				title: "TXT_WORKSHOP_TITLE"
			},
			{
				image: settingsIcon,
				position: "bottom",
				onClick: () => navigate(PageRoutes.SETTINGS),
				title: "TXT_SETTINGS_TITLE"
			},
			{
				image: logoutIcon,
				position: "bottom",
				onClick: handleLogout,
				title: "TXT_LOGOUT_TITLE"
			}
		],
		[handleLogout, navigate, userId]
	);

	return (
		<Drawer
            variant="persistent"
            open={isOpenSidebar}
            sx={sidebarStyles.root}
            PaperProps={{
                sx: {
                    ...sidebarStyles.paper,
                    transform: `translateX(${isOpenSidebar ? "0px" : "-150px"}) !important`,
                    visibility: "visible !important",
                    transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1)"
                } as StyleList
            }}
        >
            <Box
                sx={sidebarStyles.sidebarPart}
            >
                {navbarItem.map((
                    item, i
                    ) => (
                        item.position === "top" && 
                        <SidebarListItem
                            icon={item.image}
                            isOpenSidebar={isOpenSidebar}
                            onClick={item.onClick}
                            key={i} 
                            title={intl.formatMessage({ id: item.title })}                            
                        />
                    ))
                }
            </Box>
            <Box
                sx={sidebarStyles.sidebarPart}
            >
                {navbarItem.map((
                    item, i
                    ) => (
                        item.position === "bottom" && 
                        <SidebarListItem
                            icon={item.image}
                            isOpenSidebar={isOpenSidebar}
                            onClick={item.onClick}
                            key={i} 
                            title={intl.formatMessage({ id: item.title })}                                                   
                        />
                    ))
                }
            </Box>
        </Drawer>
	);
};

export default Sidebar;