import { motion } from 'framer-motion';
import { RiTwitterXLine, RiFacebookLine, RiLinkedinLine, RiWhatsappLine, RiLinkM } from '@remixicon/react';
import Button from './Button';
import analytics from '../utils/analytics';

const SocialShare = ({ 
    url = window.location.href, 
    title = "Check out Area Games - The Ultimate Gaming Stream Toolkit",
    description = "Optimize your streams, track real-time analytics, and engage your audience effortlessly.",
    className = ""
}) => {
    const shareData = {
        title,
        text: description,
        url
    };

    const socialPlatforms = [
        {
            name: 'Twitter',
            icon: RiTwitterXLine,
            url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
            color: 'hover:bg-blue-500'
        },
        {
            name: 'Facebook',
            icon: RiFacebookLine,
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            color: 'hover:bg-blue-600'
        },
        {
            name: 'LinkedIn',
            icon: RiLinkedinLine,
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            color: 'hover:bg-blue-700'
        },
        {
            name: 'WhatsApp',
            icon: RiWhatsappLine,
            url: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
            color: 'hover:bg-green-500'
        }
    ];

    const handleShare = async (platform) => {
        analytics.trackButtonClick(`share_${platform.toLowerCase()}`, 'social_share');
        
        if (platform === 'native' && navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (error) {
                console.log('Share cancelled or failed:', error);
            }
        } else {
            const platformData = socialPlatforms.find(p => p.name.toLowerCase() === platform.toLowerCase());
            if (platformData) {
                window.open(platformData.url, '_blank', 'width=600,height=400');
            }
        }
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(url);
            analytics.trackButtonClick('copy_link', 'social_share');
            // You could show a toast notification here
            alert('Link copied to clipboard!');
        } catch (error) {
            console.error('Failed to copy:', error);
        }
    };

    return (
        <div className={`flex flex-col space-y-4 ${className}`}>
            <h3 className="text-lg font-semibold text-white">Share Area Games</h3>
            
            <div className="flex flex-wrap gap-3">
                {socialPlatforms.map((platform) => {
                    const IconComponent = platform.icon;
                    return (
                        <motion.button
                            key={platform.name}
                            onClick={() => handleShare(platform.name)}
                            className={`p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-300 transition-all duration-200 ${platform.color} hover:text-white hover:border-transparent`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            title={`Share on ${platform.name}`}
                        >
                            <IconComponent className="w-5 h-5" />
                        </motion.button>
                    );
                })}
                
                <motion.button
                    onClick={copyToClipboard}
                    className="p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-300 hover:bg-teal-500 hover:text-white hover:border-transparent transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title="Copy link"
                >
                    <RiLinkM className="w-5 h-5" />
                </motion.button>
            </div>

            {/* Native share button for mobile devices */}
            {navigator.share && (
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('native')}
                    className="w-full sm:w-auto"
                >
                    Share via...
                </Button>
            )}
        </div>
    );
};

export default SocialShare;