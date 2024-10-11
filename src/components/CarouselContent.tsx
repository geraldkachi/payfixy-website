"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CarouselContent = () => {
  const content = [
    {
      header: "Streamline Payments",
      title: 'The startup integrated PayFixy into their platform, allowing customers to make payments easily through various methods—credit cards, bank transfers, and digital wallets.',
    },
    { header: "Scale Effectively", title: 'As customer base grew, our scalable payment solutions adapted to your needs, allowing you to handle increasing transaction volumes without a hitch.', }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? content.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === content.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="bg-[#2A2A29] py-10">
      <div className="max-w-[1120px] mx-auto md:flex  items-center flex-1 text-white px-3 xl:px-0">
        <div className="flex flex-col items-center my-7 md:my-16 w-full">
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white text-[30px] font-medium md:text-[34.88px] leading-[48.96px] md:leading-[48px] tracking-[-4%] md:tracking-[-5%]">
            {content[currentIndex].header}
          </motion.p>

          <div className="relative w-full flex justify-center items-center py-10">
            <button
              className="absolute left-2 text-[#A73636] bg-[#FDF4F4] border border-[#A73636] w-[32px] md:w-[64px] h-[32px] md:h-[64px] rounded-full text-center z-50"
              onClick={handlePrev}
            >
              ←
            </button>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center text text-base sm:text-lg md:text-sxl font-medium p-4 b rounded-lg shadow-md max-w-[90%] sm:max-w-[80%] md:max-w-[80%]"
            >
              {content[currentIndex].title}
            </motion.div>

            <button
              className="absolute right-2 text-[#A73636] bg-[#FDF4F4] border border-[#A73636] w-[32px] md:w-[64px] h-[32px] md:h-[64px] rounded-full text-center"
              onClick={handleNext}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselContent;
