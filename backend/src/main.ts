import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ["http://localhost:3000", "https://todo-app-169aa.web.app"],
    methods: "GET,PUT,PATCH,POST,DELETE",
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Origin'],
    exposedHeaders: ['Content-Range', 'X-Content-Range'],
    optionsSuccessStatus: 200,
    preflightContinue: false
  });
  
  
  await app.listen(4000);
  console.log('server running at port 4000')

}

bootstrap();
