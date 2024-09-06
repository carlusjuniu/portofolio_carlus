import React from 'react'
import memojiCarlos from '../assets/memoji_carlos.png'

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-screen-xl p-4 text-white">
        <div className="bg-neutral-900/40 border-2 border-stone-400/20 backdrop-blur-lg rounded-lg p-6 col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Carlos Junior</h1>
              <p className="text-gray-400">Frontend Developer</p>
            </div>
            <div className="bg-neutral-950	 w-36 p-5 rounded-full flex items-center justify-center shadow-[inset_0_-2px_16px_-3px_rgba(255,255,255,0.2)]">
             <img  role="img" aria-label="Avatar"  src={memojiCarlos} />
            </div>
          </div>
          <p className="mt-4 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu feu
            giat erat, at aliquet metus. Pellentesque risus enim, ornare at neque ut, venenatis efficitur dolor. Suspendisse fermentum.
          </p>
        </div>
        <div className="bg-neutral-900/40 border-2 border-stone-400/20 backdrop-blur-lg rounded-lg p-6">
          <div className="mt-2 bg-gray-700 h-48 rounded-lg">
            <img src="/path/to/map-image.png" className="object-cover h-full w-full rounded-lg" />
          </div>
        </div>

        {/* Listening Now Section */}
        <div className="bg-neutral-900/40 border-2 border-stone-400/20 backdrop-blur-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold">Listening Now</h2>
          <div className="mt-2">
            <img src="/path/to/music-image.png" alt="Music" className="object-cover h-48 w-full rounded-lg" />
          </div>
        </div>

        <div className="bg-neutral-900/40 border-2 border-stone-400/20 backdrop-blur-lg  rounded-lg p-6">
          <h2 className="text-lg font-semibold">Variety of Tools</h2>
          <div
                    x-data="{}"
                    x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
                    class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                >
                    <ul x-ref="logos" class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        <li>
                            <img src="https://skillicons.dev/icons?i=js" alt="Facebook" />
                        </li>
                        <li>
                            <img src="https://skillicons.dev/icons?i=sass" alt="Disney" />
                        </li>
                        <li>
                            <img src="https://skillicons.dev/icons?i=react" alt="Airbnb" />
                        </li>
                        <li>
                            <img src="https://skillicons.dev/icons?i=react" alt="Apple" />
                        </li>
                        <li>
                            <img src="https://skillicons.dev/icons?i=js" alt="Spark" />
                        </li>
                        <li>
                            <img src="https://skillicons.dev/icons?i=js" alt="Samsung" />
                        </li>
                        <li>
                            <img src="https://skillicons.dev/icons?i=js" alt="Quora" />
                        </li>
                        <li>
                            <img src="https://skillicons.dev/icons?i=react" alt="Sass" />
                        </li>
                        
                    </ul>                
                </div>
        </div>
        {/* Experience Section */}
        <div className="bg-neutral-900/40 border-2 border-stone-400/20 backdrop-blur-lg rounded-lg p-6 col-span-2">
          <h2 className="text-lg font-semibold">1.5 Years of Experience</h2>
          <div className="mt-4">
            <p className="text-xl font-bold">Frontend Developer</p>
            <p className="text-gray-400">Contactus | 2023 - Present</p>
            <p className="text-xl font-bold line-through mt-2">Web Developer Internship</p>
            <p className="text-gray-400">Mindshaker | 2023 - 2023</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroSection
