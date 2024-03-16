import express from "express";
import {
  createCourse,
  deleteCourse,
  getCourses,
} from "../controllers/CourseController";

import { createACourse } from "../controllers/questiongenController";

const router = express.Router();
router.post("/createCourse", createCourse);
router.delete("/deleteCourse", deleteCourse);
router.get("/courses", getCourses);
router.post("/course", createACourse);
export default router;
