import express  from "express";
import authMiddleware from "../middleware.js";

const router =express.Router();

router.post("/",authMiddleware,(req,res)=>{

           if(req.userId){
                return res.json({
                "msg":"true",
               })
           }
 
           return res.json({
              "msg":"false",
           })

})

export default router    