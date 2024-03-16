import { Request, Response } from "express";
import User from "../models/User";
import Course from "../models/course";

export const createCourse = async (req: Request, res: Response) => {
  const { title } = req.body;

  const exitsingCourse = await Course.findOne({ title });

  if (exitsingCourse) {
    return res.status(400).json({ error: "Course already exist" });
  }

  const newCourse = new Course({
    title,
  });

  await newCourse.save();
  return res.json({ message: title + " Created successfully" });
};

export const deleteCourse = async (req: Request, res: Response) => {
  const { title } = req.body;
    const existingCourse = await Course.findOne({ title });
    

  if (!existingCourse) {
    const errorvalue: String = title + " Not found";
    return res.status(400).json({ error: errorvalue });
  }

  await existingCourse.deleteOne();
  return res.json({ message: title + " deleted succefully" });
};

export const getCourses = async (req: Request, res: Response) => {
  const courses = await Course.find();
  res.json({ courses });
};
