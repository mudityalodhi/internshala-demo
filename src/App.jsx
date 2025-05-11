import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';

const App = () => {
  return (
    <Router>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-[375px] bg-white p-4 rounded shadow-md">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
