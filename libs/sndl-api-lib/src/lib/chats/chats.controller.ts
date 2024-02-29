import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post
} from "@nestjs/common";
import { ChatsService } from "./chats.service";
import { CreateChatDto } from "./dto/create-chat.dto";
import { UpdateChatDto } from "./dto/update-chat.dto";

@Controller("chats")
export class ChatsController {
	constructor(private readonly chatsService: ChatsService) {}

	@Post()
	async create(@Body() createChatDto: CreateChatDto) {
		return this.chatsService.create(createChatDto);
	}

	@Get()
	async findAll() {
		return this.chatsService.findAll();
	}

	@Get(":id")
	async findOne(@Param("id") id: string) {
		return this.chatsService.findOne(+id);
	}

	@Patch(":id")
	async update(
@Param("id") id: string, @Body() updateChatDto: UpdateChatDto
	) {
		return this.chatsService.update(
			+id,
			updateChatDto
		);
	}

	@Delete(":id")
	async remove(@Param("id") id: string) {
		return this.chatsService.remove(+id);
	}
}
