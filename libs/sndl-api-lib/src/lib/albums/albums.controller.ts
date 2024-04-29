
import {
	AnyFilesInterceptor,
	StorageFile,
	UploadedFiles
} from "@blazity/nest-file-fastify";
import {
	Body,
	Controller,
	Get,
	HttpCode,
	Param,
	Post,
	UseInterceptors
} from "@nestjs/common";
import {
	AddSongToAlbumDto,
	CreateAlbumDto
} from "@shared";
import { Token } from "../utils";
import { AlbumsService } from "./albums.service";

@Controller("albums")
export class AlbumsController {
	constructor(private readonly albumsService: AlbumsService) {}

	@HttpCode(200)
	@Get("all")
	public async getAlbums() {
		return await this.albumsService.getAlbums();
	}

	@HttpCode(200)
	@Get(":id")
	public async getAlbum(@Param("id") id: number) {
		return await this.albumsService.getAlbum(id);
	}

	@Get("saved")
	public async getUserAlbums(@Token() token: string) {
		return await this.albumsService.getUserAlbums(token);
	}

	@Post("create")
	public async createAlbum(
        @Token() token: string,
        @Body() createAlbumDto: CreateAlbumDto
	) {
		return await this.albumsService.createAlbum(
			token,
			createAlbumDto
		);
	}

	@Post("addSong")
	public async addSongToAlbum(addSongToAlbum: AddSongToAlbumDto) {
		return await this.albumsService.addSongToAlbum(addSongToAlbum);
	}

	@Post("uploadSong")
	@UseInterceptors(AnyFilesInterceptor())
	public async uploadSong(@UploadedFiles() files: StorageFile[]) {

		console.log(
			"files",
			files
		);

		return await this.albumsService.uploadSong({
			data: {
				albumName: "1",
				author: "2",
				songName: "3"
			},
			songBuffer: files[0],
			imageBuffer: files?.[1]
		});
	}
}
