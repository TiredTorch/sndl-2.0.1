import { UseQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { QueryDefinition } from "@reduxjs/toolkit/query";
import { AxiosBaseQueryFn } from "../../../redux/axios/baseQuery/baseQuery.types";
import {
	AlbumData,
	PaginatedData,
	PaginationParams
} from "../../../types";

export type PaginatedMusicZoneProps = {
	query: UseQuery<QueryDefinition<PaginationParams, AxiosBaseQueryFn, never, PaginatedData<AlbumData[]>, "albumsService">>;
	title: string;
	handleChooseAlbum: (data: AlbumData) => () => void;
};