import { Module } from "@nestjs/common";
import {
	ConfigModule,
	ConfigService
} from "@nestjs/config";
import {
	APP_FILTER,
	APP_GUARD
} from "@nestjs/core";
import { JwtModule } from "@nestjs/jwt";
import { AlbumsModule } from "./albums/albums.module";
import { AuthModule } from "./auth/auth.module";
import { JwtAuthGuard } from "./auth/guards";
import { ChatsModule } from "./chats/chats.module";
import {
	configConfig,
	jwtConfig
} from "./config";
import { AllExceptionFilter } from "./exception";
import { PostsModule } from "./posts/posts.module";
import { PrismaModule } from "./prisma/prisma.module";
import { UsersModule } from "./users/users.module";

@Module({
	imports: [
		ConfigModule.forRoot(configConfig),
		JwtModule.registerAsync(jwtConfig),
		{
			global: true,
			module: PrismaModule
		},
		AuthModule,
		AlbumsModule,
		PostsModule,
		UsersModule,
		ChatsModule,
	],
	providers: [
		ConfigService,
		{
			provide: APP_FILTER,
			useClass: AllExceptionFilter
		},
		{
			provide: APP_GUARD,
			useClass: JwtAuthGuard
		},
	]
})
export class SndlApiLibModule {}
