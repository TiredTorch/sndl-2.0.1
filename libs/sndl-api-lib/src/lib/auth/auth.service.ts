import {
	compare as bcryptCompare,
	hash as bcryptHash
} from "bcrypt";
import {
	BadRequestException,
	Injectable,
	NotFoundException,
	NotImplementedException
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Prisma } from "@prisma/client";
import { UsersService } from "../users/users.service";
import { createTokenPayload } from "../utils";
import { LoginDto } from "./dto/login.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UsersService,
		private readonly jwtService: JwtService,
		private readonly configService: ConfigService,
	) {}

	private async getUserByEmailAndCheckWithPassword(
		email: string, 
		hashedPassword: string
	) {
		const user = await this.userService.getUserByEmail(email);

		if (!user) throw new NotFoundException("TXT_NOT_FOUND_USER");

		const isPasswordMatching = await bcryptCompare(
			hashedPassword,
			user.password
		);

		if (!isPasswordMatching) 
			throw new BadRequestException("TXT_PASSWORD_NOT_MATCH");

		return {
			id: user.id,
			email: user.email,
			username: user.name,
		};
	}

	public async createUserAndGetToken(registerDto: Prisma.UserCreateInput) {
		const hashedPassword = await bcryptHash(
			registerDto.password,
			10
		);

		const createdUser = await this.userService.createUser({
			...registerDto,
			password: hashedPassword
		});
		
		const token = this.jwtService.sign(createTokenPayload(createdUser.id,));

		return { token };
	}

	public async getTokenFromUser(user: LoginDto) {
		const data = await this.getUserByEmailAndCheckWithPassword(
			user.email, 
			user.password
		);

		const token = this.jwtService.sign(createTokenPayload(data.id));
            
		return { token };
	}

	public async sendTokenToResetPassword(email: string) {
		throw new NotImplementedException();
		// const user = await this.userService.getUserByEmail(email);

		// if (!user) 
		// 	throw new NotFoundException("TXT_NOT_FOUND_USER");

		// const token = this.jwtService.sign(
		// 	createTokenPayload(user.id),
		// 	{
		// 		secret: this.configService.get("NX_JWT_FORGOT_PASS_SECRET"),
		// 		expiresIn: "1h"
		// 	}
		// );

		// try {
		// 	this.mailerService.sendMail({
		// 		from: "test@test.com",
		// 		to: email,
		// 		subject: "Password",
		// 		text: `Token: ${token}`
		// 	});

		// } catch (error) {
		// 	throw new InternalServerErrorException("TXT_MAILER_ERROR");
		// } 
	}

	public async resetPasswordWithResetToken(resetPasswordDto: ResetPasswordDto) {
		try { 
			const { userId } = this.jwtService.verify(
				resetPasswordDto.token,
				{
					secret: this.configService.get("NX_JWT_FORGOT_PASS_SECRET")
				}
			);

			const isPasswordsEqual = resetPasswordDto.password === resetPasswordDto.confirmPassword;

			if (!isPasswordsEqual) throw new BadRequestException("TXT_PASSWORD_NOT_MATCH");
			
			const hashedPassword = await bcryptHash(
				resetPasswordDto.password,
				10
			);

			const user = await this.userService.changePassword(
				userId,
				hashedPassword
			);
			
			const tokenPayload = createTokenPayload(user.id);

			const token = this.jwtService.sign(tokenPayload);

			return { token };
		} catch (error) {
			throw new BadRequestException(error);
		}

	}
}
