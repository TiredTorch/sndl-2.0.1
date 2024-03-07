import {
	useEffect,
	useMemo,
	useRef
} from "react";
import { faker } from "@faker-js/faker";
import { Box } from "@mui/material";
import { ProfileMusicHistoryItem } from "../../../types";
import { profilePageStyles } from "../ProfilePage.styles";
import MusicHistoryItem from "./MusicHistoryItem/MusicHistoryItem";

const MusicHistoryContainer = () => {
	const chatContainerRef = useRef<HTMLDivElement | null>(null);

	const musicMock = useMemo<ProfileMusicHistoryItem[]>(
		() => [
			{
				author: faker.internet.displayName(),
				image: faker.image.url(),
				title: faker.music.songName()
			},
			{
				author: faker.internet.displayName(),
				image: faker.image.url(),
				title: faker.music.songName()
			},
			{
				author: faker.internet.displayName(),
				image: faker.image.url(),
				title: faker.music.songName()
			},
			{
				author: faker.internet.displayName(),
				image: faker.image.url(),
				title: faker.music.songName()
			},
			{
				author: faker.internet.displayName(),
				image: faker.image.url(),
				title: faker.music.songName()
			},
			{
				author: faker.internet.displayName(),
				image: faker.image.url(),
				title: faker.music.songName()
			},
			{
				author: faker.internet.displayName(),
				image: faker.image.url(),
				title: faker.music.songName()
			},
			{
				author: faker.internet.displayName(),
				image: faker.image.url(),
				title: faker.music.songName()
			},
			{
				author: faker.internet.displayName(),
				image: faker.image.url(),
				title: faker.music.songName()
			},
			{
				author: faker.internet.displayName(),
				image: faker.image.url(),
				title: faker.music.songName()
			},
			{
				author: faker.internet.displayName(),
				image: faker.image.url(),
				title: faker.music.songName()
			},
			{
				author: faker.internet.displayName(),
				image: faker.image.url(),
				title: faker.music.songName()
			},
			{
				author: faker.internet.displayName(),
				image: faker.image.url(),
				title: faker.music.songName()
			},
		],
		[]
	);
        
	useEffect(
		() => {
			if (chatContainerRef.current) {
				chatContainerRef.current.scrollTop =  chatContainerRef.current.scrollHeight;
			}
		},
		[musicMock]
	);

	return (
        <Box
            ref={chatContainerRef}
            sx={profilePageStyles.musicHistoryWrapper}
        >
            {musicMock.map((
                item, i
                ) => (
                    <MusicHistoryItem
                        key={i}
                        {...item}
                    />
                ))
            }
        </Box>
	);
};

export default MusicHistoryContainer;