import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.services';
import { Auth, RegisterParams } from './auth.model';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => Auth)
  register(
    @Args('params', { type: () => RegisterParams }) params: RegisterParams,
  ): Promise<Auth> {
    return this.authService.register(params);
  }
}
