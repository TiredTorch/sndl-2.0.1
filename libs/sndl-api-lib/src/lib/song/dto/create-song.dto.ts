import { ApiProperty } from "@nestjs/swagger";

export class CreateSongDto {
    @ApiProperty()
    name: string;
    
    @ApiProperty()
    sourse: string;
    
    @ApiProperty()
    albumConnectId: number;
}
