import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  findAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }
}
