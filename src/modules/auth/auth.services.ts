import { Injectable, UnauthorizedException } from '@nestjs/common';

import { Auth, RegisterParams } from './auth.model';
import { BcryptService } from 'src/modules/auth/bscrypt/bcrypt.service';
import { UserService } from '../user/user.service';
import { JwtService } from 'src/modules/auth/jwt/jwt.service';
import { User } from '../user/user.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly bcryptService: BcryptService,
    private readonly jwtService: JwtService,
  ) {}

  async register(params: RegisterParams): Promise<Auth> {
    const { phone, email, password } = params;

    const existingUser = await this.userService.find({ phone, email });

    if (existingUser) {
      throw new Error('Usuário já cadastrado');
    }

    try {
      const hashedPassword = await this.bcryptService.hashPassword(password);

      const created = (await this.userService.create({
        ...params,
        password: hashedPassword,
      })) as User;

      return {
        access_token: await this.jwtService.createAccessToken(created),
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async login(email: string, password: string): Promise<Auth> {
    const user = await this.userService.findUser(email);

    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    const isValidPassword = await this.bcryptService.comparePassword(
      password,
      user.password,
    );

    if (!isValidPassword) {
      throw new UnauthorizedException('Senha incorreta');
    }

    return {
      access_token: await this.jwtService.createAccessToken(user),
    };
  }
}
