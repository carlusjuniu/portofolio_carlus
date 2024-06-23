import React from 'react'

const Navbar = () => {
  return (
<nav>
    <div class='sticky max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <div>
            <img src="src/assets/measlogo.png" alt="Logo" />
        </div>
        <div>
            <ul class="flex font-medium p-3 mt-4 border rounded-lg space-x-4 md:flex-row md:mt-0 md:border-0 md:bg-zinc-800/40 border-zinc-700 bg-opacity-25">
                <li class="relative group">
                    <a href="#" class="block py-2 px-3 rounded bg-transparent text-zinc-50/70 relative z-10">Home</a>
                    <span class="absolute inset-0 bg-red-950 rounded transform scale-x-0 origin-left transition-all duration-500 ease-in-out group-hover:scale-x-100"></span>
                </li>
                <li class="relative group">
                    <a href="#" class="block py-2 px-3 rounded bg-transparent text-zinc-50/70 relative z-10">Projects</a>
                    <span class="absolute inset-0 bg-red-950 rounded transform scale-x-0 origin-left transition-all duration-500 ease-in-out group-hover:scale-x-100"></span>
                </li>
                <li class="relative group">
                    <a href="#" class="block py-2 px-3 rounded bg-transparent text-zinc-50/70 relative z-10">About</a>
                    <span class="absolute inset-0 bg-red-950 rounded transform scale-x-0 origin-left transition-all duration-500 ease-in-out group-hover:scale-x-100"></span>
                </li>
                <li class="relative group">
                    <a href="#" class="block py-2 px-3 rounded bg-transparent text-zinc-50/70 relative z-10">Contact</a>
                    <span class="absolute inset-0 bg-red-950 rounded transform scale-x-0 origin-left transition-all duration-500 ease-in-out group-hover:scale-x-100"></span>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar