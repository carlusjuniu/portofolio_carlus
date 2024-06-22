import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className='max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4' >
            <div>
                <img src="src\assets\measlogo.png" alt="" />
            </div>
            <div>
            <ul class="flex flex-col font-medium p-3 mt-4 border rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0  md:bg-zinc-800/40 border-zinc-700 bg-opacity-25">
                    <li>
                        <a href="#" class="block py-2 px-3 text-white rounded md:bg-transparent md:text-zinc-50/70 md:p-0" aria-current="page">Home</a>
                     </li>
                     <li>
                        <a href="#" class="block py-2 px-3 text-white rounded md:bg-transparent md:text-zinc-50/70 md:p-0 " aria-current="page">Projects</a>
                     </li>
                     <li>
                        <a href="#" class="block py-2 px-3 text-white rounded md:bg-transparent md:text-zinc-50/70 md:p-0 " aria-current="page">About</a>
                     </li>
                     <li>
                        <a href="#" class="block py-2 px-3 text-white rounded md:bg-transparent md:text-zinc-50/70 md:p-0" aria-current="page">Contact</a>
                     </li>
                 </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar