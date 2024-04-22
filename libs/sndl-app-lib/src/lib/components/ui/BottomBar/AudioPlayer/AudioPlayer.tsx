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
import { Button } from "../../../common";
import { bottomBarStyles } from "../BottomBar.styles";

export const AudioPlayer = () => {
	const dispatch = useTypedDispatch();
	const [isPlaying, setIsPlaying] = useState(false);
	
	const volume = useTypedSelector(store => store.userSlice.currentVolumeLevel);
	const currentTime = useTypedSelector(store => store.userSlice.currentSongTime);

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
			audioRef.current.volume = volume;
		},
		[volume]
	);

	useEffect(
		() => {
			if (!audioRef.current) return;
			audioRef.current.currentTime = currentTime;
    
		},
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

	const handleSeekDuration = useCallback(
		(
			_: Event | null, value: number | number[]
		) => {
			if (!audioRef.current) return;
			dispatch(setSongTime(value as number));
			audioRef.current.currentTime = value as number;
		},
		[dispatch, audioRef],
	);

	const handleManualTimeUpdate = useCallback(
		(value: number | number[]) => {
			dispatch(setSongTime(value as number));
		},
		[dispatch],
	);

	return (
        <Box
                sx={bottomBarStyles.audioWrapper}
            >
                <audio
                    src={"https://adsbxalznzhqyedfglws.supabase.co/storage/v1/object/public/songs/1.mp3"}
                    ref={audioRef}
                    onTimeUpdate={e => handleManualTimeUpdate((e.target as HTMLMediaElement).currentTime)}
                />
                <Button>
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
                        onClick={handleTogglePlayPauseSong}
                    >
                        {isPlaying ? "pause" : "play"}
                    </Button>
                </Box>
                <Button>
                    next
                </Button>
            </Box>
	);
};

export default AudioPlayer;