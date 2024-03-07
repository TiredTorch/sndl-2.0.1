import { FriendsPageUser } from "../../../types";

export type FriendsListContainerProps = {
	onUserSelect: (user: FriendsPageUser) => () => void
};