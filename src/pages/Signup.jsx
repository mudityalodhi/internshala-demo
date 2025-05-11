import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: 'yes',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, redirect to Account page with mock data
    if (
      form.fullName &&
      form.phone &&
      form.email &&
      form.password &&
      form.company
    ) {
      navigate('/account', { state: form });
    }
  };

  return (
    <div className="pt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Create your PopX account</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        {[
          { label: 'Full Name', name: 'fullName' },
          { label: 'Phone number', name: 'phone' },
          { label: 'Email address', name: 'email' },
          { label: 'Password', name: 'password', type: 'password' },
          { label: 'Company name', name: 'company' },
        ].map((field) => (
          <div key={field.name}>
            <label className="text-xs font-medium text-[#6C25FF]">
              {field.label} *
            </label>
            <input
              type={field.type || 'text'}
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              placeholder={field.label}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded outline-none"
              required
            />
          </div>
        ))}

        <div>
          <label className="text-xs font-medium text-[#6C25FF] block mb-1">
            Are you an Agency? *
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={form.agency === 'yes'}
                onChange={handleChange}
                className="accent-[#6C25FF]"
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={form.agency === 'no'}
                onChange={handleChange}
                className="accent-[#6C25FF]"
              />
              No
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#6C25FF] text-white font-semibold py-2 rounded"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
