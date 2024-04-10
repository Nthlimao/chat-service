import { Injectable } from '@nestjs/common';
import { Hello as HelloDto } from './hello.entity';
import { Hello } from './hello.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class HelloService {
  constructor(@InjectModel(Hello.name) private helloModel: Model<Hello>) {}

  async create(message: string): Promise<Hello> {
    const created = new this.helloModel({ message });
    return created.save();
  }

  async findAll(): Promise<Hello[]> {
    return this.helloModel.find().exec();
  }

  getMessage(): HelloDto {
    return { message: 'hello world' };
  }
}
