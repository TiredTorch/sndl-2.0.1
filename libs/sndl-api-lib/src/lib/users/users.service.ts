import {
	Injectable,
	NotFoundException,
	NotImplementedException
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";

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
	public async editProfile() {
		throw new NotImplementedException();
	}

	public async getAllUsers() {
		throw new NotImplementedException();

	}
    
	public async getAllFriends() {
		throw new NotImplementedException();
        
	}
    
	public async addFriend() {
		throw new NotImplementedException();
        
	}
    
	public async removeFriend() {
		throw new NotImplementedException();
        
	}

	public async setConfigProfile() {
		throw new NotImplementedException();
	}
}
