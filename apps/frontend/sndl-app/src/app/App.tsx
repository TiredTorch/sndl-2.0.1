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
        <BrowserRouter>
            <AppIntlProvider>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                        <AppRoutes/>
                    </ThemeProvider>
                </Provider>
            </AppIntlProvider>
        </BrowserRouter>
	);
};

export default App;