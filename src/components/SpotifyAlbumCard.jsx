import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import getNowPlayingItem from '../services/SpotifyAPI';

const SpotifyAlbumCard = (props) => {
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [result, setResult] = useState({
    isPlaying: false,
    title: '',
    artist: '',
    albumImageUrl: ''
  });

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const data = await getNowPlayingItem(
          props.client_id,
          props.client_secret,
          props.refresh_token
        );
        setResult(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching now playing:", error);
        setLoading(false);
      }
    };

    fetchNowPlaying();
    const intervalId = setInterval(fetchNowPlaying, 120000);
    return () => clearInterval(intervalId);
  }, [props.client_id, props.client_secret, props.refresh_token]);

  const renderListeningNowSection = () => (
    <div
      onClick={() => setExpanded(!expanded)}
      className="fixed top-4 left-4 flex items-center backdrop-blur-md bg-[#111]/70 text-white border border-white/10 shadow-md cursor-pointer z-50 rounded-full transition-all pl-2 py-[6px]"
    >
      {loading ? (
        <div className="w-12 h-12 flex justify-center items-center">
          <p className="text-xs text-white">...</p>
        </div>
      ) : result.isPlaying ? (
        <>
          <div className="relative w-12 h-12 flex-shrink-0">
            <img
              src={result.albumImageUrl}
              alt="Album Cover"
              className="w-full h-full rounded-full object-cover animate-spin-slow"
            />
            <div className="absolute inset-0 flex items-center justify-center gap-[3px]">
              <span className="w-[2px] h-3 bg-white animate-equalize [animation-delay:-0.3s]" />
              <span className="w-[2px] h-5 bg-white animate-equalize [animation-delay:-0.15s]" />
              <span className="w-[2px] h-3 bg-white animate-equalize" />
            </div>
          </div>

          <motion.div
            layout
            transition={{ layout: { duration: 0.4, type: 'spring' } }}
            className={`ml-3 transition-all duration-300 ease-in-out ${expanded ? 'max-w-[200px]' : 'max-w-0'} overflow-hidden`}
          >
            <AnimatePresence>
              {expanded && (
                <motion.div
                  key="text"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-0.5"
                >
                  <motion.div className="relative w-full overflow-hidden">
                    <motion.p
                      className="text-base font-semibold text-white whitespace-nowrap"
                      initial={{ x: 0 }}
                      animate={
                        result.title.length > 15
                          ? { x: ['0%', '-100%'] }
                          : { x: 0 }
                      }
                      transition={
                        result.title.length > 15
                          ? { repeat: Infinity, duration: 10, ease: 'linear' }
                          : {}
                      }
                    >
                      {result.title}
                    </motion.p>
                  </motion.div>

                  <motion.div className="relative w-full overflow-hidden">
                    <motion.p
                      className="text-sm text-gray-400 whitespace-nowrap"
                      initial={{ x: 0 }}
                      animate={
                        result.artist.length > 15
                          ? { x: ['0%', '-100%'] }
                          : { x: 0 }
                      }
                      transition={
                        result.artist.length > 15
                          ? { repeat: Infinity, duration: 12, ease: 'linear' }
                          : {}
                      }
                    >
                      {result.artist}
                    </motion.p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      ) : (
        <div className="text-xs text-gray-300 text-center">Not playing</div>
      )}
    </div>
  );

  //return <>{renderListeningNowSection()}</>;
};

export default SpotifyAlbumCard;