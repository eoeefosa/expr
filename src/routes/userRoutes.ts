import express from "express";
import { register, login, person } from "../controllers/userController";
import { body } from "express-validator";

const router = express.Router();

router.post("/login", login);

router.post(
  "/register",
  // body("email").isEmail,
  // body("password").isLength({ min: 6 }),
  // body("name").notEmpty,
  register
);

router.get("/people", person);

export default router;
