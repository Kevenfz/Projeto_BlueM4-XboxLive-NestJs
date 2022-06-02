import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('XboxLive')
    .setDescription('Aplicação para gestão da plataforma de jogos')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('game')
    .addTag('user')
    .addTag('genero')
    .addTag('perfil')
    .addTag('auth')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3555);
}
bootstrap();
