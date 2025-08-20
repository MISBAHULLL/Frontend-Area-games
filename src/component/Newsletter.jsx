import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { RiMailLine } from '@remixicon/react';
import analytics from '../utils/analytics';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);
        
        // Simulate API call
        setTimeout(() => {
            analytics.trackFormSubmission('newsletter_signup', true);
            setIsSubscribed(true);
            setIsSubmitting(false);
            setEmail('');
        }, 1500);
    };

    if (isSubscribed) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-r from-rose-400/20 to-pink-400/20 border border-red-400/30 rounded-xl p-8 text-center"
            >
                <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <RiMailLine className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                    Thanks for subscribing!
                </h3>
                <p className="text-neutral-300">
                    You'll receive our latest updates and streaming tips.
                </p>
            </motion.div>
        );
    }

    return (
        <div className="bg-gradient-to-r from-rose-400/20 to-pink-400/20 border border-red-400/30 rounded-xl p-8">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                    Stay Updated
                </h3>
                <p className="text-neutral-300">
                    Get the latest streaming tips, feature updates, and exclusive content delivered to your inbox.
                </p>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-rose-400 focus:outline-none transition-colors"
                        required
                    />
                </div>
                <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting || !email}
                    className="sm:w-auto"
                    trackingName="newsletter_subscribe"
                    trackingLocation="footer"
                >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </Button>
            </form>
            
            <p className="text-xs text-neutral-400 mt-3 text-center">
                No spam, unsubscribe at any time. We respect your privacy.
            </p>
        </div>
    );
};

export default Newsletter;