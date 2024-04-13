import { Field, ObjectType } from '@nestjs/graphql';
import { Types } from 'mongoose';

@ObjectType()
export class User {
  @Field(() => String)
  id: Types.ObjectId;

  @Field(() => String)
  name: string;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  email: string;
}
