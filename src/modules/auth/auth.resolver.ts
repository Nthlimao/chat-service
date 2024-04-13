import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
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

  @Query(() => Auth)
  login(
    @Args('email', { type: () => String }) email: string,
    @Args('password', { type: () => String }) password: string,
  ): Promise<Auth> {
    return this.authService.login(email, password);
  }
}
