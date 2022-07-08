import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://blog-daniel:ftDIzPGzC3oszKtE@cluster0.pnkor.mongodb.net/test',
    ),
    ArticlesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
