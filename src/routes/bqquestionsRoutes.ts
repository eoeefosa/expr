import express from "express";
import {
  getquestion,
  postaQuestion,
  deleteQuestion,
  updatequestion,
} from "../controllers/bquestionController";

const router = express.Router();
router.get("/questions", getquestion);
router.post("/question", postaQuestion);
router.put("/question", updatequestion);
router.delete("/question", deleteQuestion);

export default router;
