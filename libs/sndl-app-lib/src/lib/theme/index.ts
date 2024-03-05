import { createTheme } from "@mui/material/styles";

type CustomPallete = {
	"100"?: string;
	"200"?: string;
	"300"?: string;
	"400"?: string;
	"500"?: string;
	"600"?: string;
	"700"?: string;
	"800"?: string;
	"900"?: string;
};

declare module "@mui/material/styles" {
	interface Palette {
		sndlGray: CustomPallete;
		sndlRed: CustomPallete;
	}

	interface PaletteOptions {
		sndlGray: CustomPallete;
		sndlRed: CustomPallete;
	}
}

export const theme = createTheme({
	palette: {
		sndlGray: {
			"100": "#F5F5DC",
			"200": "#CCCCAD",
			"300": "#A9A9A9",
			"400": "#474747",
			"500": "#333333",
			"600": "",
			"700": "#2F3032",
			"800": "#1E1E1E",
			"900": "#0B0B0B",
		},
		sndlRed: {
			"300": "#D11F25",
			"700": "#800020"
		}
	}
});

theme.components = {
	MuiCssBaseline: {
		styleOverrides: {
			"*": {
				scrollbarWidth: "auto",
				scrollbarColor: "#878089 #474747",
			},
			background: theme.palette.sndlGray[500]
		}
	}
};