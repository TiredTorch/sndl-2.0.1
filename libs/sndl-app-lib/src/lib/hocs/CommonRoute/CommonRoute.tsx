import {
	FC,
	PropsWithChildren
} from "react";
import {
	Navigate,
	useLocation
} from "react-router-dom";
import { useTypedSelector } from "../../redux";
import { PageRoutes } from "../../types";

export const CommonRoute: FC<PropsWithChildren> = ({
	children
}) => {
	const location = useLocation();

	const isUserLoggedIn = useTypedSelector(store => store.userSlice.isLoggedIn);

	if (isUserLoggedIn) {
		return (
			<Navigate
				to={PageRoutes.DASHBOARD}
				state={{ from: location }}
				replace
			/>
		);
	}

	return children;
};

export default CommonRoute;
