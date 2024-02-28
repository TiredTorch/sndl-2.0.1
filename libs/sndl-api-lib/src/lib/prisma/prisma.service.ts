
import { createSoftDeleteExtension } from "prisma-extension-soft-delete";
import {
	Injectable,
	OnModuleDestroy,
	OnModuleInit
} from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();

    Object.assign(
      this,
      this.$extends(
        createSoftDeleteExtension({
            models: {
                Album: true,
                ChatRoom: true,
                Message: true,
                Post: true,
                Song: true,
                User: true,
            },
            defaultConfig: {
                field: "deletedAt",
                createValue: (deleted) => {
                  if (deleted) return new Date();
                  return null;
                },
            },
        })
      )
    )
    
  }
 
  async onModuleDestroy() {
    await this.$disconnect();
  }
}