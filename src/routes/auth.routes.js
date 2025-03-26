import express from "express";
import {
  SignInController,
  SignUpController,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/signup").post(SignUpController);
router.route("/signin").post(SignInController);

export default router;
