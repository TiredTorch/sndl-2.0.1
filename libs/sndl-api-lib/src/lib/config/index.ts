import {
	ConfigModuleOptions,
	ConfigService
} from "@nestjs/config";
import { JwtModuleAsyncOptions } from "@nestjs/jwt";

// export const mailerConfig: MailerAsyncOptions  = {
// 	useFactory: (configService: ConfigService) => ({
// 		transport: {
// 			secure: false,
// 			host: configService.get("NX_MAILTRAP_HOST"),
// 			port: configService.get("NX_MAILTRAP_PORT"),
// 			auth: {
// 				user: configService.get("NX_MAILTRAP_USER"),
// 				pass: configService.get("NX_MAILTRAP_PASSWORD")
// 			}
// 		}
// 	}),
// 	inject: [ConfigService],
// };

export const configConfig: ConfigModuleOptions = {
	isGlobal: true
};

export const jwtConfig: JwtModuleAsyncOptions = {
	global: true,
	useFactory: async (configService: ConfigService) => ({
		secret: configService.get("NX_JWT_SECRET"),
		signOptions: {
			expiresIn: "7d"
		}
	}),
	inject: [
		ConfigService
	]
};