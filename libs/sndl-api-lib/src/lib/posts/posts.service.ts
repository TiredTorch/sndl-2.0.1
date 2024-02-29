import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

@Injectable()
export class PostsService {
	async create(createPostDto: CreatePostDto) {
		return "This action adds a new post";
	}

	async findAll() {
		return `This action returns all posts`;
	}

	async findOne(id: number) {
		return `This action returns a #${id} post`;
	}

	async update(
		id: number, updatePostDto: UpdatePostDto
	) {
		return `This action updates a #${id} post`;
	}

	async remove(id: number) {
		return `This action removes a #${id} post`;
	}
}
