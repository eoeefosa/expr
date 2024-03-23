import { Request, Response, response } from "express";
import Bqquestion, { BQuestionSChema } from "../models/bqquestion";
// import { Questionid } from "./generatorid";
// get question @return []
export const getquestion = async (req: Request, res: Response) => {
  // const { userid } = req.body;

  const questions = await Bqquestion.find();
  res.json({ questions });
};
// post question {}
export const postaQuestion = async (req: Request, res: Response) => {
  const { question, options, answer, Br, level } = req.body;

  const existingQuestion = await Bqquestion.findOne({ question });

  if (existingQuestion) {
    return res
      .status(400)
      .json({ error: "Question already exist", data: existingQuestion });
  }

  const newquestion = new Bqquestion({
    question,
    options,
    answer,
    Br,
    level,
  });

  const savedquestion = newquestion.save();
  return res
    .status(200)
    .json({ message: "Question added successfully", data: savedquestion });
};
// post questions []
export const postQuestions = async (req: Request, res: Response) => {};
// Update question {}
export const updatequestion = async (req: Request, res: Response) => {
  const { id, userid, Upquestion, Upoptions, Upanswers } = req.body;
  const existingquestion = await Bqquestion.findOne(id);
  if (!existingquestion) {
    return res.status(400).json({ error: "Question not found" });
  }
  const updatedquestion = await Bqquestion.findByIdAndUpdate(
    id,
    {
      question: Upquestion,
      options: Upoptions,
      answers: Upanswers,
    },
    {
      new: true,
    }
  );

  if (!updatedquestion) {
    return res.status(500).json({ error: "Question not updated" });
  }
  return res.json({
    message: "Question updated successfully",
    data: updatedquestion,
  });
};
// update questions []
// delete questions[]
export const deleteQuestion = async (req: Request, res: Response) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ errors: "Invalid request" });
  }
  console.log(id);
  const existingQuestion = await Bqquestion.findOne({ id });
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
