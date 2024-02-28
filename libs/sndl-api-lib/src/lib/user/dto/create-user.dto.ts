import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    constructor(partial?: Partial<CreateUserDto>) {
	    Object.assign(this, partial);
	}

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    avatar: string;

    @ApiProperty()
    status: string;

    @ApiProperty()
    password: string;
}
