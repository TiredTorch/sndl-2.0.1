import { MemoryStorageFile } from "@blazity/nest-file-fastify";

export interface CreateAlbumDto {
	image: string;
	name: string;
}

export interface AddSongToAlbumDto {
	albumId: number;
	songId: number;
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
	imageBuffer?: MemoryStorageFile;
	songBuffer: MemoryStorageFile;
	data: {
		author: string;
		songName: string;
		albumName: string;
	}
}