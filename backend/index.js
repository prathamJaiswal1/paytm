import  express from "express";
import mainRouter from "./routes/index.js";
import cors from "cors";

  const app=express();
    const port=3000;

             app.use(express.json());  
             app.use(cors());
             app.use("/api/v1",mainRouter);


app.listen(port,()=>{
      console.log(`app listening on the port ${port}`);
}) 



