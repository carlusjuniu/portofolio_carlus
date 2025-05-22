import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AlbumCard() {
  const [expanded, setExpanded] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    const fetchCurrentTrack = async () => {
      try {
        const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('spotify_token')}`
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          setCurrentTrack(data);
        }
      } catch (error) {
        console.error('Error fetching current track:', error);
      }
    };

    fetchCurrentTrack();
    const interval = setInterval(fetchCurrentTrack, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      onClick={() => setExpanded(prev => !prev)}
      layout
      transition={{ layout: { duration: 0.5, type: 'spring' } }}
      className={`relative cursor-pointer bg-gray-900 text-white rounded-2xl p-2 overflow-hidden ${
        expanded ? 'w-64 h-64' : 'w-24 h-24'
      }`}
    >
      <motion.img
        layout="position"
        src={currentTrack?.item?.album?.images[0]?.url || '/album.jpg'}
        alt={currentTrack?.item?.album?.name || 'Album'}
        className="w-full h-auto rounded-xl"
      />

      {!expanded && (
        <motion.div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1"
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
        {expanded && currentTrack && (
          <motion.div
            className="mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3 className="text-lg font-semibold">{currentTrack.item.name}</h3>
            <p className="text-sm text-gray-300">
              {currentTrack.item.artists.map(artist => artist.name).join(', ')}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}