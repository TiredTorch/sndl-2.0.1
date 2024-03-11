import {
	Body,
	Controller,
	Get,
	HttpCode,
	Param,
	Patch
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

	@HttpCode(200)
	@Get("/all")
	getAllUsers () {
		try {
			return this.usersService.getAllUsers();
		} catch (error) {
			return error;
		}
	}

	@HttpCode(200)
	@Get(":id")
	async findOneUserById(@Param("id") id: number) {
		return this.usersService.getUserById(id);
	}

	@HttpCode(201)
	@Patch()
	editProfile(@Body() updateUserDto: UpdateUserDto) {
		return this.usersService.changeUserData(updateUserDto);
	}

	@HttpCode(201)
	@Patch("me")
	editMe(
        @Body() userDto: UpdateUserDto,
		@Token() token: string
	) {
		return this.usersService.changePersonalUserData(
			token,
			userDto
		);
	}
}
