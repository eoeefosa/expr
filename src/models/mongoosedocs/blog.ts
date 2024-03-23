import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
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
  title: { type: String, unique: true },
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
/**
 * ```
 *  const BlogSchema = new Schema({
 *  title: String,
 *  author: String,
 *  body: String,
 *  comment: [{ body: String, date: Date }],
 *  date: { type: Date, default: Date.now },
 *  hidden: Boolean,
 *  meta: {
 *   vote: Number,
 *   favs: Number,
 *  },
 * });```
 */
export default mongoose.model<IBlog>("Blog", BlogSchema);
// module.export =Blog
