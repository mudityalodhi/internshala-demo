import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValid = email.trim() && password.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      navigate('/account', {
        state: { email, fullName: 'Test User' }
      });
    }
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-[#FAFAFA] px-4 pb-10 pt-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Signin to your PopX account</h2>
        <p className="text-sm text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Email Input Field */}
        <div className="mb-4 relative">
          <label className="text-xs font-medium text-[#6C25FF] absolute left-3 top-2 z-10 bg-[#FAFAFA] px-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-4 px-3 py-3 border border-gray-300 rounded text-sm outline-none placeholder-transparent"
            required
          />
        </div>

        {/* Password Input Field */}
        <div className="mb-6 relative">
          <label className="text-xs font-medium text-[#6C25FF] absolute left-3 top-2 z-10 bg-[#FAFAFA] px-1">
            Password
          </label>
          <input
            type="password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-4 px-3 py-3 border border-gray-300 rounded text-sm outline-none placeholder-transparent"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-3 rounded text-white font-semibold text-sm ${isValid ? 'bg-[#6C25FF]' : 'bg-[#CBCBCB]'}`}
          disabled={!isValid}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
