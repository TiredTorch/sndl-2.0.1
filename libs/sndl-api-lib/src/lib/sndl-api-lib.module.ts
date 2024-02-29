import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { AlbumsModule } from "./albums/albums.module";
import { AuthModule } from "./auth/auth.module";
import { ChatsModule } from "./chats/chats.module";
import { CommentsModule } from "./comments/comments.module";
import { AllExceptionFilter } from "./exception";
import { MessagesModule } from "./messages/messages.module";
import { PostsModule } from "./posts/posts.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SongsModule } from "./songs/songs.module";
import { UsersModule } from "./users/users.module";

@Module({
	imports: [
		{
			global: true,
			module: PrismaModule
		},
		AuthModule,
		PostsModule,
		CommentsModule,
		UsersModule,
		ChatsModule,
		MessagesModule,
		SongsModule,
		AlbumsModule
	],
	providers: [
		{
			provide: APP_FILTER,
			useClass: AllExceptionFilter
		}
	]
})
export class SndlApiLibModule {}
