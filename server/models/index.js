import User from "./user.js";
import Category from "./category.js";
import Blog from "./blog.js";
import Tag from "./tag.js";

User.hasMany(Blog, {
  foreignKey: "user_id",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

Blog.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.hasMany(Blog, {
  foreignKey: "category_id",
});

Blog.belongsToMany(Tag, {
  through: "blog_tag",
  foreignKey: "blog_id",
});

Tag.belongsToMany(Blog, {
  through: "blog_tag",
  foreignKey: "tag_id",
});

export { User, Tag, Category, Blog };
