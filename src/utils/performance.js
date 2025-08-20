// Performance monitoring utilities
class PerformanceMonitor {
    constructor() {
        this.metrics = {};
        this.observers = [];
        this.init();
    }

    init() {
        // Monitor Core Web Vitals
        this.observeLCP();
        this.observeFID();
        this.observeCLS();
        this.observeFCP();
        this.observeTTFB();
    }

    // Largest Contentful Paint
    observeLCP() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                this.metrics.lcp = lastEntry.startTime;
                console.log('LCP:', lastEntry.startTime);
            });
            
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
            this.observers.push(observer);
        }
    }

    // First Input Delay
    observeFID() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach((entry) => {
                    this.metrics.fid = entry.processingStart - entry.startTime;
                    console.log('FID:', entry.processingStart - entry.startTime);
                });
            });
            
            observer.observe({ entryTypes: ['first-input'] });
            this.observers.push(observer);
        }
    }

    // Cumulative Layout Shift
    observeCLS() {
        if ('PerformanceObserver' in window) {
            let clsValue = 0;
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach((entry) => {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                        this.metrics.cls = clsValue;
                        console.log('CLS:', clsValue);
                    }
                });
            });
            
            observer.observe({ entryTypes: ['layout-shift'] });
            this.observers.push(observer);
        }
    }

    // First Contentful Paint
    observeFCP() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach((entry) => {
                    if (entry.name === 'first-contentful-paint') {
                        this.metrics.fcp = entry.startTime;
                        console.log('FCP:', entry.startTime);
                    }
                });
            });
            
            observer.observe({ entryTypes: ['paint'] });
            this.observers.push(observer);
        }
    }

    // Time to First Byte
    observeTTFB() {
        if ('performance' in window && 'getEntriesByType' in performance) {
            const navigationEntries = performance.getEntriesByType('navigation');
            if (navigationEntries.length > 0) {
                const entry = navigationEntries[0];
                this.metrics.ttfb = entry.responseStart - entry.requestStart;
                console.log('TTFB:', this.metrics.ttfb);
            }
        }
    }

    // Memory usage (if available)
    getMemoryUsage() {
        if ('memory' in performance) {
            return {
                usedJSHeapSize: performance.memory.usedJSHeapSize,
                totalJSHeapSize: performance.memory.totalJSHeapSize,
                jsHeapSizeLimit: performance.memory.jsHeapSizeLimit
            };
        }
        return null;
    }

    // Network information (if available)
    getNetworkInfo() {
        if ('connection' in navigator) {
            return {
                effectiveType: navigator.connection.effectiveType,
                downlink: navigator.connection.downlink,
                rtt: navigator.connection.rtt,
                saveData: navigator.connection.saveData
            };
        }
        return null;
    }

    // Get all metrics
    getMetrics() {
        return {
            ...this.metrics,
            memory: this.getMemoryUsage(),
            network: this.getNetworkInfo(),
            timestamp: Date.now()
        };
    }

    // Performance recommendations
    getRecommendations() {
        const recommendations = [];
        
        if (this.metrics.lcp > 2500) {
            recommendations.push('LCP is slow. Consider optimizing images and reducing server response times.');
        }
        
        if (this.metrics.fid > 100) {
            recommendations.push('FID is high. Consider reducing JavaScript execution time.');
        }
        
        if (this.metrics.cls > 0.1) {
            recommendations.push('CLS is high. Ensure images and ads have dimensions set.');
        }
        
        if (this.metrics.fcp > 1800) {
            recommendations.push('FCP is slow. Consider optimizing critical rendering path.');
        }
        
        return recommendations;
    }

    // Cleanup observers
    disconnect() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers = [];
    }
}

// Create global performance monitor
const performanceMonitor = new PerformanceMonitor();

// Export for use in components
export default performanceMonitor;