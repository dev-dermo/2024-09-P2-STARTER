import sequelize from "../config/connection.js";
import { User, Blog, Category, Tag } from "../models/index.js";

const seedUsers = async () => {
  try {
    const users = await User.bulkCreate(
      [
        {
          username: "dmurphy",
          email: "dmurphy@gmail.com",
          password: "password",
        },
      ],
      { individualHooks: true },
    );
  } catch (error) {
    console.error(error);
  }
};

const seedCategories = async () => {
  try {
    const categories = await Category.bulkCreate([
      { category_name: "Technology" },
      { category_name: "Travel" },
      { category_name: "Food" },
    ]);
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedCategories();
})();

// await seedDatabase();
