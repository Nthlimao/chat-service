import { Module } from '@nestjs/common';
import { JwtModule as NestJwtService } from '@nestjs/jwt';
import configuration from 'src/config/config.constants';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.services';
import { JwtService } from './jwt/jwt.service';
import { UserModule } from '../user/user.module';
import { BcryptService } from './bscrypt/bcrypt.service';

@Module({
  imports: [
    UserModule,
    NestJwtService.register({
      global: true,
      secret: configuration().auth.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthResolver, AuthService, BcryptService, JwtService],
})
export class AuthModule {}
