import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Folder, Shirt, User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed bottom-5 left-0 right-0 flex justify-center z-50">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({ left: 0, width: 0 });
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);

  const navItems = [
    { icon: <Home size={24} />, label: "Home", path: "/" },
    { icon: <Folder size={24} />, label: "Projects", path: "/projects" },
    { icon: <Shirt size={24} />, label: "Shop", path: "/shop" },
    { icon: <User size={24} />, label: "Profile", path: "/profile" }
  ];

  useEffect(() => {
    const updatePosition = () => {
      const activeTab = tabRefs.current[activeIndex];
      if (activeTab) {
        const { offsetLeft, offsetWidth } = activeTab;
        setPosition({ left: offsetLeft, width: offsetWidth });
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [activeIndex]);

  return (
    <nav aria-label="Main navigation">
      <ul className="flex w-fit rounded-full bg-neutral-800 p-2 px-4 shadow-lg relative min-w-[220px]">
        <Cursor position={position} />
        {navItems.map((item, index) => (
          <li
            key={index}
            ref={(el) => (tabRefs.current[index] = el)}
            className="relative z-10 mx-2"
          >
            <button
              onClick={() => setActiveIndex(index)}
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
                activeIndex === index ? "text-blue-400" : "text-white"
              } hover:text-gray-300`}
              aria-current={activeIndex === index ? "page" : undefined}
            >
              <span className="sr-only">{item.label}</span>
              {item.icon}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.div
      className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-700 rounded-full z-0"
      animate={{
        x: position.left + position.width / 2 - 20, // centraliza baseado no centro do botão
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    />
  );
};

export default Navbar;
 