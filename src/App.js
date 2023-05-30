import Aboout from "./components/Aboout";
import Collections from "./components/Collections";
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
    </div>
  );
}

export default App;
