import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { validateEmail, validatePassword, validateConfirmPassword } from '../utils/utils_signup'; // Import validation functions

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const newErrors = {};

    // Validate email
    const emailError = validateEmail(email);
    if (emailError) newErrors.email = emailError;

    // Validate password
    const passwordError = validatePassword(password);
    if (passwordError) newErrors.password = passwordError;

    // Validate confirm password
    const confirmPasswordError = validateConfirmPassword(password, confirmPassword);
    if (confirmPasswordError) newErrors.confirmPassword = confirmPasswordError;

    // If there are errors, set them in state
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Proceed with form submission if no errors (e.g., API call or routing)
      console.log('Form submitted');
    }
  };

  return (
    <div className='h-screen w-screen flex justify-center items-center bg-slate-800'>
      <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl overflow-hidden border-4 border-blue-400 dark:border-blue-800">
        <div className="px-8 py-10 md:px-10">
          <h2 className="text-4xl font-extrabold text-center text-zinc-800 dark:text-white">Hello There!</h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mt-3">Welcome to this new journey</p>
          <div className="mt-10">
            <div className="relative">
              <label className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200" htmlFor="signup-email">Email</label>
              <input
                placeholder="you@example.com"
                className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                name="email"
                id="signup-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="mt-6">
              <label className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200" htmlFor="signup-password">Password</label>
              <input
                placeholder="••••••••"
                className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                name="password"
                id="signup-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div className="mt-6">
              <label className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200" htmlFor="signup-confirm-password">Confirm Password</label>
              <input
                placeholder="••••••••"
                className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                name="confirmPassword"
                id="signup-confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>
            <div className="mt-10">
              <button
                className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-800"
                type="submit"
              >
                Let's Go
              </button>
            </div>
          </div>
        </div>
        <div className="px-8 py-4 bg-blue-200 dark:bg-zinc-800">
          <div className="text-sm text-blue-900 dark:text-blue-300 text-center">
            Already have an account? <Link to="/Auth" className="font-medium underline">Sign In</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
