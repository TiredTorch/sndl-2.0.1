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
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentPlaylistAudio, setCurrentPlaylistAudio] = useState<SongData>();
	
	console.log(
		"currentPlaylistAudio",
		currentPlaylistAudio?.sourse
	);

	const volume = useTypedSelector(store => store.userSlice.currentVolumeLevel);
	const currentTime = useTypedSelector(store => store.userSlice.currentSongTime);
	const currentPlaylist = useTypedSelector(store => store.userSlice.currentPlaylist);
	const songPlaylistIndex = useTypedSelector(store => store.userSlice.songPlaylistIndex);

	const [formatedCurrentTime, setFormatedCurrentTime] = useState("");

	const audioRef = useRef<HTMLAudioElement>(null);
    
	const handleTogglePlayPauseSong = useCallback(
		() => {
			if (!audioRef.current) return;
			if (isPlaying) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
			setIsPlaying(prevState => !prevState);
		},
		[isPlaying],
	);

	useEffect(
		() => {
			const minutes = Math.floor(currentTime / 60);
			const secs = Math.floor(currentTime % 60);

			setFormatedCurrentTime(`${minutes < 10 ? `0${minutes}` : minutes}:${secs < 10 ? `0${secs}` : secs}`);
		},
		[currentTime]
	);

	useEffect(
		() => {
			if (!audioRef.current) return;
			if (!currentPlaylist) return;
			setCurrentPlaylistAudio(currentPlaylist.songs[songPlaylistIndex]);
			setIsPlaying(true);
			audioRef.current.play();
		},
		[songPlaylistIndex, currentPlaylist]
	);
    
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
			audioRef.current.currentTime = currentTime;
    
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[audioRef]
	);

	const handleVolume = useCallback(
		(
			_: Event, value: number | number[]
		) => {
			dispatch(setVolumeLevel(value as number));
		},
		[dispatch],
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
                    src={currentPlaylistAudio?.sourse}
                    ref={audioRef}
                    onTimeUpdate={e => handleManualTimeUpdate((e.target as HTMLMediaElement).currentTime)}
                />
                <Button
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
                            max={isNaN(audioRef?.current?.duration ?? 0) ? 0 : audioRef?.current?.duration ?? 0}
                            value={currentTime}
                            onChange={handleSeekDuration}
                            sx={bottomBarStyles.timeSlider}
                        />
                    </Box>
                    <Button
                        customVariant="player"
                        onClick={handleTogglePlayPauseSong}
                    >
                        {isPlaying ? "pause" : "play"}
                    </Button>
                </Box>
                <Button
                    customVariant="player"
                >
                    next
                </Button>
            </Box>
	);
};

export default AudioPlayer;