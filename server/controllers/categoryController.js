import { Category } from "../models/index.js";

export const create = async (req, res) => {
  try {
    const { category_name } = req.body;

    const dbRes = await Category.create({ category_name });

    res.status(201).json(dbRes);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
