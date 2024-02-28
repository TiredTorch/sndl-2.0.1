import { Module } from "@nestjs/common";
import { AlbumModule } from "./album/album.module";
import { AuthModule } from "./auth/auth.module";
import { ChatModule } from "./chat/chat.module";
import { MessageModule } from "./message/message.module";
import { PostModule } from "./post/post.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SongModule } from "./song/song.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    {
      global: true,
      module: PrismaModule
    },
    AuthModule,
    ChatModule,
    PostModule,
    SongModule,
    UserModule,
    MessageModule,
    AlbumModule
  ],
})
export class SndlApiLibModule {}
