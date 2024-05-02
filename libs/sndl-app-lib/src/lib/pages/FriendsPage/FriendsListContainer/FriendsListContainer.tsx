import { FC } from "react";
import { Box } from "@mui/material";
import { SearchFriendForm } from "../../../components";
import { useShowSnackbarError } from "../../../hooks";
import { useGetAllFriendsQuery } from "../../../redux";
import { CommonErrorType } from "../../../types";
import { friendsListContainer } from "./FriendsListContainer.styles";
import { FriendsListContainerProps } from "./FriendsListContainer.types";
import FriendsListItem from "./FriendsListItem/FriendsListItem";

const FriendsListContainer: FC<FriendsListContainerProps> = ({
	onUserSelect
}) => {
	const {
		data,
		error,
		isError
	} = useGetAllFriendsQuery();

	useShowSnackbarError(
		isError,
		error as CommonErrorType
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
            {data?.map((
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