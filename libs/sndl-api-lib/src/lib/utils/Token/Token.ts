import {
	createParamDecorator,
	ExecutionContext
} from "@nestjs/common";

export const Token = createParamDecorator((
	_: unknown, ctx: ExecutionContext
) => {
	const request = ctx.switchToHttp().getRequest();

	const token = request?.headers?.authorization?.split(" ")?.slice(1)?.join(" ") ?? "";

	return token as string;
});

export const createTokenPayload = (userId: number) => ({
	userId
});