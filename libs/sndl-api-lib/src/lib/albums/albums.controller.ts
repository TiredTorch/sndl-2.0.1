import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post
} from "@nestjs/common";
import { AlbumsService } from "./albums.service";
import { CreateAlbumDto } from "./dto/create-album.dto";
import { UpdateAlbumDto } from "./dto/update-album.dto";

@Controller("albums")
export class AlbumsController {
	constructor(private readonly albumsService: AlbumsService) {}

	@Post()
	async create(@Body() createAlbumDto: CreateAlbumDto) {
		return this.albumsService.create(createAlbumDto);
	}

	@Get()
	async findAll() {
		return this.albumsService.findAll();
	}

	@Get(":id")
	async findOne(@Param("id") id: string) {
		return this.albumsService.findOne(+id);
	}

	@Patch(":id")
	async update(
@Param("id") id: string, @Body() updateAlbumDto: UpdateAlbumDto
	) {
		return this.albumsService.update(
			+id,
			updateAlbumDto
		);
	}

	@Delete(":id")
	async remove(@Param("id") id: string) {
		return this.albumsService.remove(+id);
	}
}
