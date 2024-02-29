import { Suspense } from "react";
import {
	Route,
	Routes
} from "react-router-dom";
import {
	CommonRoute,
	PrivateRoute
} from "../hocs";
import { commonRoutes } from "./commonRoutes";
import { privateRoutes } from "./privateRoutes";

export const AppRoutes = () => {
	return (
        <Suspense>
            <Routes>
                {
                    [
                        ...privateRoutes,
                        ...commonRoutes
                    ].map((
                        route, index
                        ) => (
                            <Route
                                {...route}
                                key={`r_${index}_${route.path}`}
									element={
										route.isAuth ? (
											<PrivateRoute>
												{route.element}
											</PrivateRoute>
										) : (
											<CommonRoute>
												{route.element}
											</CommonRoute>
										)
									}

                            />
                        ))
                }
            </Routes>
        </Suspense>
	);
};

export default AppRoutes;