import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class SongService {
  constructor(
    private readonly prismaService: PrismaService
  ) {}

  public async uploadSong() {
    console.log("a")
  }

  public async deleteSong() {
    console.log("a")
  }

  public async updateSong() {
    console.log("a")
  }

  public async findSongs() {
    console.log("a")
  }

  public async findSong() {
    console.log("a")
  }
}
