
export type AlbumData = {
	id: number;
	image: string;
	name: string;
	pseudoAuthor: string;
	songs: Array<SongData>
};

export type SongData = {
	name: string;
	sourse: string;
};