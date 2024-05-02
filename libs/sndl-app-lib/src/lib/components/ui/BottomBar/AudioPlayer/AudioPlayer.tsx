import {
	useCallback,
	useEffect,
	useRef,
	useState
} from "react";
import {
	Box,
	Slider
} from "@mui/material";
import {
	setIsMusicPlaying,
	setSongIndex,
	setSongTime,
	setVolumeLevel,
	useTypedDispatch,
	useTypedSelector
} from "../../../../redux";
import { SongData } from "../../../../types";
import { Button } from "../../../common";
import { bottomBarStyles } from "../BottomBar.styles";

export const AudioPlayer = () => {
	const dispatch = useTypedDispatch();
	const [currentPlaylistAudio, setCurrentPlaylistAudio] = useState<SongData>();

	const volume = useTypedSelector(store => store.userSlice.currentVolumeLevel);
	const isMusicPlaying = useTypedSelector(store => store.userSlice.isMusicPlaying);
	const currentTime = useTypedSelector(store => store.userSlice.currentSongTime);
	const currentPlaylist = useTypedSelector(store => store.userSlice.currentPlaylist);
	const songPlaylistIndex = useTypedSelector(store => store.userSlice.songPlaylistIndex);

	const [formatedCurrentTime, setFormatedCurrentTime] = useState("");

	const audioRef = useRef<HTMLAudioElement>(null);

    //time showcase
	useEffect(
		() => {
			const minutes = Math.floor(currentTime / 60);
			const secs = Math.floor(currentTime % 60);

			setFormatedCurrentTime(`${minutes < 10 ? `0${minutes}` : minutes}:${secs < 10 ? `0${secs}` : secs}`);
		},
		[currentTime]
	);

    //song change on users music change
	useEffect(
		() => {
			if (!audioRef.current) return;
			if (!currentPlaylist) return;
			setCurrentPlaylistAudio(currentPlaylist.songs[songPlaylistIndex]);
		},
		[songPlaylistIndex, currentPlaylist]
	);
    
    // audio element change from user input
	useEffect(
		() => {
			if (!audioRef.current) return;
			audioRef.current.volume = volume;
		},
		[volume]
	);

	useEffect(
		() => {
			if (!audioRef.current) return;
            
			if (isMusicPlaying) {
				audioRef.current.play();
			} else {
				audioRef.current.pause();
			}
		},
		[dispatch, isMusicPlaying]
	);

	useEffect(
		() => {
			if (!audioRef.current) return;
			audioRef.current.currentTime = currentTime;
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[audioRef]
	);

	useEffect(
		() => {
			if (!audioRef.current) return;
			if (!currentPlaylistAudio?.sourse) return;
            
			audioRef.current.src = currentPlaylistAudio.sourse;
		},
		[audioRef, currentPlaylistAudio]
	);

	const handleTogglePlayPauseSong = useCallback(
		() => {
			dispatch(setIsMusicPlaying(!isMusicPlaying));
		},
		[isMusicPlaying, dispatch],
	);

	const handleVolume = useCallback(
		(
			_: Event, value: number | number[]
		) => {
			dispatch(setVolumeLevel(value as number));
		},
		[dispatch],
	);

	const handleCanPlay = useCallback(
		() => {
			if (!audioRef.current) return;
			dispatch(setIsMusicPlaying(true));
			audioRef.current.play();
		},
		[dispatch],
	);

	const handleNextSong = useCallback(
		() => {
			if (!currentPlaylist) return;
			if (songPlaylistIndex === currentPlaylist.songs.length - 1) return;
			dispatch(setSongTime(0));
			dispatch(setSongIndex(songPlaylistIndex + 1));
		},
		[currentPlaylist, dispatch, songPlaylistIndex],
	);

	const handlePrevSong = useCallback(
		() => {
			if (songPlaylistIndex === 0) return;
			dispatch(setSongTime(0));
			dispatch(setSongIndex(songPlaylistIndex - 1));
		},
		[dispatch, songPlaylistIndex],
	);

	const handleManualTimeUpdate = useCallback(
		(value: number | number[]) => {
			dispatch(setSongTime(value as number));
		},
		[dispatch],
	);
    
	const handleSeekDuration = useCallback(
		(
			_: Event | null, value: number | number[]
		) => {
			if (!audioRef.current) return;
			handleManualTimeUpdate(value);
			audioRef.current.currentTime = value as number;
		},
		[handleManualTimeUpdate],
	);

	return (
        <Box
                sx={bottomBarStyles.audioWrapper}
            >
                <audio
                    onCanPlay={handleCanPlay}
                    onEnded={handleNextSong}
                    preload="metadata"
                    ref={audioRef}
                    onTimeUpdate={e => handleManualTimeUpdate((e.target as HTMLMediaElement).currentTime)}
                />
                <Button
                    onClick={handlePrevSong}
                    customVariant="player"
                >
                    prev
                </Button>
                <Box
                    sx={bottomBarStyles.innerSoundWrapper}
                >
                    <Box
                        sx={bottomBarStyles.sliderWrapper}
                        >
                        <Box
                            sx={bottomBarStyles.volumeWrapperCounter}
                        >
                            <Slider
                                min={0}
                                max={1}
                                step={.01}
                                value={volume}
                                onChange={handleVolume}
                                sx={bottomBarStyles.volumeSlider}
                            />
                            <Box
                                sx={bottomBarStyles.timeCounter}
                            >
                                {formatedCurrentTime}
                            </Box>
                        </Box>
                        <Slider
                            min={0}
                            max={isNaN(audioRef?.current?.duration ?? 0) ? 100 : audioRef?.current?.duration ?? 100}
                            value={currentTime}
                            onChange={handleSeekDuration}
                            sx={bottomBarStyles.timeSlider}
                        />
                    </Box>
                    <Button
                        customVariant="player"
                        onClick={handleTogglePlayPauseSong}
                    >
                        {isMusicPlaying ? "pause" : "play"}
                    </Button>
                </Box>
                <Button
                    onClick={handleNextSong}
                    customVariant="player"
                >
                    next
                </Button>
            </Box>
	);
};

export default AudioPlayer;