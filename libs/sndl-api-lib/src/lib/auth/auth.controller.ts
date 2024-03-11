import {
	Body,
	Controller,
	HttpCode,
	Param,
	Post
} from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";
import { Public } from "./guards";

@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@HttpCode(200)
	@Public()
	@Post("register")
	async register(@Body() registerDto: Prisma.UserCreateInput) {
		return this.authService.createUserAndGetToken(registerDto);

	}
    
	@HttpCode(200)
	@Public()
	@Post("login")
	async login(@Body() loginDto: LoginDto) {
		return this.authService.getTokenFromUser(loginDto);
	}

	@HttpCode(201)
	@Public()
	@Post("forgot-password/:email")
	forgotPassword(@Param("email") email: string) {
		return this.authService.sendTokenToResetPassword(email);

	}

	@HttpCode(201)
	@Public()
	@Post("reset-password")
	resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
		return this.authService.resetPasswordWithResetToken(resetPasswordDto);

	}
}
