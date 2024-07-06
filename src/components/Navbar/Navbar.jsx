import React, { useState } from 'react';
import { AlignJustify } from 'lucide-react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navbarItems = [
    { name: 'Home', link: '#' },
    { name: 'Projects', link: '#' },
    { name: 'About', link: '#' },
    { name: 'Contact', link: '#' },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav>
      <div className="sticky max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <ul className="flex font-medium p-3 mt-4 border rounded-lg space-x-4 md:flex-row md:mt-0 md:border-0 md:bg-zinc-800/40 border-zinc-700 bg-opacity-25">
            <li onClick={toggleSidebar}>
              <AlignJustify />
            </li>
          </ul>
        </div>
        <div>
          <img src="src/assets/measlogo.png" alt="Logo" />
        </div>
        <div>
          <ul className="flex font-medium p-3 mt-4 border rounded-lg space-x-4 md:flex-row md:mt-0 md:border-0 md:bg-zinc-800/40 border-zinc-700 bg-opacity-25">
            <li>Hit me up!</li>
          </ul>
        </div>
      </div>
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50">
          <div className="flex justify-end p-4">
            <button className="text-white" onClick={toggleSidebar}>
              Close
            </button>
          </div>
          <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white">
            <ul className="p-4">
              {navbarItems.map((item, index) => (
                <li key={index} className="py-2">
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
