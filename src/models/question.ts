import mongoose, { Document, Schema } from "mongoose";

export interface IQuestion extends Document {
  question: string;
  options: string[];
  answer: string[];
  explanation: string;
  course: string;
}

export const QuestionSchema = new Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  answer: { type: [String] },
  explanation: { type: String },
  course: { type: String },
});

export default mongoose.model<IQuestion>("Question", QuestionSchema);
