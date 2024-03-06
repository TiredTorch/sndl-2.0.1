import { DashboardPost } from "../../../types";

export type DashboardPostItemProps = DashboardPost & {
	onClick: VoidFunction;
};