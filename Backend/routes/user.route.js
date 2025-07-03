import express from "express";
import { Router } from "express";
import {signUp,logIn} from "../controller/user.controller.js";

const router = Router();

router.post("/signup",signUp);
router.post("/login",logIn);

export default router;
