import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateSongDto } from "./dto/create-song.dto";
import { UpdateSongDto } from "./dto/update-song.dto";
import { SongService } from "./song.service";

@ApiTags("Song")
@Controller("song")
export class SongController {
	constructor(private readonly songService: SongService) {}

	@Post("upload")
	uploadSong() {
		this.songService.uploadSongFile();
	}

	@Post()
	createSong(@Body() createSongDto: CreateSongDto) {
		this.songService.createSong(createSongDto);
	}

	@Delete(":id")
	deleteSong() {
		this.songService.deleteSong();
	}

	@Patch(":id")
	updateSong(
        @Param("id") id: string, 
        @Body() updateUserDto: UpdateSongDto
	) {
		this.songService.updateSong();
	}

	@Get()
	findSongs() {
		this.songService.findSongs();
	}

	@Get(":id")
	findSong() {
		this.songService.findSong();
	}
}
