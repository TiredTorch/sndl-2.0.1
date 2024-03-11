import {
	useCallback,
	useMemo,
	useState
} from "react";
import { faker } from "@faker-js/faker";
import { Box } from "@mui/material";
import { DashboardPost } from "../../types";
import { dashboardPageStyles } from "./DashboardPage.styles";
import DashboardPostItem from "./DashboardPostItem/DashboardPostItem";
import ExpandedPostModal from "./ExpandedPostModal/ExpandedPostModal";

const DashboardPage = () => {
	const [selectedPost, setSelectedPost] = useState<DashboardPost | null>(null);

	const handleDeselectPost = useCallback(
		() => {
			setSelectedPost(null);
		},
		[setSelectedPost],
	);

	const handleSelectPost = useCallback(
		(post: DashboardPost) => () => {
			setSelectedPost(post);
		},
		[setSelectedPost],
	);
    
	console.log(
		"a",
		import.meta.env.VITE_BACKEND_URL
	);

	const mock: DashboardPost[] = useMemo(
		() => [
			{
				content: faker.lorem.paragraphs(10),
				creator: faker.internet.userName(),
				imageUrl: faker.image.url()
			},
			{
				content: faker.lorem.paragraphs(10),
				creator: faker.internet.userName(),
				imageUrl: faker.image.url()
			},
			{
				content: faker.lorem.paragraphs(10),
				creator: faker.internet.userName(),
				imageUrl: faker.image.url()
			},
			{
				content: faker.lorem.paragraphs(10),
				creator: faker.internet.userName(),
				imageUrl: faker.image.url()
			},
			{
				content: faker.lorem.paragraphs(10),
				creator: faker.internet.userName(),
				imageUrl: faker.image.url()
			},
			{
				content: faker.lorem.paragraphs(10),
				creator: faker.internet.userName(),
				imageUrl: faker.image.url()
			},
			{
				content: faker.lorem.paragraphs(10),
				creator: faker.internet.userName(),
				imageUrl: faker.image.url()
			}
		],
		[]
	);

	return (
        <Box
            sx={dashboardPageStyles.root}
        >
            {mock.map((
                item, i
                ) => (
                    <DashboardPostItem
                        key={i}
                        onClick={handleSelectPost(item)}
                        {...item}
                    />
                ))
            }
            <ExpandedPostModal 
                selectedPost={selectedPost} 
                onClose={handleDeselectPost}
            />
        </Box>
	);
};

export default DashboardPage;