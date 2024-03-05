import { RouteProps } from "react-router-dom";

export type Route = RouteProps & {
	isAuth: boolean
};

export type Routes = Array<Route>;
