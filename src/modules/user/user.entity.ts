import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String)
  id?: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  email: string;
}
