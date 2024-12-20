import React, { useState } from 'react';
import { validateEmail } from '../utils/utils'; // Import the validation function

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset the feedback messages on new submission
    setError('');
    setFeedbackMessage('');

    // Validate email
    const emailError = validateEmail(email);
    if (emailError) {
      setError(emailError);
      return;
    }

    setLoading(true);

    // Simulate an API call for password reset
    try {
      // Simulate an async operation, e.g., calling an API
      const successMessage = 'OTP has been sent to your email!';
      // Replace the above message with the actual response message
      setFeedbackMessage(successMessage);

      // Uncomment this if you want to simulate the loading state
       setTimeout(() => {
         setLoading(false);
         setFeedbackMessage('OTP has been sent to your email!');
       }, 2000); // Simulating a 2-second API delay
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
            Forgot Password?
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mt-3">
            It's Ok! Let's make a new one!
          </p>
          <div className="mt-10">
            <div className="relative">
              <label className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200" htmlFor="email">Email</label>
              <input
                placeholder="you@example.com"
                className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                name="email"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
            <div className="mt-10">
              <button
                className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-800"
                type="submit"
                disabled={loading} // Disable button during loading
              >
                {loading ? 'Sending...' : 'Lets Go'}
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
