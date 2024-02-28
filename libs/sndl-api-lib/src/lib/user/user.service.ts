import { PrismaService } from "nestjs-prisma";
import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService
  ) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    await this.prismaService.user.create({
      data: createUserDto
    })
  }

  async findAll() {
    const data = await this.prismaService.user.findMany()

    return data
  }

  async findOne(id: Prisma.UserWhereUniqueInput["id"]) {
    const data = await this.prismaService.user.findFirst({
      where: {
        id
      }
    })

    return data;
  }

  async update(
    id: Prisma.UserWhereUniqueInput["id"], 
    data: Prisma.UserUpdateInput
  ) {
    await this.prismaService.user.update({
      data,
      where: {
        id
      }
    })
  }

  async remove(id: Prisma.UserWhereUniqueInput["id"]) {
    return await this.prismaService.user.delete({
      where: {
        id
      }
    })
  }
}
