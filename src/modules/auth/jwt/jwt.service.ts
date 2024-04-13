import { Injectable } from '@nestjs/common';
import { JwtService as NestJwtService } from '@nestjs/jwt';
import configuration from 'src/config/config.constants';
import { User } from 'src/modules/user/user.model';

@Injectable()
export class JwtService {
  constructor(private jwtService: NestJwtService) {}

  async createAccessToken(params: User): Promise<string> {
    const payload = {
      id: params.id,
      name: params.name,
      email: params.email,
      phone: params.phone,
    };

    return await this.jwtService.signAsync(payload, {
      secret: configuration().auth.secret,
    });
  }

  async validateAccessToken(token: string): Promise<User> {
    const payload = await this.jwtService.verifyAsync(token, {
      secret: configuration().auth.secret,
    });

    return payload;
  }
}
