/* eslint-disable no-mixed-spaces-and-tabs */
import {
	Injectable,
	InternalServerErrorException,
	NotFoundException,
	NotImplementedException
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import {
	AddFriendDto,
	CreateUserDto,
	EditProfileDto,
	RemoveFriendDto
} from "@shared";
import { StorageClient } from "@supabase/storage-js";
import { PrismaService } from "../prisma/prisma.service";
import { getUserIdFromToken } from "../utils";

@Injectable()
export class UsersService {
    supabaseStorage: StorageClient;

    constructor(
    	private readonly prismaService: PrismaService,
    	private readonly jwtService: JwtService,
    	private readonly configService: ConfigService
    ) {
    	this.supabaseStorage = new StorageClient(
    		configService.getOrThrow("NX_STORAGE_LINK_SUPABASE"),
    		{
    		    authorization: configService.getOrThrow("NX_SUPABASE_AUTH_TOKEN")
    	    }
    	);
    }

    //auth
    public async getUserByEmail(email: string) {
    	const user = await this.prismaService.user.findFirst({
    		where: {
    			email
    		}
    	});

    	if (!user) throw new NotFoundException("TXT_USER_NOT_FOUND");

    	return user;
    }

    public async getUserById(id: number) {
    	const user = await this.prismaService.user.findFirst({ 
    		where: { id }
    	});

    	if (!user) throw new NotFoundException("TXT_USER_NOT_FOUND");

    	return user;
    }

    public async createUser(createUserDto: CreateUserDto) {
    	const response = await this.prismaService.user.create({
    		data: createUserDto
    	});

    	return response;
    }

    public async changePassword(
    	userId: number, newPassword: string
    ) {
    	const user = await this.prismaService.user.update({
    		where: {
    			id: userId
    		},
    		data: {
    			password: newPassword
    		}
    	});
		
    	if (!user) throw new NotFoundException("TXT_USER_NOT_FOUND");

    	return user;
    }

    //users
    public async editProfile(
    	token: string, editProfileDto: EditProfileDto
    ) {
    	let image: string | undefined = "";

    	const userId = await getUserIdFromToken(
    		token,
    		this.jwtService
    	);

    	if (editProfileDto.avatar) {
    		const {
    			data: imageBufferData,
    			error: imageBufferError
    		} = await this.supabaseStorage.from("images").upload(
    			`avatars/${new Date().toString().split(" ").join("")}-${editProfileDto.avatar.fieldname}`,
    			editProfileDto.avatar.buffer,
    			{
    				upsert: true,
    				contentType: editProfileDto.avatar.mimetype
    			}
    		);

    		image = imageBufferData?.path;

    		if (imageBufferError) throw new InternalServerErrorException(imageBufferError);
    	}
        
    	await this.prismaService.user.update({
    		where: {
    			id: userId
    		},
    		data: {
    			avatar: `${this.configService.getOrThrow("NX_STORAGE_LINK_SUPABASE")}/object/public/images/${image}`,
    			name: editProfileDto.name,
    			status: editProfileDto.status
    		}
    	});
    }

    public async getAllUsers(token: string) {
    	const userId = await getUserIdFromToken(
    		token,
    		this.jwtService
    	);

    	const users = await this.prismaService.user.findMany({
    		where: {
    			id: {
    				not: userId
    			}
    		},
    		select: {
    			avatar: true,
    			id: true,
    			name: true
    		}
    	});

    	return users;
    }

    public async getOneUser(id: number) {
    	const user = await this.prismaService.user.findUnique({
    		where: {
    			id: Number(id)
    		},
    		select: {
    			avatar: true,
    			status: true,
    			name: true,
    			followedPosts: {
    				select: {
    					content: true,
    					creator: {
    						select: {
    							avatar: true,
    							name: true,
    							id: true
    						}
    					}
    				}
    			}
    		}
    	});

    	if (!user) throw new NotFoundException("TXT_USER_NOT_FOUND");

    	return user;
    }
    
    public async getAllFriends(token: string) {
    	const userId = await getUserIdFromToken(
    		token,
    		this.jwtService
    	);

    	const user = await this.prismaService.user.findUnique({
    		where: {
    			id: userId
    		},
    		include: {
    			friendUsers: {
    				select: {
    					id: true,
    					name: true,
    					avatar: true
    				}
    			},
    			friendOf: {
    				select: {
    					id: true,
    					name: true,
    					avatar: true
    				}
    			}
    		}
    	});
        
    	if (!user) throw new NotFoundException("TXT_USER_NOT_FOUND");

    	return [...user.friendOf, ...user.friendUsers];
    }
    
    public async addFriend(
    	token: string, addFriendDto: AddFriendDto
    ) {
    	const userId = await getUserIdFromToken(
    		token,
    		this.jwtService
    	);

    	await this.prismaService.user.update({
    		where: {
    			id: userId
    		},
    		data:{
    			friendUsers: {
    				connect: {
    					id: addFriendDto.friendId
    				}
    			}
    		}
    	});
        
    }
    
    public async removeFriend(
    	token: string, removeFriendDto: RemoveFriendDto
    ) {
    	const userId = await getUserIdFromToken(
    		token,
    		this.jwtService
    	);

    	await this.prismaService.user.update({
    		where: {
    			id: userId
    		},
    		data:{
    			friendUsers: {
    				disconnect: {
    					id: removeFriendDto.friendId
    				}
    			}
    		}
    	});
        
    }

    public async setConfigProfile(token: string) {
    	throw new NotImplementedException();
    }
}
