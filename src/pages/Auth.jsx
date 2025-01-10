import React, { useState , useContext} from 'react';
import { Link } from 'react-router-dom';
import { validateEmail, validatePassword } from '../utils/utils'; // Import validation functions
import axios from 'axios';
import { AuthContext } from '../context/authContext';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const Auth = () => {
  const { login } = useContext(AuthContext); // Access login function from context
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validate email
    // const emailError = validateEmail(email);
    // if (emailError) newErrors.email = emailError;

    // Validate password
    const passwordError = validatePassword(password);
    if (passwordError) newErrors.password = passwordError;

    // If there are errors, set them
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post(`http://localhost:4000/api/v1/auth/login`, {
        password,
        username
      });

      if (response.data.status === 'Ok') {
        const user = response.data.user; // Extract user and token
        const token = response.data.user.token;
        login(user, token); // Save user and token in context
        toast.success("Login successful!"); // Success toast
        console.log(user,token);
        window.location.href = '/';
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed. Please try again."); // Error toast
      console.error('Error logging in:', error.response?.data || error.message);
    }
  };


  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-800">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl overflow-hidden border-4 border-blue-400 dark:border-blue-800">
        <div className="px-8 py-10 md:px-10">
          <h2 className="text-4xl font-extrabold text-center text-zinc-800 dark:text-white">Welcome Back!</h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mt-3">We missed you, sign in to continue.</p>
          
          <div className="mt-10">
          <div className="mt-10">
                <div className="relative">
                  <label className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200" htmlFor="signin-username">Username</label>
                  <input
                    placeholder="yourusername"
                    value={username} // Ensure `username` state is being used
                    onChange={(e) => setUsername(e.target.value)} // Update the `username` state
                    className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                    name="username"
                    id="signin-username"
                    type="text"
                  />
                  {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>} {/* Display error if username validation fails */}
                </div>
              </div>

            
            <div className="mt-6">
              <label className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200" htmlFor="signin-password">Password</label>
              <input
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                name="password"
                id="signin-password"
                type="password"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-800"
              >
                Let's Go
              </button>
            </div>
          </div>
        </div>
        
        <div className="px-8 py-4 bg-blue-200 dark:bg-zinc-800">
          <div className="text-sm text-blue-900 dark:text-blue-300 text-center">
            Don't have an account? <Link to="/Signup" className="font-medium underline">Sign up</Link>
          </div>
        </div>

        <div className="px-8 py-4 bg-blue-200 dark:bg-zinc-800">
          <div className="text-sm text-blue-900 dark:text-blue-300 text-center">
            <Link to="/ForgotPassword" className="font-medium underline">Forgot Password</Link>
            <Link to="/ResetPassword" className="font-medium underline mx-4">Reset Password</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Auth;
