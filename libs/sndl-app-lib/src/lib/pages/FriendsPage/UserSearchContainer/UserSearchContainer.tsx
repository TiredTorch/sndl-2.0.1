import { FC } from "react";
import { Box } from "@mui/material";
import { useShowSnackbarError } from "../../../hooks";
import { useGetAllUsersQuery } from "../../../redux";
import { CommonErrorType } from "../../../types";
import { userSearchContainer } from "./UserSearchContainer.styles";
import { UserSearchContainerProps } from "./UserSearchContainer.types";
import UserSearchItem from "./UserSearchItem/UserSearchItem";

const UserSearchContainer: FC<UserSearchContainerProps> = ({
	onUserSelect
}) => {
	const {
		data,
		isError,
		error
	} = useGetAllUsersQuery();

	useShowSnackbarError(
		isError,
		error as CommonErrorType
	);

	return (
        <Box
            sx={userSearchContainer.root}
        >
            {data?.map((
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