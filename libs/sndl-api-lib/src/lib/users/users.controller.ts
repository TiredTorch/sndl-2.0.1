import {
	AnyFilesInterceptor,
	MemoryStorageFile,
	UploadedFiles
} from "@blazity/nest-file-fastify";
import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Patch,
	Post,
	Query,
	UseInterceptors
} from "@nestjs/common";
import {
	AddFriendDto,
	RemoveFriendDto
} from "@shared";
import { Token } from "../utils";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@HttpCode(201)
	@UseInterceptors(AnyFilesInterceptor())
	@Patch("me")
	public async editProfile(
        @Token() token: string,
        @Query("status") status: string,
        @Query("userName") userName: string,
        @UploadedFiles() files: MemoryStorageFile[],
	) {
		return await this.usersService.editProfile(
			token,
			{
				avatar: files?.[0],
				name: userName,
				status: status
			}
		);
	}

	@Get("all")
	public async getAllUsers(@Token() token: string) {
		return await this.usersService.getAllUsers(token);
	}

	@Get(":id")
	public async getOneUser(@Param("id") id: number) {
		return await this.usersService.getOneUser(id);
	}
    
	@Get("friends")
	public async getAllFriends(@Token() token: string) {
		return await this.usersService.getAllFriends(token);
	}
    
	@Post("add")
	public async addFriend(
        @Token() token: string,
        @Body() addFriendDto: AddFriendDto
	) {
		return await this.usersService.addFriend(
			token,
			addFriendDto
		);
	}
    
	@Delete("remove")
	public async removeFriend(
        @Token() token: string,
        @Body() removeFriendDto: RemoveFriendDto
	) {
		return await this.usersService.removeFriend(
			token,
			removeFriendDto
		);
	}

	@Patch("config")
	public async setConfigProfile(@Token() token: string) {
		return await this.usersService.setConfigProfile(token);
	}
}
