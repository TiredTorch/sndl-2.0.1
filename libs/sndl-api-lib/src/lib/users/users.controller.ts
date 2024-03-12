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
	ApiBearerAuth,
	ApiTags
} from "@nestjs/swagger";
import { Token } from "../utils";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./users.service";

@ApiBearerAuth("Auth")
@ApiTags("Users")
@Controller("users")
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@HttpCode(201)
	@Patch("me")
	public async editProfile(
        @Body() userDto: UpdateUserDto,
		@Token() token: string
	) {
		return await this.usersService.editProfile();
	}

	@Get()
	public async getAllUsers() {
		return await this.usersService.getAllUsers();

	}
    
	@Get()
	public async getAllFriends() {
		return await this.usersService.getAllFriends();
        
	}
    
	@Post()
	public async addFriend() {
		return await this.usersService.addFriend();
        
	}
    
	@Delete()
	public async removeFriend() {
		return await this.usersService.removeFriend();
        
	}

	@Patch()
	public async setConfigProfile() {
		return await this.usersService.setConfigProfile();
        
	}
}
