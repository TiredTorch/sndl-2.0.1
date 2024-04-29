import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
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

	@HttpCode(200)
	@Get("allShared")
	public async getSharedPosts(@Token() token: string) {
		return await this.postsService.getSharedPosts(token);
	}

	@HttpCode(200)
	@Get("all")
	public async getPosts(@Token() token: string) {
		return await this.postsService.getPosts(token);
	}
    
	@HttpCode(202)
	@Post("addComment")
	public async addComment(
        @Token() token: string, 
        @Body() addCommentDto: AddCommentDto
	) {
		return await this.postsService.addComment(
			token,
			addCommentDto
		);
	}

	@HttpCode(200)
	@Get(":id")
	public async getPostById(@Param("id") id: number) {
		return await this.postsService.getPostById(id);
	}
    
	@HttpCode(202)
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
    
	@HttpCode(202)
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
    
	@HttpCode(204)
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
