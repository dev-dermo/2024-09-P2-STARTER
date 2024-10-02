import { Router } from "express";
import { create } from "../../controllers/blogController.js";

const router = Router();

router.route("/").post(create);

export default router;
