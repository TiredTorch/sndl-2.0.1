import {
	Controller,
	Delete,
	Get,
	Patch,
	Post
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { SongService } from "./song.service";

@ApiTags("Song")
@Controller('song')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Post()
  uploadSong() {
    this.songService.uploadSong()
  }

  @Delete(':id')
  deleteSong() {
    this.songService.deleteSong()
  }

  @Patch(':id')
  updateSong() {
    this.songService.updateSong()
  }

  @Get()
  findSongs() {
    this.songService.findSongs()
  }

  @Get(":id")
  findSong() {
    this.songService.findSong()
  }
}
