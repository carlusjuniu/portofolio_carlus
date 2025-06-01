import Navbar from "./components/Navbar/Navbar";
import About from "./components/About";
import SpotifyAlbumCard from "./components/SpotifyAlbumCard";
import { Buffer } from "buffer";

window.Buffer = Buffer;


const App = () => {

  return (
    <>
      <Navbar />
      <SpotifyAlbumCard />
      <About />
    </>
  );
};

export default App;
