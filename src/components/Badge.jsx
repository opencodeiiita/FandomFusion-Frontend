import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const colorVariants = {
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-gray-500 text-white',
  success: 'bg-green-500 text-white',
  danger: 'bg-red-500 text-white',
  warning: 'bg-yellow-500 text-black',
  info: 'bg-cyan-500 text-white',
}

const sizeVariants = {
  sm: 'text-xs px-2 py-1',
  md: 'text-sm px-3 py-1',
  lg: 'text-base px-4 py-2',
}

export const Badge = ({ 
  text, 
  color = 'primary', 
  size = 'md' 
}) => {
  return (
    <motion.span
      className={`inline-block rounded-full font-semibold ${colorVariants[color]} ${sizeVariants[size]}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30,
        mass: 1,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.span>
  )
}

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
}

