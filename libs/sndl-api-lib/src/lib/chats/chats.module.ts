import { Module } from "@nestjs/common";
import { ChatsGateway } from "./chat.gateway";
import { ChatsController } from "./chats.controller";
import { ChatsService } from "./chats.service";

@Module({
	controllers: [ChatsController],
	providers: [ChatsService, ChatsGateway],
})
export class ChatsModule {}
