import {
	FC,
	useMemo
} from "react";
import { faker } from "@faker-js/faker";
import { Box } from "@mui/material";
import { SearchFriendForm } from "../../../components";
import { FriendsPageUser } from "../../../types";
import { friendsListContainer } from "./FriendsListContainer.styles";
import { FriendsListContainerProps } from "./FriendsListContainer.types";
import FriendsListItem from "./FriendsListItem/FriendsListItem";

const FriendsListContainer: FC<FriendsListContainerProps> = ({
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
			}
		],
		[]
	);

	return (
        <Box
            sx={friendsListContainer.root}
        >
            <SearchFriendForm 
                onSubmit={console.log} 
                initState={{
                    field: ""
                }}
            />
            {mock.map((
                item, i
                ) => (
                    <FriendsListItem
                        key={i}
                        onUserSelect={onUserSelect(item)}
                        {...item}
                    />
                ))
            }
        </Box>
	);
};

export default FriendsListContainer;