import {
	Injectable,
	NotFoundException,
	NotImplementedException
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import {
	AddCommentDto,
	CreatePostDto,
	RemovePostDto,
	SharedPostDto
} from "@shared";
import { PrismaService } from "../prisma/prisma.service";
import { getUserIdFromToken } from "../utils";

@Injectable()
export class PostsService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly jwtService: JwtService
	) {}

	public async getPosts() {
		const posts = await this.prismaService.post.findMany();

		return posts;
	}

	public async getPost(id: number) {
		const post = await this.prismaService.post.findUnique({
			where: {
				id
			}
		});

		if (!post) throw new NotFoundException("TXT_POST_NOT_FOUND");

		return post;
	}

	public async addComment(addCommentDto: AddCommentDto) {
		await this.prismaService.post.update({
			where: {
				id: addCommentDto.postId
			},
			data: {
				comments: {
					create: addCommentDto.comment
				}
			}
		});
        
	}

	public async toggleLike() {
		throw new NotImplementedException();
	}
    
	public async sharePost(
		token: string, sharedPostDto: SharedPostDto
	) {
		const userId = await getUserIdFromToken(
			token,
			this.jwtService
		);

		await this.prismaService.user.update({
			where: {
				id: userId
			},
			data: {
				followedPosts: {
					connect: {
						id: sharedPostDto.postId
					}
				}
			}
		});
        
	}
    
	public async createPost(
		token: string, createPostDto: CreatePostDto
	) {
		const userId = await getUserIdFromToken(
			token,
			this.jwtService
		);

		await this.prismaService.user.update({
			where: {
				id: userId
			},
			data: {
				createdPosts: {
					create: {
						...createPostDto,
						authorid: userId
					}
				}
			}
		});
        
	}
    
	public async removePost(
		token: string, removePostDto: RemovePostDto
	) {
		const userId = await getUserIdFromToken(
			token,
			this.jwtService
		);

		await this.prismaService.user.update({
			where: {
				id: userId
			},
			data: {
				createdPosts: {
					disconnect: {
						id: removePostDto.postId
					}
				}
			}
		});
	}
}
