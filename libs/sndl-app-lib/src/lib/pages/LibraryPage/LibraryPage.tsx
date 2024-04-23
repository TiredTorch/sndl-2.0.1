import { useMemo } from "react";
import { faker } from "@faker-js/faker";
import { Box } from "@mui/material";
import { SearchMusicForm } from "../../components";
import {
	LibraryAlbum,
	LibrarySearchItem,
	LibrarySong
} from "../../types";
import LibraryMusicItem from "./LibraryMusicItem/LibraryMusicItem";
import { libraryPageStyles } from "./LibraryPage.styles";
import ZoneDivider from "./ZoneDivider/ZoneDivider";

const LibraryPage = () => {
	const mockSongs = useMemo<LibrarySong[]>(
		() => [
			{
				name: faker.music.songName(),
				source: ""
			},
			{
				name: faker.music.songName(),
				source: ""
			},
			{
				name: faker.music.songName(),
				source: ""
			},
			{
				name: faker.music.songName(),
				source: ""
			},
			{
				name: faker.music.songName(),
				source: ""
			},
			{
				name: faker.music.songName(),
				source: ""
			},
			{
				name: faker.music.songName(),
				source: ""
			},
			{
				name: faker.music.songName(),
				source: ""
			},
			{
				name: faker.music.songName(),
				source: ""
			},
			{
				name: faker.music.songName(),
				source: ""
			},
			{
				name: faker.music.songName(),
				source: ""
			},
		],
		[]
	);

	const mockAlbums = useMemo<LibraryAlbum[]>(
		() => [
			{
				albumName: faker.music.songName(),
				image: faker.image.url(),
				songs: mockSongs
			},
			{
				albumName: faker.music.songName(),
				image: faker.image.url(),
				songs: mockSongs
			},
			{
				albumName: faker.music.songName(),
				image: faker.image.url(),
				songs: mockSongs
			},
			{
				albumName: faker.music.songName(),
				image: faker.image.url(),
				songs: mockSongs
			},
			{
				albumName: faker.music.songName(),
				image: faker.image.url(),
				songs: mockSongs
			},
			{
				albumName: faker.music.songName(),
				image: faker.image.url(),
				songs: mockSongs
			},
			{
				albumName: faker.music.songName(),
				image: faker.image.url(),
				songs: mockSongs
			}
		],
		[mockSongs]
	);

	const mock = useMemo<LibrarySearchItem[]>(
		() => [
			{
				albums: mockAlbums,
				categoryName: "TXT_SAVED_SONGS"
			},
			{
				albums: mockAlbums,
				categoryName: "TXT_LATEST_SONGS"
			},
			{
				albums: mockAlbums,
				categoryName: "TXT_NEW_SONGS"
			},
			{
				albums: mockAlbums,
				categoryName: "TXT_FRENDS_FEATURED_SONGS"
			}
		],
		[mockAlbums]
	);

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
                {mock.map((
                    item, i
                    ) => (
                        <Box
                            key={i}
                        >
                            <ZoneDivider
                                title={item.categoryName}
                            />
                            <Box
                                sx={libraryPageStyles.albumWrapperWithNoDivider}
                            >
                                {item.albums.map((
                                    album, j
                                    ) => (
                                        <LibraryMusicItem
                                        key={j}
                                        album={album}
                                        />
                                    ))
                                }
                            </Box>
                        </Box>
                    ))
                }
            </Box>
        </Box>
	);
};

export default LibraryPage;