import mongoose, { Schema, Document } from "mongoose";

export interface IBloge extends Document {
  title: string;
  author: string;
  body: string;
  comments: [{ body: string; date: Date }];
  hidden: boolean;
  meta: {
    vote: number;
    favs: number;
  };
}

const BlogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comment: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    vote: Number,
    favs: Number,
  },
});

export default mongoose.model<IBloge>("Blog", BlogSchema);
