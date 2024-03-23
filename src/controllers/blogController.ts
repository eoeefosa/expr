import { Request, Response } from "express";
import Blog from "../models/mongoosedocs/blog";
// Creating     Blog post
export const createblog = async (req: Request, res: Response) => {
  const { title, author, body } = req.body;
  const titleexist = await Blog.findOne({ title });
  if (titleexist) {
    return res.status(400).json({ erro: "The title already exist" });
  }
  try {
    const newBlog = new Blog({
      title,
      author,
      body,
    });
    await newBlog.save();
    return res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ error: "Error creating blog entry" });
  }
};
// get Blog post
// get blog post by author
// get blog post by title
// get blog post 
export const readingBlog = async (req: Request, res: Response) => {
//   const;
};
// Updating Blog post

// Deleting  Blog post
