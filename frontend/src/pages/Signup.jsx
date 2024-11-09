import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useState } from "react";
import axios from "axios";


export const Signup = ({setValid}) => {

    const navigate = useNavigate();

        const [firstname,setFirstName]=useState("");
        const [lastname,setLastName]=useState("");
        const [username,setUserName]=useState("");
        const [password,setPassword]=useState("");

    
    return (

        <div>

            <Navbar name={""}></Navbar>

            <div className="flex justify-center items-center">

                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-28 w-96">

                    <div >
                        <h1 className="text-2xl font-bold mb-2 text-center ">Sign Up</h1>
                        <p className="text-gray-600 mb-6 text-center">Enter your information to create an account</p>
                    </div>



                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">First Name:</label>
                        <input onChange={(e)=>{
                            setFirstName(e.target.value)
                        }} className="border rounded shadow-md bg-gray-200  w-full py-2 px-3" type="text" id="firstName" placeholder="John" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">Last Name:</label>
                        <input onChange={(e)=>{
                              setLastName(e.target.value)
                        }} className=" border rounded shadow-md bg-gray-200  w-full py-2 px-3 " type="text" id="lastName" placeholder="Doe" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
                        <input onChange={(e)=>{
                            setUserName(e.target.value)
                        }} className="border rounded shadow-md bg-gray-200  w-full py-2 px-3" type="text" id="email" placeholder="johnDoe@gmail.com" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password:</label>
                        <input onChange={(e)=>{
                            setPassword(e.target.value)
                        }} className="border rounded shadow-md bg-gray-200  rounded w-full py-2 px-3" type="password" id="password" placeholder="********" />
                    </div>

                    <div className="flex justify-center items-center">
                        <button onClick={async() => {
                            try {

                                const res = await axios.post("http://localhost:3000/api/v1/user/signup", {
                                    username,
                                    firstname,
                                    lastname,
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
                                    console.log(e);
                                alert("please provide correct email and password");
                                navigate("/signup");
                            }

                        }} className="bg-blue-500 hover:bg-blue-700 border shadow-md text-white font-bold py-2 px-4 rounded" type="button">
                            Sign Up
                        </button>
                    </div>

                    <div className="flex justify-center items-center">
                        <p className="mt-4 text-gray-600">Already have an account? <button onClick={(e) => {
                            navigate("/");
                        }} className="text-blue-500 cursor-pointer">Sign in</button></p>
                    </div>


                </div>

            </div>

            <Footer></Footer>

        </div>


    )

}