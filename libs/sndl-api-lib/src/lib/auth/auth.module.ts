import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "../jwt";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
	imports: [
		PassportModule
	],
	controllers: [AuthController],
	providers: [
		AuthService,
		JwtStrategy
	],
})
export class AuthModule {}
