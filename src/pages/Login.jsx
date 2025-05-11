import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // For now, just navigate to Account page after any login
    if (email && password) {
      navigate('/account');
    }
  };

  return (
    <div className="pt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Signin to your PopX account</h2>
      <p className="text-sm text-gray-500 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="text-xs font-medium text-[#6C25FF]">Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded outline-none"
            required
          />
        </div>

        <div>
          <label className="text-xs font-medium text-[#6C25FF]">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-300 text-white font-semibold py-2 rounded cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
