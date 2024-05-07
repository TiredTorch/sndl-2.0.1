import {
	Controller,
	Get,
	InternalServerErrorException,
	Query
} from "@nestjs/common";
import { ChatsService } from "./chats.service";

@Controller("chats")
export class ChatsController {
	constructor(private readonly chatsService: ChatsService) {}

	@Get()
	public async getMessages(
        @Query("firstUserId") firstUserId: number,
        @Query("secondUserId") secondUserId: number,
	) {
		try {
			return await this.chatsService.getMessages(
				Number(firstUserId),
				Number(secondUserId)
			);
		} catch (error) {
			console.log(error);
			return new InternalServerErrorException();
		}
		
	}
}
