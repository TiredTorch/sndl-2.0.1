import { useCallback } from "react";
import { Box } from "@mui/material";
import {
	toggleNavBar,
	useTypedDispatch
} from "../../../redux";
import { Button } from "../../common";
import AudioPlayer from "./AudioPlayer/AudioPlayer";
import { bottomBarStyles } from "./BottomBar.styles";

export const BottomBar = () => {
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
                <Box>Author</Box>
                <Box>Song name</Box>
            </Box>
            <AudioPlayer/>
            <Button
                onClick={toggleSidebar}
            >
                as
            </Button>
        </Box>
	);
};

export default BottomBar;