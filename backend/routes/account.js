import express  from "express";
 import mongoose from "mongoose";
import authMiddleware from "../middleware.js";
import { Account } from "../db.js";

const router=express.Router();


  router.get("/balance",authMiddleware,async(req,res,next)=>{

        try{

               const userId=req.userId;

          const userAccount=await Account.findOne({
               userId,
          })

           res.status(200).json({
               msg:"the user balance is:",
               balance:userAccount.balance,
           })

        }catch(e){
              res.status(404).json({
                 msg:"error in finding user balance",
             })
        }
 
  })

 

   router.post("/transfer", authMiddleware, async (req, res) => {
      const session = await mongoose.startSession();

          session.startTransaction();
    const { amount, to } = req.body;

    // Fetch the accounts within the transaction
    const account = await Account.findOne({ userId: req.userId }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction

    await account.save();
    await toAccount.save();

    await session.commitTransaction();

   

    res.json({
          message: "transfer successful"
    });
    
   });



export default router;
