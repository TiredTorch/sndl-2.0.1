
/* eslint-disable no-mixed-spaces-and-tabs */
import {
	Injectable,
	NotFoundException
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import {
	AddSongToAlbumDto,
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
    
    public async getSavedAlbums(token: string) {
    	const userId = await getUserIdFromToken(
    		token,
    		this.jwtService
    	); 

    	const user = await this.prismaService.user.findUnique({
    		where: {
    			id: userId
    		},
    		select: {
    			createdAlbums: true
    		}
    	});

    	return user?.createdAlbums ?? [];
    }

    public async getNewAlbums() {
    	const albums = await this.prismaService.album.findMany();

    	return albums ?? [];
    }
    
    public async getFriendsFeaturedAlbums(token: string) {
    	const userId = await getUserIdFromToken(
    		token,
    		this.jwtService
    	); 

    	const user = await this.prismaService.user.findUnique({
    		where: {
    			id: userId
    		},
    		select: {
    			friendUsers: true
    		}
    	});

    	const albums = await this.prismaService.album.findMany({
    		where: {
    			creatorId: {
    				in: user?.friendUsers.map(item => item.id) ?? []
    			}
    		},
    		select: {
    			songs: true,
    			id: true,
    			image: true,
    			name: true
    		}
    	});

    	return albums ?? [];
    }
    
    public async uploadSong(uploadSongToAlbumDto: UploadSongToAlbumPreparedDto) {
    	const {
    		data,
    		error
    	} = await this.supabaseStorage.from("songs").upload(
    		`${new Date().toString()}-${uploadSongToAlbumDto.songBuffer.fieldname}`,
    		uploadSongToAlbumDto.songBuffer.buffer,
    		{
    			upsert: true,
    			contentType: uploadSongToAlbumDto.songBuffer.mimetype
    		}
    	);

    	console.log(
    		"data",
    		data
    	);

    	console.log(
    		"error",
    		error
    	);

    	if (uploadSongToAlbumDto.imageBuffer) {

    		const {
    			data: imageBufferData,
    			error: imageBufferError
    		} = await this.supabaseStorage.from("images").upload(
    			`albumImages/${new Date().toString().trim}-${uploadSongToAlbumDto.imageBuffer.fieldname}`,
    			uploadSongToAlbumDto.imageBuffer.buffer,
    			{
    				upsert: true,
    				contentType: uploadSongToAlbumDto.imageBuffer.mimetype
    			}
    		);

    		console.log(
    			"imageBufferData",
    			imageBufferData
    		);

    		console.log(
    			"imageBufferError",
    			imageBufferError
    		);
    	}

    }

    public async addSongToAlbum(addSongToAlbum: AddSongToAlbumDto) {
    	await this.prismaService.album.update({
    		where: {
    			id: addSongToAlbum.albumId
    		},
    		data: {
    			songs: {
    				connect: {
    					id: addSongToAlbum.songId
    				}
    			}
    		}
    	});

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

}
