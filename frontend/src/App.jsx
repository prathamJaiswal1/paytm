
import { BrowserRouter,Routes,Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { Signup } from "./pages/signup"
import { Signin } from "./pages/signin"
import { Dashboard } from "./pages/Dashboard"
import { SendMoney } from "./pages/Sendmoney"
import { useState } from "react"
import { Completed } from "./pages/Completed"
import { NotCompleted } from "./pages/NotCompleted"



function App() {

    const [isValid,setValid]=useState(false);

  return (
    <BrowserRouter>
         <Routes>
         <Route path="/" element={<Home />} ></Route>
         <Route path="/Signin" element={ <Signin setValid={setValid} /> } ></Route>
         <Route path="/signup" element={ <Signup setValid={setValid}/> } ></Route>
          <Route path="/dashboard" element={ <Dashboard/> } ></Route>
           <Route path="/send" element={ <SendMoney/> } ></Route>

          <Route path="completed" element={<Completed/>} ></Route>
          <Route path="notcompleted" element={<NotCompleted/>} ></Route>

         </Routes>
    </BrowserRouter>
  )
}

export default App
