export interface CreateAlbumDto {
	image: string;
	name: string;
}

export interface AddSongToAlbum {
	albumId: number;
	song: CreateSongDto;
}

export interface CreateSongDto {
	name: string;
	sourse: string;
}