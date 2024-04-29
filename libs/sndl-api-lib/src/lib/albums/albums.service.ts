/* eslint-disable no-mixed-spaces-and-tabs */
import {
	Injectable,
	NotFoundException
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import {
	AddSongToAlbumDto,
	CreateAlbumDto,
	UploadSongToAlbumPreparedDto
} from "@shared";
import { StorageClient } from "@supabase/storage-js";
import { PrismaService } from "../prisma/prisma.service";
import { getUserIdFromToken } from "../utils";

@Injectable()
export class AlbumsService {
    supabaseStorage: StorageClient;

    constructor(
    	private readonly prismaService: PrismaService,
    	private readonly jwtService: JwtService
    ) {
    	this.supabaseStorage = new StorageClient(
    		"https://adsbxalznzhqyedfglws.supabase.co/storage/v1",
    		{
    		    authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkc2J4YWx6bnpocXllZGZnbHdzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTA2MTczOSwiZXhwIjoyMDI0NjM3NzM5fQ.B7H5VF2vLk5UCvVCGaFd6OZgexacEZyuqNMxRkhk42I"
    	    }
    	);
    }
    
    public async getAlbums() {
    	const albums = await this.prismaService.album.findMany();

    	return albums;
    }

    public async getAlbum(id: number) {
    	const album = await this.prismaService.album.findUnique({
    		where: {
    			id
    		}
    	});

    	if (!album) throw new NotFoundException("TXT_ALBUM_NOT_FOUND");

    	return album;
    }

    public async getUserAlbums(token: string) {
    	const userId = await getUserIdFromToken(
    		token,
    		this.jwtService
    	);

    	const user = await this.prismaService.user.findUnique({
    		where: {
    			id: userId
    		},
    		include: {
    			createdAlbums: true,
    			followedAlbums: true
    		}
    	});

    	if (!user) throw new NotFoundException("TXT_USER_NOT_FOUND");

    	const userAlbums = {
    		createdAlbums: user.createdAlbums,
    		followedAlbums: user.followedAlbums
    	};

    	return userAlbums;
    }

    public async createAlbum(
    	token: string, createAlbumDto: CreateAlbumDto
    ) {
    	const userId = await getUserIdFromToken(
    		token,
    		this.jwtService
    	);

    	await this.prismaService.album.create({
    		data: {
    			...createAlbumDto,
    			creatorId: userId
    		}
    	});

    }

    public async addSongToAlbum(addSongToAlbum: AddSongToAlbumDto) {
    	await this.prismaService.album.update({
    		where: {
    			id: addSongToAlbum.albumId
    		},
    		data: {
    			songs: {
    				create: addSongToAlbum.song
    			}
    		}
    	});

    }

    public async uploadSong(uploadSongToAlbumDto: UploadSongToAlbumPreparedDto) {
    	if (uploadSongToAlbumDto.imageBuffer) {
    		console.log(
    			"uploadSongToAlbumDto.imageBuffer",
    			uploadSongToAlbumDto.imageBuffer
    		);

    		// const {
    		// 	data,
    		// 	error
    		// } = await this.supabaseStorage.from("images").upload(
    		// 	`avatar/${new Date().toUTCString()}-${uploadSongToAlbumDto.imageBuffer.fieldname}`,
    		// 	"",
    		// 	{
    		// 		upsert: true
    		// 	}
    		// );

    		// console.log(
    		// 	"data",
    		// 	data
    		// );

    		// console.log(
    		// 	"error",
    		// 	error
    		// );
    	}

    	return {a: 1};
    }
}
