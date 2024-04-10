import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Hello } from './hello.entity';
import { HelloService } from './hello.service';

@Resolver()
export class HelloResolver {
  constructor(private helloService: HelloService) {}

  @Query(() => Hello)
  hello(): Hello {
    return this.helloService.getMessage();
  }

  @Query(() => [Hello])
  findAll(): Promise<Hello[]> {
    return this.helloService.findAll();
  }

  @Mutation(() => Hello)
  create(
    @Args('message', { type: () => String }) message: string,
  ): Promise<Hello> {
    return this.helloService.create(message);
  }
}
