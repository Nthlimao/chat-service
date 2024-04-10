import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Hello>;

@Schema()
export class Hello {
  @Prop({ required: true })
  message: string;
}

export const HelloSchema = SchemaFactory.createForClass(Hello);
