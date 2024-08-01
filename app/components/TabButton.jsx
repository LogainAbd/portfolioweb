import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  default: { width: 0 }, // Corrected the typo here
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? 'text-white' : 'text-[#ADB7BE]';
  return (
    <button onClick={selectTab} className="flex flex-col items-center">
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        transition={{ duration: 0.3 }} // Added transition for smoothness
        className='h-1 bg-pink-500 mt-2 mr-3' // Ensure your theme uses bg-pink-500
        style={{ width: 'calc(100% - 0.75rem)' }} // Set default width for consistent sizing
      ></motion.div>
    </button>
  );
};

export default TabButton;
