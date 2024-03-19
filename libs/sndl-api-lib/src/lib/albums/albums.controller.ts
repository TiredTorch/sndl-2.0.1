import { FastifyRequest } from "fastify";
import { FilesInterceptor } from "@blazity/nest-file-fastify";
import {
	Body,
	Controller,
	Get,
	HttpCode,
	Param,
	Post,
	Req,
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
	public async createAlbum(@Body() createAlbumDto: CreateAlbumDto) {
		return await this.albumsService.createAlbum(createAlbumDto);
	}

	@Post("addSong")
	public async addSongToAlbum(addSongToAlbum: AddSongToAlbumDto) {
		return await this.albumsService.addSongToAlbum(addSongToAlbum);
	}

	@Post("uploadSong")
	@UseInterceptors(FilesInterceptor("files"))
	public async uploadSong(@Req() req: FastifyRequest) {
		const files = await req.files({limits: {fileSize: 1024*1024*40}, throwFileSizeLimit: false});

		const filesBuffer = [];

		for await (const part of files) {
			console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
			console.log(part);
			filesBuffer.push(part);
		}
		console.log(
			"filesBuffer",
			filesBuffer
		);

		return await this.albumsService.uploadSong({
			data: {
				albumName: "1",
				author: "2",
				songName: "3"
			},
			songBuffer: filesBuffer[0],
			imageBuffer: filesBuffer?.[1]
		});
	}
}
