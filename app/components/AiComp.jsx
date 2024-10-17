'use client';
import Image from "next/image";
import React, { useState } from "react"; 
import { motion } from "framer-motion"; 

const AiComp = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="relative flex items-center justify-center md:mt-[-50px] h-[200px] md:h-[150px]">
      {/* Container for Image and Text */}
      <div className="relative md:w-[70%] h-full overflow-hidden rounded-[10px]"> {/* Set width to 70% and height to full */}
        {/* Motion component for Image */}
        <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 1.5 }} 
          onAnimationComplete={() => setIsImageLoaded(true)} 
        >
          <Image
            src="/bg14.png"
            alt="hero"
            layout="responsive" 
            width={700} 
            height={450} 
            className="rounded-[10px] object-cover"
          />
        </motion.div>

        {/* Text that will be overlaid on the image */}
        {isImageLoaded && ( 
          <div className="absolute inset-0 flex md:flex-row flex-col items-center justify-between z-10 p-4">
            <motion.div
              initial={{ y: -20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.3 }} 
              className="md:w-[30%] flex items-center justify-center border-r-2 text-white text-center font-bold text-[20px] p-2"
            >
              Artificial Intelligence & Analytics
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.4 }} 
              className="md:w-[50%] flex items-center justify-center text-white text-center p-3"
            >
              Reinvent how your business works with AI. Unify all your data w/ Ronsare Artificial Intelligence Solutions
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.5 }} 
              className="md:w-[20%] flex items-center justify-center text-white text-center"
            >
              <div className="bg-[#2d3436] py-2 px-4 rounded-[10px]">
                Learn more
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiComp;
