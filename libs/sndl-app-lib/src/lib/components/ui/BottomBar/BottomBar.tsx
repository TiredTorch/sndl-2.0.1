import { useCallback } from "react";
import {
	AppBar,
	Button
} from "@mui/material";
import {
	toggleNavBar,
	useTypedDispatch,
	useTypedSelector
} from "../../../redux";
import { bottomBarStyles } from "./BottomBar.styles";

export const BottomBar = () => {

	const dispatch = useTypedDispatch();

	const isToggleSidebar = useTypedSelector(store => store.userSlice.isOpenNavBar);

	const toggleSidebar = useCallback(
		() => {
			dispatch(toggleNavBar());
		},
		[dispatch],
	);
    
	return (
        <AppBar
            sx={bottomBarStyles.root}
        >
            <Button
                onClick={toggleSidebar}
            >
                as
            </Button>
        </AppBar>
	);
};

export default BottomBar;