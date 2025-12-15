// Simple analytics utility for tracking user interactions
class Analytics {
    constructor() {
        this.events = [];
        this.sessionId = this.generateSessionId();
        this.startTime = Date.now();
    }

    generateSessionId() {
        return 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    }

    track(eventName, properties = {}) {
        const event = {
            name: eventName,
            properties: {
                ...properties,
                sessionId: this.sessionId,
                timestamp: Date.now(),
                url: window.location.href,
                userAgent: navigator.userAgent
            }
        };

        this.events.push(event);

        // Log to console for development
        console.log('Analytics Event:', event);

        // Here you would typically send to your analytics service
        // Example: this.sendToAnalytics(event);
    }

    trackPageView(pageName) {
        this.track('page_view', {
            page: pageName,
            title: document.title
        });
    }

    trackButtonClick(buttonName, location) {
        this.track('button_click', {
            button: buttonName,
            location: location
        });
    }

    trackFormSubmission(formType, success = true) {
        this.track('form_submission', {
            form_type: formType,
            success: success
        });
    }

    trackScrollDepth(percentage) {
        this.track('scroll_depth', {
            percentage: percentage
        });
    }

    trackTimeOnPage() {
        const timeSpent = Date.now() - this.startTime;
        this.track('time_on_page', {
            duration_ms: timeSpent,
            duration_seconds: Math.round(timeSpent / 1000)
        });
    }

    // Method to send events to external analytics service
    sendToAnalytics(event) {
        // Example implementation for Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', event.name, event.properties);
        }

        // Example for custom analytics endpoint
        // fetch('/api/analytics', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(event)
        // });
    }

    getSessionData() {
        return {
            sessionId: this.sessionId,
            events: this.events,
            totalEvents: this.events.length,
            sessionDuration: Date.now() - this.startTime
        };
    }
}

// Create global analytics instance
const analytics = new Analytics();

// Track page load
analytics.trackPageView('home');

// Track scroll depth
let maxScrollDepth = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
        if (scrollPercent % 25 === 0) { // Track at 25%, 50%, 75%, 100%
            analytics.trackScrollDepth(scrollPercent);
        }
    }
});

// Track time on page when user leaves
window.addEventListener('beforeunload', () => {
    analytics.trackTimeOnPage();
});

export default analytics;
