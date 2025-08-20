import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { RiErrorWarningLine, RiRefreshLine } from '@remixicon/react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false, 
            error: null, 
            errorInfo: null 
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });

        // Log error to console in development
        console.error('ErrorBoundary caught an error:', error, errorInfo);
        
        // Here you would typically send error to logging service
        // Example: logErrorToService(error, errorInfo);
    }

    handleReload = () => {
        window.location.reload();
    };

    handleReset = () => {
        this.setState({ 
            hasError: false, 
            error: null, 
            errorInfo: null 
        });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-black flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-md w-full bg-neutral-900 border border-neutral-700 rounded-xl p-8 text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                            <RiErrorWarningLine className="w-8 h-8 text-white" />
                        </motion.div>
                        
                        <h1 className="text-2xl font-bold text-white mb-4">
                            Oops! Something went wrong
                        </h1>
                        
                        <p className="text-neutral-300 mb-6">
                            We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
                        </p>
                        
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <details className="mb-6 text-left">
                                <summary className="text-red-400 cursor-pointer mb-2">
                                    Error Details (Development)
                                </summary>
                                <div className="bg-neutral-800 p-4 rounded-lg text-xs text-neutral-300 overflow-auto max-h-40">
                                    <div className="mb-2">
                                        <strong>Error:</strong> {this.state.error.toString()}
                                    </div>
                                    <div>
                                        <strong>Stack Trace:</strong>
                                        <pre className="whitespace-pre-wrap">
                                            {this.state.errorInfo.componentStack}
                                        </pre>
                                    </div>
                                </div>
                            </details>
                        )}
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button
                                variant="outline"
                                onClick={this.handleReset}
                                className="flex-1"
                            >
                                Try Again
                            </Button>
                            <Button
                                variant="primary"
                                onClick={this.handleReload}
                                className="flex-1"
                            >
                                <RiRefreshLine className="w-4 h-4 mr-2" />
                                Reload Page
                            </Button>
                        </div>
                        
                        <p className="text-xs text-neutral-500 mt-4">
                            Error ID: {Date.now().toString(36)}
                        </p>
                    </motion.div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;