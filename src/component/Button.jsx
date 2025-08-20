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
        primary: "bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-teal-500/25 focus:ring-teal-500",
        secondary: "border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white focus:ring-blue-500",
        outline: "border-2 border-neutral-600 text-neutral-300 hover:border-blue-500 hover:text-blue-400 focus:ring-blue-500"
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