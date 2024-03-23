import mongoose, { Document, Schema } from "mongoose";

export interface IBQuestion extends Document {
  id: string;
  question: string;
  options: string[];
  answer: string;
  br: string;
  level: number;
}

export const BQuestionSChema = new Schema({
  question: { type: String, required: true, index: true },
  options: { type: [String], required: true },
  answer: { type: String, required: true },
  br: { type: String },
  level: { type: Number, required: true },
});

BQuestionSChema.set("toJSON", {
  virtuals: true,
});
/**
 *BQuestionSChema = new Schema({
  id: { type: String, required: true },
  question: { type: String, required: true },
  options: { type: [String], required: true },
  answer: { type: String, required: true },
  br: { type: String },
  level: { type: Number, required: true },
});
 *  */
export default mongoose.model<IBQuestion>("BQuestions", BQuestionSChema);
