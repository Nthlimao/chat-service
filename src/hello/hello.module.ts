import { Module } from '@nestjs/common';
import { HelloResolver } from './hello.resolver';
import { HelloService } from './hello.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Hello, HelloSchema } from './hello.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hello.name, schema: HelloSchema }]),
  ],
  providers: [HelloResolver, HelloService],
})
export class HelloModule {}
