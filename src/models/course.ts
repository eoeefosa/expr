import mongoose, { Document, Schema } from "mongoose";

export interface ICourse extends Document {
  title: String;
}

const CourseSchema = new Schema({
  title: { type: String, required: true, unique: true },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: `Question` }],
});

export default mongoose.model<ICourse>("Course", CourseSchema);
