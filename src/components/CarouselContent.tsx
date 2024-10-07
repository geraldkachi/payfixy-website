import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CarouselContent = () => {
  const content = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat. Duis aute irure fugiat nulla pariatur. ',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat. Duis aute irure fugiat nulla pariatur. ',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat. Duis aute irure fugiat nulla pariatur. ',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat. Duis aute irure fugiat nulla pariatur. '
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? content.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === content.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full flex justify-center items-center py-10">
      {/* Left Button */}
      <button
        className="absolute left-2 text-[#A73636] bg-[#FDF4F4] border border-[#A73636] w-[32px] md:w-[64px] h-[32px] md:h-[64px] rounded-full text-center z-50"
        onClick={handlePrev}
      >
        ←
      </button>

      {/* Center Content with Framer Motion */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center text text-base sm:text-lg md:text-sxl font-medium p-4 b rounded-lg shadow-md max-w-[90%] sm:max-w-[80%] md:max-w-[80%]"
      >
        {content[currentIndex]}
      </motion.div>

      {/* Right Button */}
      <button
        className="absolute right-2 text-[#A73636] bg-[#FDF4F4] border border-[#A73636] w-[32px] md:w-[64px] h-[32px] md:h-[64px] rounded-full text-center"
        onClick={handleNext}
      >
        →
      </button>
    </div>
  );
};

export default CarouselContent;
