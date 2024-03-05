
import {
	useCallback,
	useMemo
} from "react";
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

	const navigate = useNavigate();
	const isOpenSidebar = useTypedSelector(store => store.userSlice.isOpenNavBar);

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
				onClick: () => navigate(PageRoutes.DASHBOARD)
			},
			{
				image: profileIcon,
				position: "top",
				onClick: () => navigate(PageRoutes.PROFILE)
			},
			{
				image: friendsIcon,
				position: "top",
				onClick: () => navigate(PageRoutes.FRIENDS)
			},
			{
				image: libraryIcon,
				position: "top",
				onClick: () => navigate(PageRoutes.LIBRARY)
			},
			{
				image: workshopIcon,
				position: "top",
				onClick: () => navigate(PageRoutes.WORKSHOP)
			},
			{
				image: settingsIcon,
				position: "bottom",
				onClick: () => navigate(PageRoutes.SETTINGS)
			},
			{
				image: logoutIcon,
				position: "bottom",
				onClick: handleLogout
			}
		],
		[handleLogout, navigate]
	);

	return (
		<Drawer
            variant="persistent"
            open={isOpenSidebar}
            sx={sidebarStyles.root}
            hideBackdrop
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
                            title={"title"}                            
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
                            title={"title"}                            
                        />
                    ))
                }
            </Box>
        </Drawer>
	);
};

export default Sidebar;