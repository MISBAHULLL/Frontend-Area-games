import { motion } from 'framer-motion';
import analytics from '../utils/analytics';

const Button = ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    onClick, 
    disabled = false,
    className = '',
    trackingName,
    trackingLocation,
    ...props 
}) => {
    const baseClasses = "font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
        primary: "bg-gradient-to-r from-red-400 to-rose-400 hover:from-red-600 hover:to-rose-700 text-white shadow-lg hover:shadow-rose-500/25 focus:ring-rose-500",
        secondary: "border-2 border-indigo-900 text-indigo-600 hover:bg-indigo-900 hover:text-white focus:ring-indigo-900",
        outline: "border-2 border-neutral-600 text-neutral-300 hover:border-indigo-900 hover:text-indigo-600 focus:ring-indigo-900"
    };
    
    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };
    
    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
    
    const handleClick = (e) => {
        if (trackingName) {
            analytics.trackButtonClick(trackingName, trackingLocation || 'unknown');
        }
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <motion.button
            className={classes}
            onClick={handleClick}
            disabled={disabled}
            whileHover={{ scale: disabled ? 1 : 1.05 }}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;