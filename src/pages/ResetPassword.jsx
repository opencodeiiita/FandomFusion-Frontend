import React, { useState } from 'react';
import { validatePassword } from '../utils/utils'; // Import the password validation function

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset feedback messages
    setError('');
    setFeedbackMessage('');

    // Validate password and confirm password
    if (password !== confirmPassword) {
      setError("Passwords don't match!");
      return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    setLoading(true);

    // Simulate an API call for password reset
    try {
      // Simulate async operation (e.g., API call to reset password)
      const successMessage = 'Password reset successfully!';
      // Replace the above message with the actual response message
      setFeedbackMessage(successMessage);
    } catch (error) {
      setFeedbackMessage('Some error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl overflow-hidden border-4 border-blue-400 dark:border-blue-800">
        <div className="px-8 py-10 md:px-10">
          <h2 className="text-4xl font-extrabold text-center text-zinc-800 dark:text-white">
            Don't Like The Last One?
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mt-3">
            It's Ok! Let's make a new one!
          </p>
          <div className="mt-10">
            <div className="mt-6">
              <label className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200" htmlFor="password">Password</label>
              <input
                placeholder="••••••••"
                className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                name="password"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-6">
              <label className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200" htmlFor="confirm-password">Confirm Password</label>
              <input
                placeholder="••••••••"
                className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                name="confirm-password"
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="mt-10">
              <button
                className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-800"
                type="submit"
                disabled={loading} // Disable the button during loading
              >
                {loading ? 'Resetting...' : "Let's Go"}
              </button>
            </div>

            {/* Feedback Message */}
            {feedbackMessage && (
              <div className="mt-4 text-center">
                <p
                  className={`text-sm ${
                    feedbackMessage.includes('error')
                      ? 'text-red-500'
                      : 'text-green-500'
                  }`}
                >
                  {feedbackMessage}
                </p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mt-2 text-center">
                <p className="text-sm text-red-500">{error}</p>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
