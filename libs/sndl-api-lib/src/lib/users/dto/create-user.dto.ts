import { Prisma } from "@prisma/client";

export class CreateUserDto implements Prisma.UserCreateInput {
    name: string;
    email: string;
    avatar: string;
    status: string;
    password: string;
    created_at?: string | Date | null | undefined;
    deletedAt?: string | Date | null | undefined;
    createdAlbums?: Prisma.AlbumCreateNestedManyWithoutCreatedAlbumsInput | undefined;
    followedAlbums?: Prisma.AlbumCreateNestedManyWithoutFollowedAlbumsInput | undefined;
    createdPosts?: Prisma.PostCreateNestedManyWithoutCreatedPostsInput | undefined;
    followedPosts?: Prisma.PostCreateNestedManyWithoutFollowedPostsInput | undefined;
    friendUsers?: Prisma.UserCreateNestedManyWithoutFriendOfInput | undefined;
    friendOf?: Prisma.UserCreateNestedManyWithoutFriendUsersInput | undefined;
    chats?: Prisma.ChatRoomCreateNestedManyWithoutParticipantsInput | undefined;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput | undefined;
}
