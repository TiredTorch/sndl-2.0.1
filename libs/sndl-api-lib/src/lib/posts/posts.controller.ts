import {
	Controller,
	Delete,
	Get,
	Patch,
	Post
} from "@nestjs/common";
import { PostsService } from "./posts.service";

@Controller("posts")
export class PostsController {
	constructor(private readonly postsService: PostsService) {}

	@Get()
	public async getPosts() {
		return await this.postsService.getPosts();
	}

	@Get()
	public async getPost() {
		return await this.postsService.getPost();
	}

	@Post()
	public async addComment() {
		return await this.postsService.addComment();
	}

	@Patch()
	public async toggleLike() {
		return await this.postsService.toggleLike();
	}
    
	@Post()
	public async sharePost() {
		return await this.postsService.sharePost();
	}
    
	@Post()
	public async createPost() {
		return await this.postsService.createPost();
	}
    
	@Delete()
	public async removePost() {
		return await this.postsService.removePost();
	}
}
