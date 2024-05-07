import {
	Server,
	Socket
} from "socket.io";
/* eslint-disable no-mixed-spaces-and-tabs */
import {
	OnGatewayConnection,
	OnGatewayDisconnect,
	OnGatewayInit,
	SubscribeMessage,
	WebSocketGateway,
	WebSocketServer
} from "@nestjs/websockets";
import { MessagePayload } from "@shared";
import { ChatsService } from "./chats.service";

@WebSocketGateway({
	path: "/websocket",
	cors: { origin: "*" },
	transports: ["websocket"]
})
export class ChatsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;
    
    constructor(private readonly chatsService: ChatsService) {}

    @SubscribeMessage("sendMessage")
    async sendMessage(
    	client: Socket, payload: MessagePayload
    ) {
    	const chatroom = await this.chatsService.sendMessage(payload);

    	this.server.emit(
    		"reveivingChatroom",
    		chatroom
    	);
    }

    afterInit(server: Server) {
    	console.log(server);
    }
      
    handleDisconnect(client: Socket) {
    	console.log(`Disconnected: ${client.id}`);
    }
      
    handleConnection(
    	client: Socket, ...args: any[]
    ) {
    	console.log(`Connected ${client.id}`);
    }
}