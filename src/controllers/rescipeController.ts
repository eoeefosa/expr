import { Request, Response } from "express";
import Recipe from "../models/flutter_apprentice/recipe";

export const getRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = Recipe.find();
    res.json([recipes]);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
// posst recipe
