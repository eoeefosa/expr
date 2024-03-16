import { Request, Response } from "express";
import { toCreateCourse } from "../models/createCourse";

export const createACourse = async (req: Request, res: Response) => {
  const { title } = req.body;
  const mycourse =  toCreateCourse(title);
};
