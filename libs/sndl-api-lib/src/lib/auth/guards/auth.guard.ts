import { FastifyRequest } from "fastify";
import {
	ExecutionContext,
	ForbiddenException,
	Injectable,
	SetMetadata
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { AuthGuard } from "@nestjs/passport";

export const IS_PUBLIC_KEY = "isPublic";
export const Public = () => SetMetadata(
	IS_PUBLIC_KEY,
	true
);

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
	constructor(
		private readonly reflector: Reflector,
		private readonly jwtService: JwtService,
	) {
		super();
	}

	public override canActivate(context: ExecutionContext) {
		const isPublic = this.reflector.getAllAndOverride<boolean>(
			IS_PUBLIC_KEY,
			[
				context.getHandler(), 
				context.getClass()
			]
		);

		if (isPublic) {
			return true;
		}

		const req = context.switchToHttp().getRequest() as FastifyRequest;
		const token = req.headers.authorization?.split(" ").slice(1).join(" ");

		if (token) {
			try {
				this.jwtService.verify(token); 
				return true;
			} catch (error) {
				throw new ForbiddenException(error);
			}
		}
		
		return super.canActivate(context);
	}
}
