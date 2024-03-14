import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post
} from "@nestjs/common";
import {
	AddCommentDto,
	CreatePostDto,
	RemovePostDto,
	SharedPostDto
} from "@shared";
import { Token } from "../utils";
import { PostsService } from "./posts.service";

@Controller("posts")
export class PostsController {
	constructor(private readonly postsService: PostsService) {}

	@Get("all")
	public async getPosts() {
		return await this.postsService.getPosts();
	}

	@Get(":id")
	public async getPost(@Param("id") id: number) {
		return await this.postsService.getPost(id);
	}

	@Post("addComment")
	public async addComment(@Body() addCommentDto: AddCommentDto) {
		return await this.postsService.addComment(addCommentDto);
	}

	@Patch("toggleLike")
	public async toggleLike() {
		return await this.postsService.toggleLike();
	}
    
	@Post("sharePost")
	public async sharePost(
        @Token() token: string,
        @Body() sharedPostDto: SharedPostDto
	) {
		return await this.postsService.sharePost(
			token,
			sharedPostDto
		);
	}
    
	@Post("createPost")
	public async createPost(
        @Token() token: string,
        @Body() createPostDto: CreatePostDto
	) {
		return await this.postsService.createPost(
			token,
			createPostDto
		);
	}
    
	@Delete("removePost")
	public async removePost(
        @Token() token: string,
        @Body() removePostDto: RemovePostDto
	) {
		return await this.postsService.removePost(
			token,
			removePostDto
		);
	}
}
