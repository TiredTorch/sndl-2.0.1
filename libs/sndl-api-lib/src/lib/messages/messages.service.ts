import { Injectable } from "@nestjs/common";
import { CreateMessageDto } from "./dto/create-message.dto";
import { UpdateMessageDto } from "./dto/update-message.dto";

@Injectable()
export class MessagesService {
	async create(createMessageDto: CreateMessageDto) {
		return "This action adds a new message";
	}

	async findAll() {
		return `This action returns all messages`;
	}

	async findOne(id: number) {
		return `This action returns a #${id} message`;
	}

	async update(
		id: number, updateMessageDto: UpdateMessageDto
	) {
		return `This action updates a #${id} message`;
	}

	async remove(id: number) {
		return `This action removes a #${id} message`;
	}
}
