
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Positioning from "./components/Positioning";
import OpportunitySection from "./components/OpportunitySection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Positioning />
        <OpportunitySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
