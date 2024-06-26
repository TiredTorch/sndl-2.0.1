import { MemoryStorageFile } from "@blazity/nest-file-fastify";

export interface EditProfileDto {
	avatar?: MemoryStorageFile;
	status: string;
	name: string
}

export interface CreateUserDto {
	name: string;
	email: string;
	avatar: string;
	status: string;
	password: string;
}

export interface AddFriendDto {
	friendId: number
}

export interface RemoveFriendDto {
	friendId: number
}

export interface UpdateUserDto {
	id: number;
	name?: string;
	email?: string;
	avatar?: string;
	status?: string;
	password?: string;
}