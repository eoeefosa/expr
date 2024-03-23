import mongoose, { Document, Schema } from "mongoose";

export interface Iingredient extends Document {
  imageUrl: string;
  title: string;
  source: string;
  instruction_description: string;
  duration: number;
}

export const IngredientSchema = new Schema({
  imageUrl: String,
  title: String,
  source: String,
  instruction_description: String,
  duration: Number,
});

// export default mongoose.model<Iingredient>("Ingredient", IngredientSchema);
