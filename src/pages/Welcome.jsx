import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-end min-h-screen px-4 pb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to PopX</h1>
        <p className="text-sm text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <button
          className="w-full bg-[#6C25FF] text-white font-semibold py-3 rounded mb-3"
          onClick={() => navigate('/signup')}
        >
          Create Account
        </button>
        <button
          className="w-full bg-[#F7F8F9] text-[#6C25FF] font-semibold py-3 rounded"
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Welcome;
