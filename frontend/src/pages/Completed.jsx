import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Completed = () => {
    
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-orange-400 via-white to-blue-500">
      <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
        <svg
          className="w-16 h-16 text-green-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2l4-4m1 9a9 9 0 110-18 9 9 0 010 18z"
          ></path>
        </svg>
        <h1 className="text-2xl font-bold text-black mb-4">Payment Successful</h1>
        <p className="text-lg text-gray-700 mb-6">Your payment has been completed successfully.</p>
        <button
          onClick={() => navigate('/dashboard')}
          className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition-all duration-300"
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
};


