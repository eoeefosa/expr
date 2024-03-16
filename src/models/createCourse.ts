import mongoose from "mongoose";
import { IQuestion, QuestionSchema } from "./question";

export const toCreateCourse = async (title: string) => {
  console.log("toCreateCourse called");
  const oncreate = await mongoose.model<IQuestion>(title, QuestionSchema);
  console.log(oncreate.modelName);
};
