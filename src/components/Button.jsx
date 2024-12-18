import { forwardRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const combineClassNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const buttonVariants = (variant, size, additionalClasses) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const svgClasses = "[&_svg]:pointer-events-none [&_svg]:shrink-0";

  const variantClasses = {
    default:
      "bg-black/90 text-white shadow-md hover:shadow-lg active:shadow-sm transition-all duration-200",
    destructive:
      "bg-gradient-to-r from-red-600 to-red-500 text-white hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 shadow-md hover:shadow-lg active:shadow-sm transition-all duration-200",
    outline:
      "border border-gray-300 bg-white text-black hover:bg-gray-100 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 shadow-sm hover:shadow-md active:shadow-none transition-all duration-200",
    secondary:
      "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 shadow-md hover:shadow-lg active:shadow-sm transition-all duration-200",
    ghost:
      "hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-300 text-black shadow-none hover:shadow-sm active:shadow-inner transition-all duration-200",
    link:
      "text-blue-500 underline-offset-4 hover:underline shadow-none transition-all duration-200",
    success:
      "bg-gradient-to-r from-green-600 to-green-500 text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 shadow-md hover:shadow-lg active:shadow-sm transition-all duration-200",
    warning:
      "bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-semibold hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 shadow-md hover:shadow-lg active:shadow-sm transition-all duration-200",
    info:
      "bg-gradient-to-r from-sky-600 to-sky-500 text-white hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-400 shadow-md hover:shadow-lg active:shadow-sm transition-all duration-200",
    disabled:
      "bg-gradient-to-r from-gray-600 to-gray-500 text-gray-800 cursor-not-allowed shadow-none opacity-70",
  };
  

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };

  return combineClassNames(
    baseClasses,
    svgClasses,
    variantClasses[variant || "default"],
    sizeClasses[size || "default"],
    additionalClasses
  );
};

const Button = forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? motion.div : motion.button;

    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Component
          className={combineClassNames(
            buttonVariants(variant, size, className)
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);

Button.displayName = "Button";

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "default",
    "destructive",
    "outline",
    "secondary",
    "ghost",
    "link",
    "success",
    "warning",
    "info",
    "disabled",
  ]),
  size: PropTypes.oneOf(["default", "sm", "lg", "icon"]),
  asChild: PropTypes.bool,
};

Button.defaultProps = {
  className: "",
  variant: "default",
  size: "default",
  asChild: false,
};

export { Button };
