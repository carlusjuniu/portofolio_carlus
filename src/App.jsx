import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import { Buffer } from "buffer";

window.Buffer = Buffer;

const App = () => {
  return (
    <div className="min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;
