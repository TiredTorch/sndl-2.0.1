import { FriendsPageUser } from "../../../../types";

export type FriendsListItemProps = FriendsPageUser & {
	onUserSelect: VoidFunction
};