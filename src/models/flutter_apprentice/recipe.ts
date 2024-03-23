import { IngredientSchema, Iingredient } from "./ingredent";
import mongoose, { Document, Schema } from "mongoose";

export interface ICard extends Document {
  id: string;
  cardType: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
  backgroundImageSource: string;
  message: string;
  authorName: string;
  role: string;
  authorImage: string;
  durationInMinutes: string;
  dietType: string;
  calories: string;
  tags: [string];
  description: string;
  source: string;
  ingredients: [Iingredient];
}

const RecipeSchema = new Schema({
  id: String,
  cardType: String,
  title: String,
  subtitle: String,
  backgroundImage: String,
  backgroundImageSource: String,
  message: String,
  authorName: String,
  role: String,
  authorImage: String,
  durationInMinutes: String,
  dietType: String,
  calories: String,
  tags: [String],
  description: String,
  source: String,
  ingredients: [IngredientSchema],
});

export default mongoose.model<ICard>("Recipes", RecipeSchema);
