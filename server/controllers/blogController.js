import { Blog, Tag } from "../models/index.js";

export const create = async (req, res) => {
  try {
    const { title, content, category_id, tags } = req.body;

    // assume tags is an array of strings, check if tags already exist in the database
    const dbRes = await Blog.create({ title, content, category_id });
    const tagRes = await Tag.bulkCreate(tags.map((tag) => ({ tag_name: tag })));

    dbRes.setTags(tagRes);

    res.status(201).json(dbRes);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
