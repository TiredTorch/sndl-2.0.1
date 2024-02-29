import { Injectable } from "@nestjs/common";
import { CreateSongDto } from "./dto/create-song.dto";
import { UpdateSongDto } from "./dto/update-song.dto";

@Injectable()
export class SongsService {
	async create(createSongDto: CreateSongDto) {
		return "This action adds a new song";
	}

	async findAll() {
		return `This action returns all songs`;
	}

	async findOne(id: number) {
		return `This action returns a #${id} song`;
	}

	async update(
		id: number, updateSongDto: UpdateSongDto
	) {
		return `This action updates a #${id} song`;
	}

	async remove(id: number) {
		return `This action removes a #${id} song`;
	}
}
