import {
	Controller,
	Get,
	Post
} from "@nestjs/common";
import { AlbumsService } from "./albums.service";

@Controller("albums")
export class AlbumsController {
	constructor(private readonly albumsService: AlbumsService) {}

	@Get("all")
	public async getAlbums() {
		return await this.albumsService.getAlbums();
	}

	@Get(":id")
	public async getAlbum() {
		return await this.albumsService.getAlbum();
	}

	@Get("saved")
	public async getUserAlbums() {
		return await this.albumsService.getUserAlbums();
	}

	@Post("create")
	public async createAlbum() {
		return await this.albumsService.createAlbum();
	}

	@Post("addSong")
	public async addSongToAlbum() {
		return await this.albumsService.addSongToAlbum();
	}
}
