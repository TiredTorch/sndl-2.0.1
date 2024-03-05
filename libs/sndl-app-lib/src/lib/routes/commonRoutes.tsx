import { lazy } from "react";
import { Navigate } from "react-router-dom";
import {
	PageRoutes,
	Routes
} from "../types";

const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const ResetPasswordPage = lazy(() => import("../pages/ResetPasswordPage/ResetPasswordPage"));

export const commonRoutes: Routes = [
	{
		isAuth: false,
		element: <LoginPage/>,
		path: PageRoutes.LOGIN
	},
	{
		isAuth: false,
		element: <RegisterPage/>,
		path: PageRoutes.REGISTER
	},
	{
		isAuth: false,
		element: <ResetPasswordPage/>,
		path: PageRoutes.RESET_PASSWORD
	},
	{
		isAuth: false,
		element: <Navigate to={PageRoutes.LOGIN}/>,
		path: "*"
	}
];