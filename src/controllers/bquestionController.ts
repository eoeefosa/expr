import { Request, Response } from "express";
import Bqquestion from "../models/bqquestion";
import { deleteModel } from "mongoose";
// get question @return []
export const getquestion = async (req: Request, res: Response) => {
  const questions = await Bqquestion.find();
  res.json({ questions });
};
// post question {}
export const postaQuestion = async (req: Request, res: Response) => {
  const { question, options, answer, Br, level } = req.body;

  const existingQuestion = await Bqquestion.findOne({ question });
  if (existingQuestion) {
    return res.status(400).json({ error: "Question already exist" });
  }
  const newquestion = new Bqquestion({
    question,
    options,
    answer,
    Br,
    level,
  });

  newquestion.save();
  return res.status(200).json({ message: "Question added successfully" });
};
// post questions []
// Update question {}
// update questions []
// delete questions[]
export const deleteQuestion = async (req: Request, res: Response) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ errors: "Invalid request" });
  }
  const _id = id;
  const existingQuestion = await Bqquestion.findOne({ _id });
  if (!existingQuestion) {
    return res.status(400).json({ error: "Question not found" });
  }

  const isdeleteQuestion = await Bqquestion.findByIdAndDelete({ id });
  if (!isdeleteQuestion) {
    return res
      .status(500)
      .json({ error: "Sever error unable to delete question" });
  }
  return res.json({ message: "Question deleted successfully" });
};
// delete question
