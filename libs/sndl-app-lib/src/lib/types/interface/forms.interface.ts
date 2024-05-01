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

export type PostFormData = {
	message: string
};

export type PostCommentFormData = {
	message: string
};

export type RegisterFormData = {
	username: string;
	email: string;
	password: string;
};