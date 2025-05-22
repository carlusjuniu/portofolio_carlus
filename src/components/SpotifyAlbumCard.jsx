import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import getNowPlayingItem from '../services/SpotifyAPI'


const SpotifyAlbumCard = ({ result, loading }) => {
  const [expanded, setExpanded] = useState(false);

  if (loading) {
    return (
      <div className="w-24 h-24 flex items-center justify-center text-gray-400 text-sm">
        Loading...
      </div>
    );
  }

  if (!result.isPlaying) {
    return (
      <div className="w-24 h-24 flex items-center justify-center text-gray-400 text-sm">
        Not playing
      </div>
    );
  }

  return (
    <motion.div
      onClick={() => setExpanded(prev => !prev)}
      layout
      transition={{ layout: { duration: 0.5, type: 'spring' } }}
      className={`relative cursor-pointer bg-gray-900 text-white rounded-2xl overflow-hidden ${
        expanded ? 'w-64 h-64 p-4' : 'w-24 h-24 p-1'
      }`}
    >
      <motion.img
        layout="position"
        src={result.albumImageUrl}
        alt="Album"
        className="w-full h-full object-cover rounded-xl"
      />

      {!expanded && (
        <motion.div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              className="w-1 bg-white"
              animate={{
                height: ['10px', '20px', '10px'],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      )}

      <AnimatePresence>
        {expanded && (
          <motion.div
            className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-2 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-sm font-semibold truncate">{result.title}</p>
            <p className="text-xs text-gray-300 whitespace-nowrap overflow-hidden animate-slide-loop">
              {result.artist}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SpotifyAlbumCard;
