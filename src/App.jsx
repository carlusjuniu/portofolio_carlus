import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About";
import SpotifyAlbumCard from "./components/SpotifyAlbumCard";
import { Buffer } from "buffer";
import Work from "./pages/work";

window.Buffer = Buffer;

const App = () => {
  const location = useLocation();

  return (
    <>
    <div className="bg-black">
      <Navbar />
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
      <Route path="/" element={<About />} /> 
      <Route path="/work" element={<Work />} />
      </Routes>
      </AnimatePresence>
      </div>
    </>
  );
};

export default App;
