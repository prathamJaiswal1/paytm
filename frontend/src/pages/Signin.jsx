import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";


export const Signin = ({ setValid }) => {

     const navigate = useNavigate();

     const [username, setUserName] = useState("");
     const [password, setPassword] = useState("");

     return (

          <div>

                <Navbar name={""}></Navbar>

               <div className="flex justify-center items-center ">

                    <div className="bg-white shadow-md rounded mt-24 px-8 pt-6 pb-8 w-96">

                         <div>
                              <h1 className="text-2xl font-bold mb-1 text-center ">Sign In</h1>
                              <p className="font-medium text-center text-gray-400 mb-6" >Enter your credential to sign in</p>
                         </div>

                         <div>
                              <label htmlFor="" className="block text-gray-700 font-bold mb-2">Email</label>
                              <input type="text" onChange={(e) => {
                                   setUserName(e.target.value);
                              }} className="border rounded shadow-md bg-gray-200 w-full py-2 px-3  mb-6" placeholder="...johndoe@gmail.com" />
                         </div>

                         <div>
                              <label htmlFor="" className="mb-2 block  text-gray-700 font-bold mb-2" >password</label>
                              <input onChange={(e) => {
                                   setPassword(e.target.value);
                              }} type="text" className="border rounded shadow-md bg-gray-200 rounded w-full py-2 px-3 mb-6" placeholder="******" />
                         </div>

                         <div className="flex justify-center items-center">
                              <button onClick={async (e) => {

                                   try {

                                        const res = await axios.post("http://localhost:3000/api/v1/user/signin", {
                                             username,
                                             password,
                                        })

                                        if (res.data.token) {
                                             setValid(true);
                                             navigate("/dashboard");
                                             localStorage.setItem("token", res.data.token);
                                             localStorage.setItem("name", res.data.user.firstname);
                                             localStorage.setItem("id", res.data.user._id);
                                        }

                                   } catch (e) {
                                        alert("please provide correct email and password");
                                        navigate("/");
                                   }



                              }} className="border rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 shadow-md mb-4">Sign In</button>
                         </div>

                         <div className="flex justify-center items-center">
                              <p className="text-gray-600">Does not have an account? <button onClick={(e) => {
                                   navigate("/signup")
                              }} className="cursor-pointer text-blue-500">Sign Up</button>  </p>
                         </div>

                    </div>


               </div>

                  <Footer></Footer>

          </div>


     )

}