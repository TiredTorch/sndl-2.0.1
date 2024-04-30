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

export type PaginatedData<T> = {
	pagination: {
		page: number;
		pageCount: number;
		pageSize: number;
		total: number;
	},
	data: T
};

export type PaginationParams = {
	page: number;
	limit: number;
};