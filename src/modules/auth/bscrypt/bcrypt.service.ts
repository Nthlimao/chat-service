import { Injectable } from '@nestjs/common';
import configuration from 'src/config/config.constants';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
  constructor() {}

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, configuration().auth.salt);
  }

  async comparePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
}
