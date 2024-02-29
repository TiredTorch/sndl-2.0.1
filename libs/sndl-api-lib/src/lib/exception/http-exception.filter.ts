import { FastifyReply } from "fastify";
import {
	ArgumentsHost,
	Catch,
	ExceptionFilter,
	HttpException,
	HttpStatus
} from "@nestjs/common";

@Catch(HttpException)
export class AllExceptionFilter implements ExceptionFilter {
	catch(
		exception: HttpException, host: ArgumentsHost
	) {
		console.log(
			"Exception caught:",
			exception
		);
    
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<FastifyReply>();
		const status = exception.getStatus();

		response.status(status).send({
			statusCode: status,
			error: HttpStatus[status],
			message: exception.message || "a",
		});
	}
}