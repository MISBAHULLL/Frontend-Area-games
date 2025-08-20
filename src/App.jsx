import Navbar from "./component/navbar";
import HeroSection from "./component/HeroSection";
import HowItWorks from "./component/Works";
import Features from "./component/Features";
import Pricing from "./component/Pricing";
import StreamTesti from "./component/StreamTesti";

const App = () => {
  return (
    <main className="text-sm text-neutral-300 antialiased">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Features/>
      <Pricing/>
      <StreamTesti/>
    </main>
  );
}

export default App;
