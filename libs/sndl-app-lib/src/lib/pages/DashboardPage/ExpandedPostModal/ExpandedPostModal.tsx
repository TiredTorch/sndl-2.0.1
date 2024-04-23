import {
	FC,
	useMemo
} from "react";
import { faker } from "@faker-js/faker";
import {
	Box,
	Modal
} from "@mui/material";
import { PostCommentForm } from "../../../components";
import { DashboardPostComment } from "../../../types";
import CommentItem from "./CommentItem/CommentItem";
import { expandedPostModalStyles } from "./ExpandedPostModal.styles";
import { ExpandedPostModalProps } from "./ExpandedPostModal.types";

const ExpandedPostModal: FC<ExpandedPostModalProps> = ({
	onClose,
	selectedPost
}) => {

	const mock: DashboardPostComment[] = useMemo(
		() => [
			{
				content: faker.lorem.paragraphs(1),
				creator: faker.internet.userName(),
				imageUrl: faker.image.url()
			},
			{
				content: faker.lorem.paragraphs(1),
				creator: faker.internet.userName(),
				imageUrl: faker.image.url()
			},
			{
				content: faker.lorem.paragraphs(1),
				creator: faker.internet.userName(),
				imageUrl: faker.image.url()
			},
			{
				content: faker.lorem.paragraphs(1),
				creator: faker.internet.userName(),
				imageUrl: faker.image.url()
			},
			{
				content: faker.lorem.paragraphs(1),
				creator: faker.internet.userName(),
				imageUrl: faker.image.url()
			},
			{
				content: faker.lorem.paragraphs(1),
				creator: faker.internet.userName(),
				imageUrl: faker.image.url()
			},
			{
				content: faker.lorem.paragraphs(1),
				creator: faker.internet.userName(),
				imageUrl: faker.image.url()
			}
		],
		[]
	);

	return (
        <Modal
            open={!!selectedPost}
            onClose={onClose}
            disableAutoFocus
        >
            <Box
                sx={expandedPostModalStyles.root}
            >
                <Box
                    sx={expandedPostModalStyles.authorWrapper}
                >
                    <Box
                        sx={expandedPostModalStyles.text}
                    >
                        {selectedPost?.creator}
                    </Box>
                    <Box
                        sx={expandedPostModalStyles.image}
                        component="img"
                        src={selectedPost?.imageUrl ?? ""}
                    />
                </Box>
                <Box
                    sx={expandedPostModalStyles.contentWrapper}
                >
                    {selectedPost?.content}
                </Box>
                <PostCommentForm 
                    onSubmit={console.log} 
                    initState={{
                        message: ""
                    }}
                />
                <Box
                    sx={expandedPostModalStyles.commentWrapper}
                >
                    {mock.map((
                        item, i
                        ) => (
                            <CommentItem
                                key={i}
                                {...item}
                            />
                        ))
                    }
                </Box>
            </Box>
        </Modal>
	);
};

export default ExpandedPostModal;