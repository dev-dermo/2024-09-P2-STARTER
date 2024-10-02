import { Router } from "express";
import { create, findAll, login } from "../../controllers/userController.js";

const router = Router();

router.route("/").post(create).get(findAll);

router.route("/login").post(login);

export default router;
