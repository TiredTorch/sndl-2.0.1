
import {
	AnyFilesInterceptor,
	MemoryStorageFile,
	UploadedFiles
} from "@blazity/nest-file-fastify";
import {
	Controller,
	Get,
	HttpCode,
	Param,
	Post,
	Query,
	UseInterceptors
} from "@nestjs/common";
import { AddSongToAlbumDto } from "@shared";
import { Pagination } from "../pagination";
import {
	PaginationParams,
	Token
} from "../utils";
import { AlbumsService } from "./albums.service";

@Controller("albums")
export class AlbumsController {
	constructor(private readonly albumsService: AlbumsService) {}

	@HttpCode(200)
	@Get("all/saved")
	public async getSavedAlbums(
        @Token() token: string,
        @Pagination() paginationParams: PaginationParams
	) {
		return await this.albumsService.getSavedAlbums(
			paginationParams,
			token
		);
	}

	@HttpCode(200)
	@Get("all/new")
	public async getNewAlbums(@Pagination() paginationParams: PaginationParams) {
		return await this.albumsService.getNewAlbums(paginationParams);
	}

	@HttpCode(200)
	@Get("all/friendsFeatured")
	public async getFriendsFeaturedAlbums(
        @Pagination() paginationParams: PaginationParams,
        @Token() token: string
	) {
		return await this.albumsService.getFriendsFeaturedAlbums(
			paginationParams,
			token
		);
	}

	@Post("uploadSong")
	@UseInterceptors(AnyFilesInterceptor())
	public async uploadSong(
        @Token() token: string, 
        @UploadedFiles() files: MemoryStorageFile[],
        @Query("albumName") albumName: string,
        @Query("author") author: string,
        @Query("songName") songName: string
	) {

		return await this.albumsService.uploadSong(
			token,
			{
				data: {
					albumName: albumName,
					author: author,
					songName: songName
				},
				songBuffer: files[0],
				imageBuffer: files?.[1]
			}
		);
	}

	@Post("addSongToAlbum")
	public async addSongToAlbum(addSongToAlbum: AddSongToAlbumDto) {
		return await this.albumsService.addSongToAlbum(addSongToAlbum);
	}

	@HttpCode(200)
	@Get(":id")
	public async getAlbum(@Param("id") id: number) {
		return await this.albumsService.getAlbum(id);
	}

}
