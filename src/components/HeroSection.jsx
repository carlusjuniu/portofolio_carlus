import React, { useState, useEffect } from 'react'
import memojiCarlos from '../assets/memoji_carlos.png'
import getNowPlayingItem from '../services/SpotifyAPI'
import { getMapboxStaticImageUrl } from '../services/mapboxService'
import { motion } from 'framer-motion'

const HeroSection = (props) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});
  const mapboxUrl = getMapboxStaticImageUrl();

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

  const renderProfileSection = () => (
    <div className="bg-neutral-900/40 border-2 border-stone-400/20 backdrop-blur-lg rounded-lg p-4 col-span-2 row-span-2">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Carlos Junior</h1>
          <p className="text-gray-400">Frontend Developer</p>
        </div>
        <div className="bg-neutral-950 w-36 p-5 rounded-full flex items-center justify-center shadow-[inset_0_-2px_16px_-3px_rgba(255,255,255,0.2)]">
          <img role="img" aria-label="Avatar" src={memojiCarlos} />
        </div>
      </div>
      <p className="mt-4 text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu feugiat erat, at aliquet metus. Pellentesque risus enim, ornare at neque ut, venenatis efficitur dolor. Suspendisse fermentum.
      </p>
    </div>
  )

  const renderMapSection = () => (
    <div className="bg-neutral-900/40 border-2 border-stone-400/20 backdrop-blur-lg rounded-lg h-72 col-start-3 row-span-2">
      <img 
        src={mapboxUrl} 
        alt="Mapbox Static Map" 
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  )

  const renderResumeSection = () => (
    <div className="bg-neutral-900/40 border-2 border-stone-400/20 backdrop-blur-lg rounded-lg p-4 col-span-2 col-start-3 row-start-3">
      <h2 className="text-lg font-semibold">Download Resume</h2>
      <a 
        href="/path-to-your-resume.pdf" 
        download 
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download CV
      </a>
    </div>
  )

  const renderListeningNowSection = () => (
    <div className="bg-neutral-900/40 border-2 border-stone-400/20 backdrop-blur-lg rounded-lg p-4 h-72 col-start-4 row-span-2">
      {loading ? (
        <div className='flex items-center justify-center h-full text-gray text-base'>
          <p className="tracking-wider px-1 text-base">Loading...</p>
        </div>
      ) : (
        <div className='h-full flex flex-col justify-between'>
          {result.isPlaying ? (
            <>
              <img 
                className='absolute inset-0 w-full h-full object-cover rounded-lg' 
                src={result.albumImageUrl} 
                alt="album-image" 
              />
              <div className='absolute inset-0 bg-black bg-opacity-50'></div>
              <div className='relative z-10 flex flex-col justify-end h-full'>
                <p className="px-1 text-left text-white font-bold truncate">{result.title}</p>
                <div className="relative overflow-hidden">
                  <p className="px-1 text-left text-white whitespace-nowrap animate-slide-loop">
                    {result.artist}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className='flex items-center justify-center h-full'>
              <p className="text-gray-400">Not currently playing</p>
            </div>
          )}
        </div>
      )}
    </div>
  )

  const renderToolsSection = () => {
    const tools = ['js', 'sass', 'react', 'html', 'css', 'git', 'nodejs', 'npm'];

    return (
      <div className="bg-neutral-900/40 border-2 border-stone-400/20 backdrop-blur-lg rounded-lg p-6 col-span-2 row-span-2 row-start-3">
        <h2 className="text-lg font-semibold mb-4">Variety of Tools</h2>
        <motion.div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{ width: 'max-content' }}
          >
            {[...tools, ...tools].map((icon, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 mx-4"
                whileTap={{ scale: 0.9 }}
              >
                <img 
                  src={`https://skillicons.dev/icons?i=${icon}`} 
                  alt={`Skill ${icon}`} 
                  className="w-12 h-12"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    )
  }

  const renderExperienceSection = () => (
    <div className="bg-neutral-900/40 border-2 border-stone-400/20 backdrop-blur-lg rounded-lg p-6 col-span-2 row-span-2 col-start-3 row-start-4">
      <h2 className="text-lg font-semibold">1.5 Years of Experience</h2>
      <div className="mt-4">
        <p className="text-xl font-bold">Frontend Developer</p>
        <p className="text-gray-400">Contactus | 2023 - Present</p>
        <p className="text-xl font-bold line-through mt-2">Web Developer Internship</p>
        <p className="text-gray-400">Mindshaker | 2023 - 2023</p>
      </div>
    </div>
  )

  return (
    <div className="flex items-center justify-center mt-32">
      <div className="grid grid-cols-4 grid-rows-4 gap-4 max-w-screen-xl p-4 text-white">
        {renderProfileSection()}
        {renderMapSection()}
        {renderResumeSection()}
        {renderListeningNowSection()}
        {renderToolsSection()}
        {renderExperienceSection()}
      </div>
    </div>
  )
}

export default HeroSection
