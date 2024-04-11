import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Hello {
  @Prop({ required: true })
  message: string;
}

export const HelloSchema = SchemaFactory.createForClass(Hello);
