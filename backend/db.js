import mongoose from "mongoose";

  async function connectToDB(){
        // await mongoose.connect("mongodb+srv://kapilkant:83k1qnqKZ6SIYd5z@cluster0.yahej7z.mongodb.net/paytm") ;
          await mongoose.connect("mongodb+srv://jaiswalpratham31:auWR4KKzcqd5SSH7@cluster0.61kmx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0") ;
            console.log("successfully connected to the database");
  }

            connectToDB();

       const userSchema= mongoose.Schema({
                username:String,
                firstname:String,
                lastname:String,
                password:String,
        })

       const accountSchema=new mongoose.Schema({

            userId:{
                 type:mongoose.Schema.Types.ObjectId,
                   ref:'Users',
                   required:true,
            },
            balance:{
                  type:Number,
                 required:true,
            }

       })

        const Account=mongoose.model('Account',accountSchema);
        const Users=mongoose.model("Users",userSchema);
        
   export {Users,Account};

    




