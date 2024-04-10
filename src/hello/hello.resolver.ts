import { Query, Resolver } from '@nestjs/graphql';
import { Hello } from './hello.entity';
import { HelloService } from './hello.service';

@Resolver()
export class HelloResolver {
  constructor(private helloService: HelloService) {}

  @Query(() => Hello)
  hello(): Hello {
    return this.helloService.getMessage();
  }
}
