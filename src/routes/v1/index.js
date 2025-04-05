import express from "express";
import { info } from "../../controllers/index.js";
import airplaneRoutes from "../../routes/v1/airplane.route.js";

const router = express.Router();

router.use("/airplanes", airplaneRoutes);

router.get("/info", info);

export default router;
