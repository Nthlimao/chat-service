import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './user.model';
import { User as UserSchema } from './user.schema';
import { RegisterParams } from '../auth/auth.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserSchema.name) private userModel: Model<UserSchema>,
  ) {}

  async create(params: RegisterParams): Promise<User> {
    const created = new this.userModel({ ...params });
    return created.save() as unknown as User;
  }

  async find(params: Partial<User>): Promise<User> {
    return await this.userModel.findOne({ ...params }).lean();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec() as unknown as User[];
  }
}
