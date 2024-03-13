import {
	Body,
	Controller,
	HttpCode,
	Param,
	Post
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import {
	ForgotPasswordDto,
	LoginDto,
	RegisterDto,
	ResetPasswordDto
} from "@shared";
import { AuthService } from "./auth.service";
import { Public } from "./guards";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@HttpCode(201)
	@Public()
	@Post("register")
	async register(@Body() registerDto: RegisterDto) {
		return this.authService.createUserAndGetToken(registerDto);
	}
    
	@HttpCode(202)
	@Public()
	@Post("login")
	async login(@Body() loginDto: LoginDto) {
		return this.authService.getTokenFromUser(loginDto);
	}

	@HttpCode(202)
	@Public()
	@Post("forgot-password/:email")
	forgotPassword(@Param() params: ForgotPasswordDto) {
		return this.authService.sendTokenToResetPassword(params.email);

	}

	@HttpCode(202)
	@Public()
	@Post("reset-password")
	resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
		return this.authService.resetPasswordWithResetToken(resetPasswordDto);

	}
}
