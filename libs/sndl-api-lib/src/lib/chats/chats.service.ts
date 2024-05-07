import { Injectable } from "@nestjs/common";
import { MessagePayload } from "@shared";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ChatsService {
	constructor(private readonly prismaService: PrismaService) {}

	private async getChatroomFromIds(
		userId1: number, userId2: number
	) {
		const selectConfig = {
			participants: {
				select: {
					id: true
				}
			},
			messages: {
				select: {
					content: true,
					senderId: true
				}
			},
			id: true
		};

		let chatroom = await this.prismaService.chatRoom.findFirst({
			where: {
				AND: [
					{
						participants: {
							some: {
								id: userId1
							}
						}
					},
					{
						participants: {
							some: {
								id: userId2
							}
						}
					}
				]
			},
			select: selectConfig
		});

		if (!chatroom) {
			chatroom = await this.prismaService.chatRoom.create({
				data: {
					participants: {
						connect: [
							{
								id: userId1
							},
							{
								id: userId2
							}
						]
					}
				},
				select: selectConfig
			});
		}

		return chatroom;
	}

	public async getMessages(
		firstUserId: number, secondUserId: number
	) {
		const chatRoom = await this.getChatroomFromIds(
			firstUserId,
			secondUserId
		);

		return chatRoom;
	}
    
	public async sendMessage(payload: MessagePayload) {
		const chatRoom = await this.getChatroomFromIds(
			payload.recepientId,
			payload.senderId
		);
        
		await this.prismaService.message.create({
			data: {
				content: payload.content,
				sender: {
					connect: {
						id: payload.senderId
					}
				},
				chatRoom: {
					connect: {
						id: chatRoom.id
					}
				}
			}
		});

		return await this.getChatroomFromIds(
			payload.recepientId,
			payload.senderId
		);
	}
}
