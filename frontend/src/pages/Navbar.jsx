import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Navbar = ({ name }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white p-3 shadow-lg fixed w-full z-10">
      <div className=" cursor-pointer container mx-auto flex justify-between items-center">
        <div onClick={()=>{
            navigate("/");
        }} className="text-black text-2xl font-bold tracking-wide">
          CashFlow
        </div>
        <ul className="flex space-x-8 items-center">
          <li className="relative text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 ease-in-out cursor-pointer">
            <button
              onClick={toggleDropdown}
              className="focus:outline-none"
            >
              Services
            </button>
            {dropdownOpen && (
              <ul className="absolute bg-white mt-2 rounded-md shadow-lg w-40">
                <li className="text-black hover:bg-gray-100 px-4 py-2 transition-all duration-300 ease-in-out rounded-t-md cursor-pointer">
                  Service 1
                </li>
                <li className="text-black hover:bg-gray-100 px-4 py-2 transition-all duration-300 ease-in-out cursor-pointer">
                  Service 2
                </li>
                <li className="text-black hover:bg-gray-100 px-4 py-2 transition-all duration-300 ease-in-out rounded-b-md cursor-pointer">
                  Service 3
                </li>
              </ul>
            )}
          </li>
          <li className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 ease-in-out cursor-pointer">
            CashFlow for Consumers
          </li>
          <li className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 ease-in-out cursor-pointer">
            CashFlow for Business
          </li>
          <li className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 ease-in-out cursor-pointer">
            Investor Relations
          </li>
          <li className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 ease-in-out cursor-pointer">
            Company Careers
          </li>
        </ul>

        {name == "" ? (
          <>
            <div className="flex items-center space-x-4">
              <button onClick={() => {
                navigate("/signin");
              }} className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-all duration-300 ease-in-out cursor-pointer">
                Sign In
              </button>
              <button onClick={() => {
                navigate("/signup");
              }} className="bg-orange-500 text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600 transition-all duration-300 ease-in-out cursor-pointer">
                Sign Up
              </button>
            </div>
          </>
        ) : (
          <>
            <div onClick={()=>{
                 navigate("/dashboard")
            }} className=" cursor-pointer bg-orange-500 text-white px-4 py-2 rounded-full font-medium flex items-center space-x-2">
              <span>Hello, {name}</span>
            </div>
          </>
        )}

      </div>

    </nav>
  );
};






