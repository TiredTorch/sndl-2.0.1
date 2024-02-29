import { Injectable } from "@nestjs/common";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { UpdateAuthDto } from "./dto/update-auth.dto";

@Injectable()
export class AuthService {
	async create(createAuthDto: CreateAuthDto) {
		return "This action adds a new auth";
	}

	async findAll() {
		return `This action returns all auth`;
	}

	async findOne(id: number) {
		return `This action returns a #${id} auth`;
	}

	async update(
		id: number, updateAuthDto: UpdateAuthDto
	) {
		return `This action updates a #${id} auth`;
	}

	async remove(id: number) {
		return `This action removes a #${id} auth`;
	}
}
