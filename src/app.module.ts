import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://blog-daniel:0b0lDdm3TQpDQsGb@cluster0.pnkor.mongodb.net/test',
    ),
    ArticlesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
