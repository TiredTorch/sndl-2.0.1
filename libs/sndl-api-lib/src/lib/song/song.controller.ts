import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	UseFilters
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AllExceptionFilter } from "../exception";
import { CreateSongDto } from "./dto/create-song.dto";
import { UpdateSongDto } from "./dto/update-song.dto";
import { SongService } from "./song.service";

@ApiTags("Song")
@Controller("song")
@UseFilters(new AllExceptionFilter())
export class SongController {
	constructor(private readonly songService: SongService) {}

	@Post("upload")
	uploadSong(@Body() updateUserDto: CreateSongDto) {
		this.songService.uploadSongFile();
	}

	@Post()
	createSong(@Body() createSongDto: CreateSongDto) {
		this.songService.createSong(createSongDto);
	}

	@Delete(":id")
	deleteSong(@Param("id") id: string) {
		this.songService.deleteSong();
	}

	@Patch(":id")
	async updateSong(
        @Param("id") id: string, 
        @Body() updateUserDto: UpdateSongDto
	) {
		await this.songService.updateSong();
	}

	@Get()
	findSongs() {
		this.songService.findSongs();
	}

	@Get(":id")
	findSong(@Param("id") id: string) {
		this.songService.findSong();
	}
}
