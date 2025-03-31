import express from "express";
import { isAuth } from "../middleware/auth.middleware.js";
import { sendMesage } from "../controllers/message.controller.js";
import { GetAllConversations } from "../controllers/conversation.controller.js";
("express");

const router = express.Router();

router.use(isAuth);

router.route("/add").post(sendMesage);
router.route("/get-conversation").get(GetAllConversations);
// TODO: or
// router.route("/get-conversation/:conversationId").get(GetAllConversations);

export default router;
