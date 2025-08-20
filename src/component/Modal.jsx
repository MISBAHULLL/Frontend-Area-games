import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseLine } from '@remixicon/react';

const Modal = ({ isOpen, onClose, title, children }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                    
                    {/* Modal Content */}
                    <motion.div
                        className="relative bg-neutral-900 border border-neutral-700 rounded-xl p-6 w-full max-w-md mx-auto"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", duration: 0.3 }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-semibold text-white">{title}</h3>
                            <button
                                onClick={onClose}
                                className="text-neutral-400 hover:text-white transition-colors p-1"
                            >
                                <RiCloseLine className="w-6 h-6" />
                            </button>
                        </div>
                        
                        {/* Content */}
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;