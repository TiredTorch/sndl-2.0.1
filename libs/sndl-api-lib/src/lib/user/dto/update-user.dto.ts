import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto {
    constructor(partial?: Partial<UpdateUserDto>) {
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
