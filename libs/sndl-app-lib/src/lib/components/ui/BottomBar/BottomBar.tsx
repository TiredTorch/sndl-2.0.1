import {
	useCallback,
	useEffect,
	useState
} from "react";
import { useIntl } from "react-intl";
import { Box } from "@mui/material";
import {
	toggleNavBar,
	useTypedDispatch,
	useTypedSelector
} from "../../../redux";
import { SongData } from "../../../types";
import { Button } from "../../common";
import AudioPlayer from "./AudioPlayer/AudioPlayer";
import { bottomBarStyles } from "./BottomBar.styles";

export const BottomBar = () => {
	const intl = useIntl();
	const dispatch = useTypedDispatch();
	const [currentPlaylistAudio, setCurrentPlaylistAudio] = useState<SongData>();

	const currentPlaylist = useTypedSelector(store => store.userSlice.currentPlaylist);
	const songPlaylistIndex = useTypedSelector(store => store.userSlice.songPlaylistIndex);

	useEffect(
		() => {
			if (!currentPlaylist) return;
			setCurrentPlaylistAudio(currentPlaylist.songs[songPlaylistIndex]);
		},
		[songPlaylistIndex, currentPlaylist]
	);

	const toggleSidebar = useCallback(
		() => {
			dispatch(toggleNavBar());
		},
		[dispatch],
	);

	return (
        <Box
            sx={bottomBarStyles.root}
        >
            <Box
                sx={bottomBarStyles.titleWrapper}
            >
                <Box
                    sx={bottomBarStyles.authorTitle}
                >
                    {currentPlaylistAudio?.name}
                </Box>
                <Box
                    sx={bottomBarStyles.songTitle}
                >
                    {currentPlaylist?.pseudoAuthor}
                </Box>
            </Box>
            <AudioPlayer/>
            <Button
                customVariant="player"
                onClick={toggleSidebar}
            >
                {intl.formatMessage({ id: "TXT_TOGGLE_NAVBAR" })}
            </Button>
        </Box>
	);
};

export default BottomBar;