import { useEffect } from 'react';
import Navbar from "./component/navbar";
import HeroSection from "./component/HeroSection";
import HowItWorks from "./component/Works";
import Features from "./component/Features";
import Pricing from "./component/Pricing";
import StreamTesti from "./component/StreamTesti";
import Footer from "./component/footer";
import SEO from "./component/SEO";
import performanceMonitor from './utils/performance';

const App = () => {
  useEffect(() => {
    // Log performance metrics after component mount
    const timer = setTimeout(() => {
      const metrics = performanceMonitor.getMetrics();
      console.log('Performance Metrics:', metrics);
      
      const recommendations = performanceMonitor.getRecommendations();
      if (recommendations.length > 0) {
        console.log('Performance Recommendations:', recommendations);
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
      performanceMonitor.disconnect();
    };
  }, []);

  return (
    <>
      <SEO />
      <main className="min-h-screen bg-black text-sm text-neutral-300 antialiased">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Features/>
      <Pricing/>
      <StreamTesti/>
      <Footer/>
      </main>
    </>
  );
}

export default App;
