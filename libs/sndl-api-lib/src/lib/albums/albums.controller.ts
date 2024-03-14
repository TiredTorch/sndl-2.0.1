import {
	Body,
	Controller,
	Get,
	HttpCode,
	Param,
	Post
} from "@nestjs/common";
import {
	AddSongToAlbum,
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
	public async addSongToAlbum(addSongToAlbum: AddSongToAlbum) {
		return await this.albumsService.addSongToAlbum(addSongToAlbum);
	}
}
