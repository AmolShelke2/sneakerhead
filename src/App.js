import Aboout from "./components/Aboout";
import Collections from "./components/Collections";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Collections />
      <Aboout />
    </div>
  );
}

export default App;
