import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RegisterParams {
  @Field(() => String)
  name: string;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
