import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { printHello } from '@monorepo/shared';

async function bootstrap() {
  printHello();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
