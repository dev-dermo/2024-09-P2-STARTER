import { Router } from "express";
import { create } from "../../controllers/tagController.js";

const router = Router();

router.route("/").post(create);

export default router;
