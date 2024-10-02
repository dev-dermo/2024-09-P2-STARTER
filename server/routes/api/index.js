import { Router } from "express";

import userRoutes from "./userRoutes.js";
import tagRoutes from "./tagRoutes.js";
import categoryRoutes from "./categoryRoutes.js";
import blogRoutes from "./blogRoutes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/tags", tagRoutes);
router.use("/categories", categoryRoutes);
router.use("/blogs", blogRoutes);

export default router;
