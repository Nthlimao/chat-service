import { Injectable } from '@nestjs/common';
import { Hello } from './hello.entity';

@Injectable()
export class HelloService {
  getMessage(): Hello {
    return { message: 'hello world' };
  }
}
