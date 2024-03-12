import {
	Injectable,
	NotImplementedException
} from "@nestjs/common";

@Injectable()
export class ChatsService {
	public async getMessages() {
		throw new NotImplementedException();
	}
    
	public async sendMessage() {
		throw new NotImplementedException();
	}
}
