import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { SndlApiLibModule } from '@sndl-api-lib';

async function bootstrap() {
  const app = await NestFactory.create(SndlApiLibModule);

  const globalPrefix = 'api';
  const globalDocsPrefix = 'docs';

  app.setGlobalPrefix(globalPrefix);

  const swaggerConfig = new DocumentBuilder()
			.setTitle("Sndl api")
			.setDescription("Soundle REST API documentation")
			.setVersion("1.0")
			// .addBearerAuth(
			// 	{
			// 		type: "http",
			// 		scheme: "bearer",
			// 		bearerFormat: "JWT",
			// 		in: "header"
			// 	},
			// 	"Auth"
			// )
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

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalDocsPrefix}`
  );
}

bootstrap();
