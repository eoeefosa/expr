import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import courseRoutes from "./routes/courseRoutes";
import bquestionRoute from "./routes/bqquestionsRoutes";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/user", userRoutes);
app.use("/course", courseRoutes);
app.use("/bquestion", bquestionRoute);

mongoose
  .connect(process.env.MONGODB_URL || "mongodb://0.0.0.0:27017/")
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) => {
    console.log("database connection error", error);
  });

const server = app.listen(PORT as number, () => {
  const { address, port } = server.address() as any;
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

  console.log(`Server is running at ${protocol}://${address}:${port}`);
});
