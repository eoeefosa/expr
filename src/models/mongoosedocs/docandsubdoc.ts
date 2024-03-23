import mongoose, { Document, Schema } from "mongoose";

export interface IChild extends Document {
  title: string;
}
const childSchema = new Schema({ name: String });

module.exports = mongoose.model<IChild>("Child", childSchema);
const parentSchema = new Schema({
  children: [childSchema],
  child: childSchema,
});
