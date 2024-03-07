import { useMemo } from "react";
import { faker } from "@faker-js/faker";
import { Box } from "@mui/material";
import SavedPostItem from "./SavedPostItem/SavedPostItem";
import { savedPostItemStyles } from "./SavedPostItem/SavedPostItem.styles";

const SavedPostsContainer = () => {
	const mock = useMemo(
		() => [
			{
				image: faker.image.url(),
				content: faker.lorem.paragraphs(2),
				author: faker.internet.userName()
			},
			{
				image: faker.image.url(),
				content: faker.lorem.paragraphs(2),
				author: faker.internet.userName()
			},
			{
				image: faker.image.url(),
				content: faker.lorem.paragraphs(2),
				author: faker.internet.userName()
			},
			{
				image: faker.image.url(),
				content: faker.lorem.paragraphs(2),
				author: faker.internet.userName()
			},
			{
				image: faker.image.url(),
				content: faker.lorem.paragraphs(2),
				author: faker.internet.userName()
			},
			{
				image: faker.image.url(),
				content: faker.lorem.paragraphs(2),
				author: faker.internet.userName()
			}
		],
		[]
	);

	return (
        <Box
            sx={savedPostItemStyles.rootWrapper}
        >
            {mock.map((
                item, i
                ) => (
                    <SavedPostItem
                        key={i}
                        {...item}
                    />
                ))
            }
        </Box>
	);
};

export default SavedPostsContainer;