import {
	FC,
	PropsWithChildren
} from "react";
import {
	Navigate,
	useLocation
} from "react-router-dom";
import { PrivatePagesLayout } from "../../layouts";
import { useTypedSelector } from "../../redux";
import { PageRoutes } from "../../types";

export const PrivateRoute: FC<PropsWithChildren> = ({
	children
}) => {
	const location = useLocation();

	const isUserLoggedIn = useTypedSelector(store => store.userSlice.isLoggedIn);

	if (!isUserLoggedIn) {
		return (
			<Navigate
				to={PageRoutes.LOGIN}
				state={{ from: location }}
				replace
			/>
		);
	}

	return (
        <PrivatePagesLayout>
            {children}
        </PrivatePagesLayout>
	);
};

export default PrivateRoute;
