import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const LazyImage = ({ 
    src, 
    alt, 
    className = '', 
    placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PC9zdmc+',
    ...props 
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [error, setError] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setError(true);
        setIsLoaded(true);
    };

    return (
        <div ref={imgRef} className={`relative overflow-hidden ${className}`} {...props}>
            {/* Placeholder */}
            <motion.img
                src={placeholder}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    isLoaded ? 'opacity-0' : 'opacity-100'
                }`}
                initial={{ opacity: 1 }}
                animate={{ opacity: isLoaded ? 0 : 1 }}
            />
            
            {/* Actual image */}
            {isInView && (
                <motion.img
                    src={error ? placeholder : src}
                    alt={alt}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                        isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={handleLoad}
                    onError={handleError}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                />
            )}
            
            {/* Loading indicator */}
            {!isLoaded && isInView && (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-800">
                    <motion.div
                        className="w-8 h-8 border-2 border-red-400 border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            )}
        </div>
    );
};

export default LazyImage;