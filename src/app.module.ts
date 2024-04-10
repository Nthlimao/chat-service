import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'graphql.schema.ts',
    }),
    HelloModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
