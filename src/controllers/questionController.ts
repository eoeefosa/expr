import Question from "../models/question";

import { Request, Response } from "express";

export const createquestions = async (req: Request, res: Response) => {
  try {
    const question = await Question.create(req.body);
    res.status(201).json(question);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
