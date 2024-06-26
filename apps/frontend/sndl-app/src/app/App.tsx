import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import {
	CssBaseline,
	ThemeProvider
} from "@mui/material";
import {
	AppIntlProvider,
	AppRoutes,
	persistor,
	SocketProvider,
	store,
	theme
} from "@sndl-app-lib";

const App = () => {

	return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <PersistGate
                    persistor={persistor}
                >
                    <AppIntlProvider>  
                        <SocketProvider>
                            <SnackbarProvider
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left"
                                }}
                                maxSnack={5}
                                autoHideDuration={3500}
                                >
                                <BrowserRouter>
                                        <AppRoutes/>
                                </BrowserRouter>
                            </SnackbarProvider> 
                        </SocketProvider>
                    </AppIntlProvider>
                    <CssBaseline/>
                </PersistGate>
            </ThemeProvider>
        </Provider>
	);
};

export default App;