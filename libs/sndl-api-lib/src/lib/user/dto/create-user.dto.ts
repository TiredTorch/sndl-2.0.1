import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
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
