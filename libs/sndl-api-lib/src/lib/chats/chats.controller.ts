import {
	Controller,
	Get,
	Post
} from "@nestjs/common";
import { ChatsService } from "./chats.service";

@Controller("chats")
export class ChatsController {
	constructor(private readonly chatsService: ChatsService) {}

	@Get()
	public async getMessages() {
		return await this.chatsService.getMessages();
	}
    
	@Post()
	public async sendMessage() {
		return await this.chatsService.sendMessage();
	}
}
