import Aboout from "./components/Aboout";
import Collections from "./components/Collections";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InstaFeed from "./components/InstaFeed";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Collections />
      <Aboout />
      <InstaFeed />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
