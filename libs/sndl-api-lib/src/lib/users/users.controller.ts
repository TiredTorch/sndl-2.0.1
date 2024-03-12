import {
	Controller,
	Delete,
	Get,
	HttpCode,
	Patch,
	Post
} from "@nestjs/common";
import {
	ApiBearerAuth,
	ApiTags
} from "@nestjs/swagger";
import { UsersService } from "./users.service";

@ApiBearerAuth("Auth")
@ApiTags("Users")
@Controller("users")
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@HttpCode(201)
	@Patch("me")
	public async editProfile() {
		return await this.usersService.editProfile();
	}

	@Get("all")
	public async getAllUsers() {
		return await this.usersService.getAllUsers();
	}
    
	@Get("friends")
	public async getAllFriends() {
		return await this.usersService.getAllFriends();
	}
    
	@Post("add")
	public async addFriend() {
		return await this.usersService.addFriend();
	}
    
	@Delete("remove")
	public async removeFriend() {
		return await this.usersService.removeFriend();
	}

	@Patch("config")
	public async setConfigProfile() {
		return await this.usersService.setConfigProfile();
	}
}
