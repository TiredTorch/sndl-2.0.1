import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { PostModule } from './post/post.module';
import { SongModule } from './song/song.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AuthModule,
    ChatModule,
    PostModule,
    SongModule,
    UserModule
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class SndlApiLibModule {}
