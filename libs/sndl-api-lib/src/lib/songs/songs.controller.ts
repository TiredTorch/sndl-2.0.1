import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post
} from "@nestjs/common";
import { CreateSongDto } from "./dto/create-song.dto";
import { UpdateSongDto } from "./dto/update-song.dto";
import { SongsService } from "./songs.service";

@Controller("songs")
export class SongsController {
	constructor(private readonly songsService: SongsService) {}

	@Post()
	async create(@Body() createSongDto: CreateSongDto) {
		return this.songsService.create(createSongDto);
	}

	@Get()
	async findAll() {
		return this.songsService.findAll();
	}

	@Get(":id")
	async findOne(@Param("id") id: string) {
		return this.songsService.findOne(+id);
	}

	@Patch(":id")
	async update(
@Param("id") id: string, @Body() updateSongDto: UpdateSongDto
	) {
		return this.songsService.update(
			+id,
			updateSongDto
		);
	}

	@Delete(":id")
	async remove(@Param("id") id: string) {
		return this.songsService.remove(+id);
	}
}
