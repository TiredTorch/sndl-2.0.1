import {
	FC,
	useState
} from "react";
import {
	Box,
	Pagination
} from "@mui/material";
import { useShowSnackbarError } from "../../../hooks";
import { CommonErrorType } from "../../../types";
import ZoneDivider from "../ZoneDivider/ZoneDivider";
import AlbumItem from "./AlbumItem/AlbumItem";
import { paginatedMusicZoneStyles } from "./PaginatedMusicZone.styles";
import { PaginatedMusicZoneProps } from "./PaginatedMusicZone.types";

const PaginatedMusicZone: FC<PaginatedMusicZoneProps> = ({
	query,
	title,
	handleChooseAlbum
}) => {
	const [pageCount, setPageCount] = useState(1);

	const {
		data,
		isError,
		error
	} = query({
		limit: 10,
		page: pageCount
	});

	useShowSnackbarError(
		isError,
		error as CommonErrorType
	);

	if (!data || data?.pagination.total === 0) return null;

	return (
        <Box
            sx={paginatedMusicZoneStyles.root}
        >
            <ZoneDivider title={title}/>
            <Box>
                {data.data.map((
                item, i
                ) => (
                    <AlbumItem
                        handleClick={handleChooseAlbum(item)}
                        {...item}
                        key={i}
                    />
                ))}
            </Box>
            <Pagination
                count={data?.pagination.pageCount}
                page={pageCount}
                onChange={(
                    _, page
                    ) => setPageCount(page)
                }
            />
        </Box>
	);
};

export default PaginatedMusicZone;