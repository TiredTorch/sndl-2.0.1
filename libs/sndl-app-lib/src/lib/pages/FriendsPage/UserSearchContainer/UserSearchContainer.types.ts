import { FriendsPageUser } from "../../../types";

export type UserSearchContainerProps = {
	onUserSelect: (user: FriendsPageUser) => () => void
};