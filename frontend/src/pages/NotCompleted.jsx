import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotCompleted = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-orange-400 via-white to-blue-500">
      <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
        <svg
          className="w-16 h-16 text-red-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18.364 5.636l-12.728 12.728m0-12.728l12.728 12.728"
          ></path>
        </svg>
        <h1 className="text-2xl font-bold text-black mb-4">Payment Failed</h1>
        <p className="text-lg text-gray-700 mb-6">
          Your payment could not be completed due to insufficient funds or a slow service.
        </p>
        <button
          onClick={() => navigate('/dashboard')}
          className="bg-red-500 text-white px-6 py-3 rounded-md font-medium hover:bg-red-600 transition-all duration-300"
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
};


