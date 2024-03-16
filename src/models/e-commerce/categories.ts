import mongoose, { Document, Schema } from "mongoose";

export interface ICategories extends Document {
  name: String;
  img: String;
}

const CategoriesSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String },
});

export default mongoose.model<ICategories>("Categories", CategoriesSchema);
