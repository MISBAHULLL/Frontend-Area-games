import { useEffect } from 'react';

const SEO = ({ 
    title = "Area Games - The Ultimate Gaming Stream Toolkit", 
    description = "Optimize your streams, track real-time analytics, and engage your audience effortlessly. Perfect for Twitch, YouTube, and Trovo streamers.",
    keywords = "streaming, twitch, youtube, gaming, stream analytics, overlays, alerts, stream management",
    image = "/og-image.jpg",
    url = "https://AreaGames.com"
}) => {
    useEffect(() => {
        // Update document title
        document.title = title;
        
        // Update meta tags
        const updateMetaTag = (name, content, property = false) => {
            const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
            let element = document.querySelector(selector);
            
            if (!element) {
                element = document.createElement('meta');
                if (property) {
                    element.setAttribute('property', name);
                } else {
                    element.setAttribute('name', name);
                }
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Basic meta tags
        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);
        updateMetaTag('author', 'Streamerzz Team');
        updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

        // Open Graph tags
        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:image', image, true);
        updateMetaTag('og:url', url, true);
        updateMetaTag('og:type', 'website', true);
        updateMetaTag('og:site_name', 'Area Games', true);

        // Twitter Card tags
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:title', title);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', image);

        // Additional SEO tags
        updateMetaTag('robots', 'index, follow');
        updateMetaTag('theme-color', '#8b5cf6');

        // Structured data for better SEO
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Area Games",
            "description": description,
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Web",
            "offers": {
                "@type": "Offer",
                "price": "9.99",
                "priceCurrency": "USD",
                "priceValidUntil": "2025-12-31"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
            }
        };

        let scriptElement = document.querySelector('script[type="application/ld+json"]');
        if (!scriptElement) {
            scriptElement = document.createElement('script');
            scriptElement.type = 'application/ld+json';
            document.head.appendChild(scriptElement);
        }
        scriptElement.textContent = JSON.stringify(structuredData);

    }, [title, description, keywords, image, url]);

    return null; // This component doesn't render anything
};

export default SEO;