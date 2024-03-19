export interface CreateAlbumDto {
	image: string;
	name: string;
}

export interface AddSongToAlbumDto {
	albumId: number;
	song: CreateSongDto;
}

export interface CreateSongDto {
	name: string;
	sourse: string;
}

export interface UploadSongToAlbumDto {
	author: string;
	songName: string;
	albumName: string;
	albumImage?: File;
	songFile: File;
}

export interface UploadSongToAlbumPreparedDto {
	imageBuffer?: File;
	songBuffer: File;
	data: {
		author: string;
		songName: string;
		albumName: string;
	}
}