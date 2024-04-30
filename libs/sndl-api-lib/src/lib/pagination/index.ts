import {
	createParamDecorator,
	ExecutionContext
} from "@nestjs/common";

export const Pagination = createParamDecorator((
	_: unknown, ctx: ExecutionContext
) => {
	const request = ctx.switchToHttp().getRequest();
	const page = request.query.page ? +request.query.page : 1;
	const limit = request.query.limit ? +request.query.limit : 10;

	return { page, limit };
});