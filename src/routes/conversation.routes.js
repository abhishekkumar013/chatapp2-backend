import {
  AddConversation,
  GetAllConversations,
} from "../controllers/conversation.controller.js";
import express from "express";
import { isAuth } from "../middleware/auth.middleware.js";
("express");

const router = express.Router();

router.use(isAuth);

router.route("/add").post(AddConversation);
router.route("/get-all-conversations").get(GetAllConversations);

export default router;
