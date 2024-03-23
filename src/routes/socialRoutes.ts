import express from "express";
import { get50post } from "../controllers/socialController";

const router = express();

// get a list of 50 post
router.get("/", get50post);

export default router;
