// utils.js

// Function to validate email
export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
      return "Email is required";
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };
  
  // Function to validate password
  export const validatePassword = (password) => {
    if (!password) {
      return "Password is required";
    }
    if (password.length < 6) {
      return "Password should be at least 6 characters long";
    }
    return "";
  };
  
  // Function to validate confirm password
  export const validateConfirmPassword = (password, confirmPassword) => {
    if (confirmPassword !== password) {
      return "Passwords do not match";
    }
    return "";
  };
  