import express from "express";
import { getReports, createNewReport } from "../controllers/reports.controller.js";

const router = express.Router();

router.get("/", getReports);
router.post("/", createNewReport);

export default router;
