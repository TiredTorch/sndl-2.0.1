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

	@Get("all")
	public async getPosts() {
		return await this.postsService.getPosts();
	}

	@Get(":id")
	public async getPost() {
		return await this.postsService.getPost();
	}

	@Post("addComment")
	public async addComment() {
		return await this.postsService.addComment();
	}

	@Patch("toggleLike")
	public async toggleLike() {
		return await this.postsService.toggleLike();
	}
    
	@Post("sharePost")
	public async sharePost() {
		return await this.postsService.sharePost();
	}
    
	@Post("createPost")
	public async createPost() {
		return await this.postsService.createPost();
	}
    
	@Delete("removePost")
	public async removePost() {
		return await this.postsService.removePost();
	}
}
