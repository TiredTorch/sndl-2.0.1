import {
	Injectable,
	NotFoundException
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import {
	AddSongToAlbum,
	CreateAlbumDto
} from "@shared";
import { PrismaService } from "../prisma/prisma.service";
import { getUserIdFromToken } from "../utils";

@Injectable()
export class AlbumsService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly jwtService: JwtService
	) {}

	public async getAlbums() {
		const albums = await this.prismaService.album.findMany();

		return albums;
	}

	public async getAlbum(id: number) {
		const album = await this.prismaService.album.findUnique({
			where: {
				id
			}
		});

		if (!album) throw new NotFoundException("TXT_ALBUM_NOT_FOUND");

		return album;
	}

	public async getUserAlbums(token: string) {
		const userId = await getUserIdFromToken(
			token,
			this.jwtService
		);

		const user = await this.prismaService.user.findUnique({
			where: {
				id: userId
			},
			include: {
				createdAlbums: true,
				followedAlbums: true
			}
		});

		if (!user) throw new NotFoundException("TXT_USER_NOT_FOUND");

		const userAlbums = {
			createdAlbums: user.createdAlbums,
			followedAlbums: user.followedAlbums
		};

		return userAlbums;
	}

	public async createAlbum(createAlbumDto: CreateAlbumDto) {
		await this.prismaService.album.create({
			data: createAlbumDto
		});

	}

	public async addSongToAlbum(addSongToAlbum: AddSongToAlbum) {
		await this.prismaService.album.update({
			where: {
				id: addSongToAlbum.albumId
			},
			data: {
				songs: {
					create: addSongToAlbum.song
				}
			}
		});

	}
}
