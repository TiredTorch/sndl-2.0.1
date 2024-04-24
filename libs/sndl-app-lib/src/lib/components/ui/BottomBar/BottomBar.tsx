import { useCallback } from "react";
import { useIntl } from "react-intl";
import { Box } from "@mui/material";
import {
	toggleNavBar,
	useTypedDispatch
} from "../../../redux";
import { Button } from "../../common";
import AudioPlayer from "./AudioPlayer/AudioPlayer";
import { bottomBarStyles } from "./BottomBar.styles";

export const BottomBar = () => {
	const intl = useIntl();
	const dispatch = useTypedDispatch();

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
            <Box>
                <Box
                    sx={bottomBarStyles.authorTitle}
                >Author</Box>
                <Box
                    sx={bottomBarStyles.songTitle}
                >Song name</Box>
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