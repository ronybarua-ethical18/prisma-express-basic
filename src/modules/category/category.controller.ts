import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await CategoryService.createCategory(req.body);
    res.status(200).send(category);
  } catch (error) {
    res.send(error);
  }
};

export const CategoryController = {
    createCategory
}