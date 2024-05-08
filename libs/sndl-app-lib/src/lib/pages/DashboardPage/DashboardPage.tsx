import {
	useCallback,
	useState
} from "react";
import { useIntl } from "react-intl";
import {
	Box,
	CircularProgress
} from "@mui/material";
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
	const intl = useIntl();
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
		isLoading,
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
            {isLoading && (
                <Box
                    sx={dashboardPageStyles.progressWrapper}
                >
                    <CircularProgress/>
                </Box>
            )}
            {data?.length === 0 && (
                <Box
                    sx={dashboardPageStyles.noPostsText}
                >
                    {intl.formatMessage({ id: "TXT_DASHBOARD_POSTS_NOT_FOUND" })}
                </Box>
            )}
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