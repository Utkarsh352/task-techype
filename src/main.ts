import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set up Swagger options
  const config = new DocumentBuilder()
    .setTitle('NestJS Social Auth API')  
    .setDescription('API for user authentication with Google and LinkedIn login')  
    .setVersion('1.0') 
    .addBearerAuth()  
    .build();

  // Create the Swagger document
  const document = SwaggerModule.createDocument(app, config);

  // Set up Swagger UI
  SwaggerModule.setup('api-docs', app, document);

  // Start the app
  await app.listen(3000);
}
bootstrap();
