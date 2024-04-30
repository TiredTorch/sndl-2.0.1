
import {
	useCallback,
	useState
} from "react";
import { Box } from "@mui/material";
import { SearchMusicForm } from "../../components";
import ExpandedAlbumModal from "../../components/modals/ExpandedAlbumModal/ExpandedAlbumModal";
import {
	useGetFriendsFeaturedAlbumsQuery,
	useGetNewAlbumsQuery,
	useGetSavedAlbumsQuery
} from "../../redux";
import { AlbumData } from "../../types";
import { libraryPageStyles } from "./LibraryPage.styles";
import PaginatedMusicZone from "./PaginatedMusicZone/PaginatedMusicZone";

const LibraryPage = () => {
	const [selectedAlbum, setSelectedAlbum] = useState<AlbumData | null>(null);

	const handleCloseModal = useCallback(
		() => {
			setSelectedAlbum(null);
		},
		[setSelectedAlbum],
	);
    
	const handleSelectAlbum = useCallback(
		(album: AlbumData) => () => {
			setSelectedAlbum(album);
		},
		[setSelectedAlbum],
	);

	const albumQueries = [
		{
			title: "TXT_SAVED_SONGS",
			query: useGetSavedAlbumsQuery
		},
		{
			title: "TXT_NEW_SONGS",
			query: useGetNewAlbumsQuery
		},
		{
			title: "TXT_FRENDS_FEATURED_SONGS",
			query: useGetFriendsFeaturedAlbumsQuery
		}
	];
    
	return (
        <Box
            sx={libraryPageStyles.root}
        >
            <SearchMusicForm 
                onSubmit={console.log} 
                initState={{
                    tag: ""
                }}
            />
            <Box
                sx={libraryPageStyles.albumWrapper}
            >
                {albumQueries.map((
                    item, i
                    ) => (
                    <PaginatedMusicZone
                        handleChooseAlbum={handleSelectAlbum}
                        query={item.query}
                        title={item.title}
                        key={i}
                    />
                ))}
            </Box>
            <ExpandedAlbumModal
                selectedAlbum={selectedAlbum}
                onClose={handleCloseModal}
            />
        </Box>
	);
};

export default LibraryPage;