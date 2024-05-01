import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Patch,
	Post
} from "@nestjs/common";
import {
	AddFriendDto,
	EditProfileDto,
	RemoveFriendDto
} from "@shared";
import { Token } from "../utils";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@HttpCode(201)
	@Patch("me")
	public async editProfile(
        @Token() token: string,
        @Body() editProfileDto: EditProfileDto
	) {
		return await this.usersService.editProfile(
			token,
			editProfileDto
		);
	}

	@Get("all")
	public async getAllUsers() {
		return await this.usersService.getAllUsers();
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
