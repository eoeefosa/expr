import { Request, Response } from "express";
import Question from "../models/question";

// get a list of 50 post
export const get50post = (req: Request, res: Response) => {
  const question = Question.find().limit(50);
  res.send(question).status(200);
};
