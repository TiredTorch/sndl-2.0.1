import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {
	CssBaseline,
	ThemeProvider
} from "@mui/material";
import {
	AppIntlProvider,
	AppRoutes,
	store,
	theme
} from "@sndl-app-lib";

const App = () => {

	return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <AppIntlProvider>
                    <BrowserRouter>
                            <AppRoutes/>
                    </BrowserRouter>
                </AppIntlProvider>
                <CssBaseline/>
            </ThemeProvider>
        </Provider>
	);
};

export default App;