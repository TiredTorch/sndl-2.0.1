import {
	SxProps,
	Theme
} from "@mui/material";

export type StyleList = Record<string, SxProps<Theme>>;

export type DataProps<T> = {
	[key: string]: T
};

export type CommonErrorType = {
	message: string;
	status: number;
};