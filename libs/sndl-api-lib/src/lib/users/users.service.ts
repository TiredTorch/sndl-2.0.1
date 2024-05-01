import {
	Injectable,
	NotFoundException,
	NotImplementedException
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import {
	AddFriendDto,
	CreateUserDto,
	EditProfileDto,
	RemoveFriendDto
} from "@shared";
import { PrismaService } from "../prisma/prisma.service";
import { getUserIdFromToken } from "../utils";

@Injectable()
export class UsersService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly jwtService: JwtService
	) {}

    //auth
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

    //users
	public async editProfile(
		token: string, editProfileDto: EditProfileDto
	) {
		const userId = await getUserIdFromToken(
			token,
			this.jwtService
		);

		await this.prismaService.user.update({
			where: {
				id: userId
			},
			data: editProfileDto
		});
	}

	public async getAllUsers() {
		const users = await this.prismaService.user.findMany({
			select: {
				avatar: true,
				id: true,
				name: true
			}
		});

		return users;
	}
    
	public async getAllFriends(token: string) {
		const userId = await getUserIdFromToken(
			token,
			this.jwtService
		);

		const user = await this.prismaService.user.findUnique({
			where: {
				id: userId
			},
			include: {
				friendUsers: true
			}
		});
        
		if (!user) throw new NotFoundException("TXT_USER_NOT_FOUND");

		return user.friendUsers;
	}
    
	public async addFriend(
		token: string, addFriendDto: AddFriendDto
	) {
		const userId = await getUserIdFromToken(
			token,
			this.jwtService
		);

		await this.prismaService.user.update({
			where: {
				id: userId
			},
			data:{
				friendUsers: {
					connect: {
						id: addFriendDto.friendId
					}
				}
			}
		});
        
	}
    
	public async removeFriend(
		token: string, removeFriendDto: RemoveFriendDto
	) {
		const userId = await getUserIdFromToken(
			token,
			this.jwtService
		);

		await this.prismaService.user.update({
			where: {
				id: userId
			},
			data:{
				friendUsers: {
					disconnect: {
						id: removeFriendDto.friendId
					}
				}
			}
		});
        
	}

	public async setConfigProfile(token: string) {
		throw new NotImplementedException();
	}
}
