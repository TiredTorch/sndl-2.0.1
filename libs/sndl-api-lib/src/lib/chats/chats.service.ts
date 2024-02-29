import { Injectable } from "@nestjs/common";
import { CreateChatDto } from "./dto/create-chat.dto";
import { UpdateChatDto } from "./dto/update-chat.dto";

@Injectable()
export class ChatsService {
	async create(createChatDto: CreateChatDto) {
		return "This action adds a new chat";
	}

	async findAll() {
		return `This action returns all chats`;
	}

	async findOne(id: number) {
		return `This action returns a #${id} chat`;
	}

	async update(
		id: number, updateChatDto: UpdateChatDto
	) {
		return `This action updates a #${id} chat`;
	}

	async remove(id: number) {
		return `This action removes a #${id} chat`;
	}
}
