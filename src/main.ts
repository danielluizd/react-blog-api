import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // var whitelist = [
  //   'https://react-blog-danielluizd.vercel.app',
  //   'http://react-blog-danielluizd.vercel.app',
  //   'https://www.localhost:3000',
  //   'http://www.localhost:3000',
  // ];
  // app.enableCors({
  //   origin: function (origin, callback) {
  //     if (whitelist.indexOf(origin) !== -1) {
  //       console.log('allowed cors for:', origin);
  //       callback(null, true);
  //     } else {
  //       console.log('blocked cors for:', origin);
  //       callback(new Error('Not allowed by CORS'));
  //     }
  //   },
  //   allowedHeaders:
  //     'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
  //   methods: 'GET,PATCH,POST,DELETE,UPDATE,OPTIONS',
  //   credentials: true,
  // });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
