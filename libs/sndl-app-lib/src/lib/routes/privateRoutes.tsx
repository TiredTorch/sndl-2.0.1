import { lazy } from "react";
import {
	PageRoutes,
	Routes
} from "../types";

const ProfilePage = lazy(() => import("../pages/ProfilePage/ProfilePage"));
const EditProfilePage = lazy(() => import("../pages/EditProfilePage/EditProfilePage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage/DashboardPage"));
const LibraryPage = lazy(() => import("../pages/LibraryPage/LibraryPage"));
const FriendsPage = lazy(() => import("../pages/FriendsPage/FriendsPage"));
const WorkshopPage = lazy(() => import("../pages/WorkshopPage/WorkshopPage"));
const WorkshopUploadPage = lazy(() => import("../pages/WorkshopPageUpload/WorkshopPageUpload"));
const SettingPage = lazy(() => import("../pages/SettingPage/SettingPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

export const privateRoutes: Routes = [
	{
		isAuth: true,
		element: <ProfilePage/>,
		path: PageRoutes.PROFILE
	},
	{
		isAuth: true,
		element: <EditProfilePage/>,
		path: PageRoutes.EDIT_PROFILE
	},
	{
		isAuth: true,
		element: <DashboardPage/>,
		path: PageRoutes.DASHBOARD
	},
	{
		isAuth: true,
		element: <LibraryPage/>,
		path: PageRoutes.LIBRARY
	},
	{
		isAuth: true,
		element: <FriendsPage/>,
		path: PageRoutes.FRIENDS
	},
	{
		isAuth: true,
		element: <WorkshopPage/>,
		path: PageRoutes.WORKSHOP
	},
	{
		isAuth: true,
		element: <WorkshopUploadPage/>,
		path: PageRoutes.WORKSHOP_UPLOAD
	},
	{
		isAuth: true,
		element: <SettingPage/>,
		path: PageRoutes.SETTINGS
	},
	{
		isAuth: true,
		element: <NotFoundPage/>,
		path: "*"
	}
];