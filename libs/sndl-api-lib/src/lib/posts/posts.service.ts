import {
	Injectable,
	NotFoundException
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

	public async getSharedPosts(token: string) {
		const userId = await getUserIdFromToken(
			token,
			this.jwtService
		); 
		const user = await this.prismaService.user.findUnique({
			where: {
				id: userId
			},
			select: {
				followedPosts: true
			} 
		});

		if (!user) throw new NotFoundException("TXT_USER_NOT_FOUND");

		return user.followedPosts;
	}

	public async getPosts(token: string) {
		const userId = await getUserIdFromToken(
			token,
			this.jwtService
		); 

		const user = await this.prismaService.user.findUnique({
			where: {
				id: userId
			},
			select: {
				friendUsers: true
			} 
		});

		if (!user) throw new NotFoundException("TXT_USER_NOT_FOUND");

		const friendsId = user.friendUsers.map(friend => friend.id);

		const posts = await this.prismaService.post.findMany({
			where: {
				creatorId: {
					in: [
						...friendsId,
						userId
					]
				}
			},
			select: {
				content: true,
				created_at: true,
				id: true,
				creator: {
					select: {
						id: true,
						avatar: true,
						name: true
					}
				}
			}
		});

		return posts;
	}

	public async addComment(
		token: string, addCommentDto: AddCommentDto
	) {
		const userId = await getUserIdFromToken(
			token,
			this.jwtService
		); 

		await this.prismaService.post.update({
			where: {
				id: addCommentDto.postId
			},
			data: {
				comments: {
					create: {
						content: addCommentDto.comment,
						authorId: userId
					}
				}
			}
		});
	}
    
	public async getPostById(id: number) {
		const post = await this.prismaService.post.findUnique({
			where: {
				id: Number(id)
			},
			include: {
				comments: {
					select: {
						author: {
							select: {
								avatar: true,
								name: true,
								password: false
							}
						},
						content: true,
					}
				}
			}
		});

		return post;
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
					create: createPostDto
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
