import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule, HelloModule, UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
