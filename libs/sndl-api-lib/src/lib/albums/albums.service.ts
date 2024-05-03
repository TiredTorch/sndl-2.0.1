
/* eslint-disable no-mixed-spaces-and-tabs */
import {
	Injectable,
	InternalServerErrorException,
	NotFoundException
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import {
	AddSongToAlbumDto,
	UploadSongToAlbumPreparedDto
} from "@shared";
import { StorageClient } from "@supabase/storage-js";
import { PrismaService } from "../prisma/prisma.service";
import {
	getUserIdFromToken,
	PaginationParams
} from "../utils";

@Injectable()
export class AlbumsService {
    supabaseStorage: StorageClient;

    constructor(
    	private readonly prismaService: PrismaService,
    	private readonly jwtService: JwtService,
    	private readonly configService: ConfigService
    ) {
    	this.supabaseStorage = new StorageClient(
    		configService.getOrThrow("NX_STORAGE_LINK_SUPABASE"),
    		{
    		    authorization: configService.getOrThrow("NX_SUPABASE_AUTH_TOKEN")
    	    }
    	);
    }
    
    public async getSavedAlbums(
    	paginationParams: PaginationParams, token: string
    ) {
    	const offset = (paginationParams.page - 1) * paginationParams.limit;

    	const userId = await getUserIdFromToken(
    		token,
    		this.jwtService
    	); 

    	const total = await this.prismaService.album.count({
    		where: {
    			creatorId: userId
    		}
    	});

    	const albums = await this.prismaService.album.findMany({
    		where: {
    			creatorId: userId
    		},
    		skip: offset,
    		take: paginationParams.limit,
    		select: {
    			id: true,
    			image: true,
    			name: true,
    			pseudoAuthor: true,
    			songs: {
    				select: {
    					name: true,
    					sourse: true
    				}
    			}
    		}
    	});

    	return {
    		pagination: {
    			page: paginationParams.page,
    			pageCount: Math.ceil(total / paginationParams.limit),
    			pageSize: paginationParams.limit,
    			total: total
    		},
    		data: albums
    	};
    }

    public async getNewAlbums(paginationParams: PaginationParams) {
    	const offset = (paginationParams.page - 1) * paginationParams.limit;

    	const total = await this.prismaService.album.count();

    	const albums = await this.prismaService.album.findMany({
    		orderBy: {
    			created_at: "asc"
    		},
    		skip: offset,
    		take: paginationParams.limit,
    		select: {
    			id: true,
    			image: true,
    			name: true,
    			pseudoAuthor: true,
    			songs: {
    				select: {
    					name: true,
    					sourse: true
    				}
    			}
    		}
    	});

    	return {
    		pagination: {
    			page: paginationParams.page,
    			pageCount: Math.ceil(total / paginationParams.limit),
    			pageSize: paginationParams.limit,
    			total: total
    		},
    		data: albums
    	};
    }
    
    public async getFriendsFeaturedAlbums(
    	paginationParams: PaginationParams, token: string
    ) {
    	const offset = (paginationParams.page - 1) * paginationParams.limit;

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

    	const total = await this.prismaService.album.count({
    		where: {
    			creatorId: {
    				in: user?.friendUsers.map(item => item.id) ?? []
    			}
    		},
    	});

    	const albums = await this.prismaService.album.findMany({
    		skip: offset,
    		take: paginationParams.limit,
    		where: {
    			creatorId: {
    				in: user?.friendUsers.map(item => item.id) ?? []
    			}
    		},
    		select: {
    			id: true,
    			image: true,
    			name: true,
    			pseudoAuthor: true,
    			songs: {
    				select: {
    					name: true,
    					sourse: true
    				}
    			}
    		}
    	});

    	return {
    		pagination: {
    			page: paginationParams.page,
    			pageCount: Math.ceil(total / paginationParams.limit),
    			pageSize: paginationParams.limit,
    			total: total
    		},
    		data: albums
    	};
    }
    
    public async uploadSong(
    	token: string, uploadSongToAlbumDto: UploadSongToAlbumPreparedDto
    ) {
    	let image: string | undefined = "";

    	const userId = await getUserIdFromToken(
    		token,
    		this.jwtService
    	); 

    	const {
    		data,
    		error
    	} = await this.supabaseStorage.from("songs").upload(
    		`${new Date().toString().split(" ").join("")}-${uploadSongToAlbumDto.songBuffer.fieldname}`,
    		uploadSongToAlbumDto.songBuffer.buffer,
    		{
    			upsert: true,
    			contentType: uploadSongToAlbumDto.songBuffer.mimetype
    		}
    	);

    	if (error) throw new InternalServerErrorException(error);

    	if (uploadSongToAlbumDto.imageBuffer) {

    		const {
    			data: imageBufferData,
    			error: imageBufferError
    		} = await this.supabaseStorage.from("images").upload(
    			`albumImages/${new Date().toString().split(" ").join("")}-${uploadSongToAlbumDto.imageBuffer.fieldname}`,
    			uploadSongToAlbumDto.imageBuffer.buffer,
    			{
    				upsert: true,
    				contentType: uploadSongToAlbumDto.imageBuffer.mimetype
    			}
    		);

    		image = imageBufferData?.path;

    		if (imageBufferError) throw new InternalServerErrorException(imageBufferError);
    	}

    	await this.prismaService.song.create({
    		data: {
    			name: uploadSongToAlbumDto.data.songName,
    			sourse: `${this.configService.getOrThrow("NX_STORAGE_LINK_SUPABASE")}/object/public/songs/${data.path}`,
    			album: {
    				connectOrCreate: {
    					where: {
    						name: uploadSongToAlbumDto.data.albumName
    					},
    					create: {
    						image: image ? `${this.configService.getOrThrow("NX_STORAGE_LINK_SUPABASE")}/object/public/images/${image}` : "",
    						pseudoAuthor: uploadSongToAlbumDto.data.author,
    						name: uploadSongToAlbumDto.data.albumName,
    						creator: {
    							connect: {
    								id: userId
    							}
    						}
    					}
    				}
    			}
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
