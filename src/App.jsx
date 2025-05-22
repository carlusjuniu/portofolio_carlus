import Navbar from "./components/Navbar/Navbar";
import About from "./components/About";
import SpotifyAlbumCard from "./components/SpotifyAlbumCard";

const App = () => {
  return (
    <>
      <Navbar />
        <SpotifyAlbumCard result={result} loading={loading} />
      <About />
    </>
  );
};

export default App;
