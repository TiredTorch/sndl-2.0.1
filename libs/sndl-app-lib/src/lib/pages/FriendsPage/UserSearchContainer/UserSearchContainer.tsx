import {
	FC,
	useMemo
} from "react";
import { faker } from "@faker-js/faker";
import { Box } from "@mui/material";
import { FriendsPageUser } from "../../../types";
import { userSearchContainer } from "./UserSearchContainer.styles";
import { UserSearchContainerProps } from "./UserSearchContainer.types";
import UserSearchItem from "./UserSearchItem/UserSearchItem";

const UserSearchContainer: FC<UserSearchContainerProps> = ({
	onUserSelect
}) => {
	const mock = useMemo<FriendsPageUser[]>(
		() => [
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			},
			{
				id: faker.number.int(),
				imageUrl: faker.image.url(),
				name: faker.internet.displayName()
			}
		],
		[]
	);

	return (
        <Box
            sx={userSearchContainer.root}
        >
            {mock.map((
                item, i
                ) => (
                    <UserSearchItem
                        onUserSelect={onUserSelect(item)}
                        key={i}
                        {...item}
                    />
                ))
            }
        </Box>
	);
};

export default UserSearchContainer;