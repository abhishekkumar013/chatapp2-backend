import express from "express";
import { isAuth } from "../middleware/auth.middleware.js";
import { sendMesage } from "../controllers/message.controller.js";
("express");

const router = express.Router();

router.use(isAuth);

router.route("/add").post(sendMesage);

export default router;
