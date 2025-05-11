import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Account = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state;

  // If user data isn't passed (e.g., page reload), send back to login
  if (!user) {
    return (
      <div className="text-center">
        <p className="mb-4 text-gray-600">No user data found.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-[#6C25FF] text-white font-semibold py-2 px-4 rounded"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="pt-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Account Settings</h2>
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
          className="w-14 h-14 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-md text-gray-900">{user.fullName}</h3>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
};

export default Account;
