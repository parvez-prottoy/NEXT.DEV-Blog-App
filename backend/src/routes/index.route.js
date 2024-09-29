import express from "express";
import { getHealth, getHome } from "../controllers/index.controller.js";
const router = express.Router();

/**
 * @route GET /health
 * @access Public
 */
router.get("/health", getHealth);
/**
 * @route GET /
 * @access Public
 */
router.get("/", getHome);

export default router;
