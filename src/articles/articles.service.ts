import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { exec } from 'child_process';
import { Model } from 'mongoose';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article, ArticleDocument } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<ArticleDocument>,
  ) {}

  create(createArticleDto: CreateArticleDto) {
    const article = new this.articleModel(createArticleDto);
    return article.save();
  }

  findAll() {
    return this.articleModel.find();
  }

  findOne(id: string) {
    return this.articleModel.findById(id);
  }

  update(id: string, updateArticleDto: UpdateArticleDto) {
    return this.articleModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateArticleDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.articleModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
