import  express  from "express";
const router=express.Router();
import {Account, Users} from "../db.js";
import zod from "zod";
import jwt from "jsonwebtoken";
import JWT_SECRET from "../config.js";
import authMiddleware from "../middleware.js";


      const signupBody=zod.object({
              username:zod.string().email(),
              firstname:zod.string(),
              lastname:zod.string(),
              password:zod.string(),
      })


       router.post("/signup",async(req,res,next)=>{
 
                const {success}=signupBody.safeParse(req.body);
                      console.log(req.body);

                   if(!success){

                          return res.status(411).json({
                                "msg":"incorrect inputs"
                          })

                   }

           const existingUser=await Users.findOne({
                username:req.body.username
           })        


              if(existingUser){

                     return res.status(411).json({
                          "msg":"user already present"
                     })

              }


             const user= await Users.create({
                  username:req.body.username,
                  firstname:req.body.firstname,
                  lastname:req.body.lastname,
                  password:req.body.password,
               })


                 await Account.create({
                     userId:user._id,
                     balance: 1+Math.random()*10000,
                  })

               

                 const token=jwt.sign({
                    userId:user._id,
                 },JWT_SECRET);
           
                   res.json({
                        "msg":"user created successfully",
                        user:user,
                        token:token,
                   })

        
       })

          const signinBody=zod.object({
                  username:zod.string().email(),
                  password:zod.string(),
          })


      router.post("/signin",async(req,res,next)=>{
           
            const {success}=signinBody.safeParse(req.body);

               if(!success){
                   return res.status(411).json({
                       "msg":"incorrect fileds",  
                    })
               }

           const user=await Users.findOne({
              username:req.body.username,
              password:req.body.password,
           })
           
             if(!user) {
                   return res.status(411).json({
                        "msg":"no user present corresponding to username",
                    })
             }

            
                   const token=jwt.sign({
                       userId:user._id, 
                   },JWT_SECRET)

             

               res.status(200).json({
                    "msg":"user logged in successfully",
                      user:user,
                         token,
               })

      })

   
          const updateBody=zod.object({
                   firstname:zod.string().optional(),
                   lastname:zod.string().optional(),
                   password:zod.string().optional(),
          })

            router.put("/",authMiddleware,async(req,res,next)=>{
               
                const {success}=updateBody.safeParse(req.body)

                  //   console.log(req.userId);

                     if(!success){
                          res.status(411).json({
                              message:"Error while updating information",
                          })
                     }

              


                  try {
                   
                          const updateFields = {};
                     if (req.body.firstname) updateFields.firstname = req.body.firstname;
                     if (req.body.lastname) updateFields.lastname = req.body.lastname;
                     if (req.body.password) updateFields.password = req.body.password;
             
                     // Find and update the user document
                     const user = await Users.findOneAndUpdate(
                         { _id: req.userId },
                         { $set: updateFields },
                         { new: true }
                     );
             
                     if (!user) {
                         return res.status(404).json({
                             message: "User not found",
                         });
                     }
             
                     res.json({
                         message: "Updated successfully",
                         user,
                     });
                 } catch (error) {
                     console.error("Error while updating user:", error);
                     res.status(500).json({
                         message: "Internal Server Error",
                     });
                 }

            })


           router.get("/bulk", async (req, res) => {

               const filter = req.query.filter || "";
           
                const users = await Users.find({
                   $or: [{
                       firstname: {
                           "$regex": filter
                       }
                   }, {
                       lastname: {
                           "$regex": filter
                       }
                   }]
               })
           
               res.json({
                   user: users.map(user => ({
                       username: user.username,
                       firstname: user.firstname,
                       lastname: user.lastname,
                       password:user.password,
                         _id: user._id
                   }))
               })
           })




export default router;