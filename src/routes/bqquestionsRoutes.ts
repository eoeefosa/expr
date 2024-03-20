import express from "express";
import {
  getquestion,
  postaQuestion,
  deleteQuestion,
} from "../controllers/bquestionController";

const router = express.Router();
router.get("/questions", getquestion);
router.post("/question", postaQuestion);
router.delete("/question", deleteQuestion);

export default router;

