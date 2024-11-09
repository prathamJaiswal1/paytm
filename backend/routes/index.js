import express from "express";
import userRouter from "./user.js"
import accountRouter from "./account.js";
import authRouter from "./auth.js"



const router=express.Router();
router.use("/user",userRouter);
router.use("/account",accountRouter);
router.use("/auth",authRouter);




 export default router;