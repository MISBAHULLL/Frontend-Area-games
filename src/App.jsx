import Navbar from "./component/navbar";
import HeroSection from "./component/HeroSection";
import HowItWorks from "./component/Works";

const App = () => {
  return (
    <main className="text-sm text-neutral-300 antialiased">
      <Navbar />
      <HeroSection />
      <HowItWorks />
    </main>
  );
}

export default App;
