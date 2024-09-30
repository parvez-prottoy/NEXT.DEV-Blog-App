import express from "express";
import { postUser } from "../controllers/users.controller.js";
const router = express.Router();

/**
 * @route POST /api/v1/users
 * @access public
 */
router.post("/", postUser);

export default router;
