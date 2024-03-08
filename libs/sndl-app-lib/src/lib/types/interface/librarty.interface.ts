export type LibrarySearchItem = {
	categoryName: string;
	albums: LibraryAlbum[]
};

export type LibraryAlbum = {
	albumName: string;
	image: string;
	songs: LibrarySong[]
};

export type LibrarySong = {
	source: string;
	name: string
};