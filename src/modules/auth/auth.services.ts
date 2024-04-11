import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from '../user/user.schema';
import { RegisterParams } from './auth.entity';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }

  async comparePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }

  async register(params: RegisterParams): Promise<User> {
    const { phone, email, password } = params;

    const existingUser = await this.userModel.findOne({ phone, email }).lean();

    if (existingUser) {
      throw new Error('Usuário já cadastrado');
    }

    try {
      const hashedPassword = await this.hashPassword(password);

      const created = new this.userModel({
        ...params,
        password: hashedPassword,
      });

      return created.save();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
