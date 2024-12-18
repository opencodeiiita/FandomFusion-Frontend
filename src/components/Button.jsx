import React from "react";
import PropTypes from "prop-types";

const Button = ({ label }) => {
  return (
    <button
      className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg flex items-center justify-center"
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
