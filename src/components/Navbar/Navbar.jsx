import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Folder, Shirt, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed bottom-5 left-0 right-0 flex justify-center z-50">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const location = useLocation();
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef([]);

  const navItems = [
    { icon: <Home size={24} />, label: "Home", path: "/" },
    { icon: <Folder size={24} />, label: "Work", path: "/work" },
    { icon: <Shirt size={24} />, label: "Shop", path: "/shop" },
    { icon: <User size={24} />, label: "Profile", path: "/profile" },
  ];

  const updatePosition = (index) => {
    const node = refs.current[index];
    if (!node) return;
    const { offsetLeft, offsetWidth } = node;
    setPosition({
      left: offsetLeft + offsetWidth / 2,
      width: offsetWidth,
      opacity: 1,
    });
    setActiveIndex(index);
  };

  useEffect(() => {
    const idx = navItems.findIndex((i) => i.path === location.pathname);
    if (idx !== -1) {
      updatePosition(idx);
    }
  }, [location.pathname]);

  return (
    <ul
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      className="relative flex w-fit rounded-full bg-neutral-800 p-2 px-4 shadow-lg min-w-[220px]"
    >
      {navItems.map((item, index) => (
        <Tab
          key={index}
          item={item}
          index={index}
          updatePosition={updatePosition}
          ref={(el) => (refs.current[index] = el)}
          isActive={activeIndex === index}
        />
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = React.forwardRef(({ item, index, updatePosition, isActive }, ref) => {
  const localRef = useRef(null);
  const combinedRef = ref || localRef;

  const handleMouseEnter = () => {
    if (!combinedRef.current) return;
    updatePosition(index);
  };

  return (
    <li
      ref={combinedRef}
      onMouseEnter={handleMouseEnter}
      className="relative z-10 mx-2"
    >
      <Link
        to={item.path}
        className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
          isActive ? "text-blue-400" : "text-white hover:text-blue-400"
        }`}
      >
        <span className="sr-only">{item.label}</span>
        {item.icon}
      </Link>
    </li>
  );
});

const Cursor = ({ position }) => {
  return (
    <motion.div
      animate={{
        x: position.left - position.width / 2,
        width: position.width,
        height: position.width,
        opacity: position.opacity,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute top-1/2 -translate-y-1/2 bg-blue-500 rounded-full z-0"
    />
  );
};

export default Navbar;
