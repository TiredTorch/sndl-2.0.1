import {
	useCallback,
	useState
} from "react";
import { Box } from "@mui/material";
import { ExpandedPostModal } from "../../components";
import { useShowSnackbarError } from "../../hooks";
import { useGetPostsQuery } from "../../redux";
import {
	CommonErrorType,
	DashboardPost
} from "../../types";
import { dashboardPageStyles } from "./DashboardPage.styles";
import DashboardPostItem from "./DashboardPostItem/DashboardPostItem";

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

	const {
		data,
		error,
		isError
	} = useGetPostsQuery();

	useShowSnackbarError(
		isError,
		error as CommonErrorType
	);
    
	return (
        <Box
            sx={dashboardPageStyles.root}
        >
            {data?.map((
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