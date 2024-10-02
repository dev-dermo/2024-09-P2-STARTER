import { User } from "../models/index.js";
import { signToken } from "../utils/auth.js";

export const create = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const dbRes = await User.create({ username, email, password });

    if (dbRes) {
      const token = signToken(dbRes);
      return res.status(201).json({ token });
    }

    res.status(400).json({ message: "Something went wrong" });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const findAll = async (req, res) => {
  try {
    const dbRes = await User.findAll();

    res.status(200).json(dbRes);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isValidPassword = user.checkPassword(password);
    console.log(isValidPassword);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid email/password combo" });
    }

    const token = signToken(user);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
