import {
	ForbiddenException,
	Injectable
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateSongDto } from "./dto/create-song.dto";

@Injectable()
export class SongService {
	constructor(private readonly prismaService: PrismaService) {}

	public async uploadSongFile() {
		console.log("a");
	}

	public async createSong(createSongDto: CreateSongDto) {
		this.prismaService.song.create({
			data: {
				...createSongDto,
				album: {
					connect: {
						id: createSongDto.albumConnectId
					}
				}
			}
		});
	}

	public async deleteSong() {
		console.log("a");
	}

	public async updateSong() {
		throw new ForbiddenException("mess");
	}

	public async findSongs() {
		console.log("a");
	}

	public async findSong() {
		console.log("a");
	}
}
