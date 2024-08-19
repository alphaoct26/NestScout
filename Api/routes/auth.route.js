import express from "express";
import dotenv from "dotenv";
import { login, logout, register } from "../controllers/auth.controllers.js";
const router = express.Router(); // This is the express router
dotenv.config();
// this for auth post is becoz we are getting info form user

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
export default router;