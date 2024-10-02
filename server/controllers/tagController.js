import { Tag } from "../models/index.js";

export const create = async (req, res) => {
  try {
    const { tag_name } = req.body;

    const dbRes = await Tag.create({ tag_name });

    res.status(201).json(dbRes);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
