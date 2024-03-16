import mongoose, { Document, Schema } from "mongoose";

export interface ICourse extends Document {
  title: String;
}

const CourseSchema = new Schema({
  title: { type: String, required: true, unique: true },
});

export default mongoose.model<ICourse>("Course", CourseSchema);
