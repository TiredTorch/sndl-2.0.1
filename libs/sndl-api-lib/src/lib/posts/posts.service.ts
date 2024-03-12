import {
	Injectable,
	NotImplementedException
} from "@nestjs/common";

@Injectable()
export class PostsService {
	
	public async getPosts() {
		throw new NotImplementedException();
	}

	public async getPost() {
		throw new NotImplementedException();
        
	}

	public async addComment() {
		throw new NotImplementedException();
        
	}

	public async toggleLike() {
		throw new NotImplementedException();
	}
    
	public async sharePost() {
		throw new NotImplementedException();
        
	}
    
	public async createPost() {
		throw new NotImplementedException();
        
	}
    
	public async removePost() {
		throw new NotImplementedException();
        
	}
}
