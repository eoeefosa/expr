import express from "express";
import {getRecipes } from "../controllers/rescipeController";

const router = express();

router.get("/", getRecipes);

export default router;
