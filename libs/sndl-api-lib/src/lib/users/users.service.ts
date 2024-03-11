import {
	ForbiddenException,
	Injectable,
	NotFoundException
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly jwtService: JwtService
	) {}

	public async getUserByEmail(email: string) {
		const user = await this.prismaService.user.findFirst({
			where: {
				email
			}
		});

		if (!user) throw new NotFoundException("TXT_USER_NOT_FOUND");

		return user;
	}

	public async getUserById(id: number) {
		const user = await this.prismaService.user.findFirst({ 
			where: { id }
		});

		if (!user) throw new NotFoundException("TXT_USER_NOT_FOUND");

		return user;
	}

	public async createUser(createUserDto: CreateUserDto) {
		const response = await this.prismaService.user.create({
			data: createUserDto
		});

		return response;
	}

	public async getAllUsers() {
		const response = await this.prismaService.user.findMany();

		return response ?? [];
	}

	public async changePassword(
		userId: number, newPassword: string
	) {
		const user = await this.prismaService.user.update({
			where: {
				id: userId
			},
			data: {
				password: newPassword
			}
		});
		
		if (!user) throw new NotFoundException("TXT_USER_NOT_FOUND");

		return user;
	}

	public async changeUserData(updateUserDto: UpdateUserDto) {
		const user = await this.prismaService.user.update({
			where: {
				id: updateUserDto.id
			},
			data: updateUserDto
		});

		if (!user) throw new NotFoundException("TXT_USER_NOT_FOUND");
		
	}

	public async changePersonalUserData(
		token: string, updateUserDto: UpdateUserDto
	) {
		try {
			const { userId } = await this.jwtService.verifyAsync(token);

			await this.changeUserData({
				...updateUserDto,
				id: userId
			});
		} catch (error) {
			throw new ForbiddenException(error);
		}

	}
}
