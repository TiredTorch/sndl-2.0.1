import multiPart from "@fastify/multipart";
import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import {
	FastifyAdapter,
	NestFastifyApplication
} from "@nestjs/platform-fastify";
import {
	DocumentBuilder,
	SwaggerModule
} from "@nestjs/swagger";
import { SndlApiLibModule } from "@sndl-api-lib";

async function bootstrap() {
		const app = await NestFactory.create<NestFastifyApplication>(
			SndlApiLibModule,
			new FastifyAdapter({
				maxParamLength: 1000,
				logger: true
			}),
			{
				cors: {
					methods: [
						"GET",
						"POST",
						"PUT",
						"DELETE",
						"HEAD",
						"PATCH",
						"OPTIONS"
					],
					allowedHeaders: "*",
					origin: "*"
				},
				bufferLogs: true
			}  
		);

		await app.register(multiPart as any);

		const globalPrefix = "api";
		const globalDocsPrefix = "docs";

		app.setGlobalPrefix(globalPrefix);

		const swaggerConfig = new DocumentBuilder()
			.setTitle("Sndl api")
			.setDescription("Soundle REST API documentation")
			.setVersion("1.0")
			.addBearerAuth(
				{
					type: "http",
					scheme: "bearer",
					bearerFormat: "JWT",
					in: "header"
				},
				"Auth"
			)
			.build();

		SwaggerModule.setup(
			globalDocsPrefix,
			app,
			SwaggerModule.createDocument(
				app,
				swaggerConfig
			)
		);

		const port = process.env.PORT || 3000;

		await app.listen(port);

		Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalDocsPrefix}`);
}

bootstrap();
