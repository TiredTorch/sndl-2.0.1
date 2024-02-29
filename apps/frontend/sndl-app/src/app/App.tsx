import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {
	CssBaseline,
	ThemeProvider
} from "@mui/material";
import {
	AppRoutes,
	store,
	theme
} from "@sndl-app-lib";

const App = () => {
	return (
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <AppRoutes/>
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
	);
};

export default App;