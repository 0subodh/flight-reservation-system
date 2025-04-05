import express from "express";
import { createAirplane } from "../../controllers/index.js";

const router = express.Router();

router.post("/", createAirplane);

export default router;
