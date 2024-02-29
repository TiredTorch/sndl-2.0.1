import { Injectable } from "@nestjs/common";
import { CreateAlbumDto } from "./dto/create-album.dto";
import { UpdateAlbumDto } from "./dto/update-album.dto";

@Injectable()
export class AlbumsService {
	async create(createAlbumDto: CreateAlbumDto) {
		return "This action adds a new album";
	}

	async findAll() {
		return `This action returns all albums`;
	}

	async findOne(id: number) {
		return `This action returns a #${id} album`;
	}

	async update(
		id: number, updateAlbumDto: UpdateAlbumDto
	) {
		return `This action updates a #${id} album`;
	}

	async remove(id: number) {
		return `This action removes a #${id} album`;
	}
}
