import express from "express";
import {
  Logout,
  SearchMembers,
  SignInController,
  SignUpController,
} from "../controllers/auth.controller.js";
import { isAuth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.route("/signup").post(SignUpController);
router.route("/signin").post(SignInController);

router.use(isAuth);
router.route("/search").get(SearchMembers);
router.route("/logout").post(Logout);

export default router;
