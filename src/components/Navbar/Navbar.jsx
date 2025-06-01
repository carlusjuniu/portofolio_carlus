import React, { useRef, useState } from "react";
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
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [activeIndex, setActiveIndex] = useState(0); // Track the active tab

  const navItems = [
    { icon: <Home size={24} />, label: "Home" },
    { icon: <Folder size={24} />, label: "Projects" },
    { icon: <Shirt size={24} />, label: "Shop" },
    { icon: <User size={24} />, label: "Profile" },
  ];

  return (
    <ul
      onMouseLeave={() =>
        setPosition((pv) => ({ ...pv, opacity: 0 }))
      }
      className="relative flex w-fit rounded-full bg-neutral-800 p-2 px-4 shadow-lg min-w-[220px]"
    >
      {navItems.map((item, index) => (
        <Tab
          key={index}
          item={item}
          index={index}
          setPosition={setPosition}
          setActiveIndex={setActiveIndex}
          isActive={activeIndex === index}
        />
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ item, index, setPosition, setActiveIndex, isActive }) => {
  const ref = useRef(null);

  const handleMouseEnter = () => {
    if (!ref.current) return;
    const { offsetLeft, offsetWidth } = ref.current;
    setPosition({
      left: offsetLeft + offsetWidth / 2, // Center the circle
      width: offsetWidth,
      opacity: 1,
    });
    setActiveIndex(index); // Update the active tab
  };

  return (
    <li
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className="relative z-10 mx-2"
    >
      <button
        className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
          isActive ? "text-blue-400" : "text-white hover:text-blue-400"
        }`}
      >
        <span className="sr-only">{item.label}</span>
        {item.icon}
      </button>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.div
      animate={{
        x: position.left - position.width / 2, // Adjust to center the circle
        width: position.width,
        height: position.width, // Make it a circle
        opacity: position.opacity,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute top-1/2 -translate-y-1/2 bg-blue-500 rounded-full z-0"
    />
  );
};

export default Navbar;