import { SongData } from "../../../../types";

export type SongItemProps = {
	song: SongData;
	handlePlay: VoidFunction;
	index: number;
};