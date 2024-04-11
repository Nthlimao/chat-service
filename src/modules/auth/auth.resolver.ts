import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.services';
import { RegisterParams } from './auth.entity';
import { User } from '../user/user.entity';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => User)
  register(
    @Args('params', { type: () => RegisterParams }) params: RegisterParams,
  ): Promise<User> {
    return this.authService.register(params);
  }
}
