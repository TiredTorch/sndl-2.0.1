export type LoginFormData = {
	email: string
	password: string
};

export type SongCreationFormData = {
	author: string;
	songName: string;
	albumName: string;
	albumImage?: File;
	songFile?: File;
};