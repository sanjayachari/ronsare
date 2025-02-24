'use client';

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Industries = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    setRotateX(y * -30);
    setRotateY(x * 30);
  };

  return (
    <div className="w-full bg-white">
       <div className="h-auto md:py-0 py-10 gap-10 md:h-[700px] rounded-t-2xl w-full px-4 sm:px-6 md:px-12 xl:px-10 xxl:px-20 max-w-screen-xxxl mx-auto md:flex-row flex-col-reverse flex items-center">
      
<div className="md:w-[60%] flex flex-col items-start justify-center">
<h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0732EF] my-2 md:my-16">
  Empowering Businesses with Technology & Talent
</h1>
<div className="xl:flex gap-5">
  <div className="md:mb-0 md:mt-0 mb-5 mt-3">
    <h3 className="text-xl sm:text-xl xl:text-2xl font-semibold text-[#0732EF]">
      US IT Recruiting
    </h3>
    <p className="text-xl sm:text-xl xl:text-xl text-[#0732EF] my-2 max-w-xl">
      Connecting top talent with leading companies. Streamline your hiring
      process with our expert recruiting solutions.
    </p>
  </div>
  <div className="md:my-0 my-5">
    <h3 className="text-xl sm:text-xl xl:text-2xl font-semibold text-[#0732EF]">
      US Healthcare
    </h3>
    <p className="text-xl sm:text-xl xl:text-xl text-[#0732EF] my-2 max-w-xl">
      Innovating healthcare with technology. Improve efficiency, enhance patient care, and drive better outcomes.
    </p>
  </div>
  <div className="md:my-0 my-5">
    <h3 className="text-xl sm:text-xl xl:text-2xl font-semibold text-[#0732EF]">
      AI-Driven Data Analytics
    </h3>
    <p className="text-xl sm:text-xl xl:text-xl text-[#0732EF] my-2 max-w-xl">
      Transform data into powerful insights. Leverage AI-powered analytics to make smarter, data-driven decisions.
    </p>
  </div>
</div>
<button className="mt-4 py-3 px-6 border border-[#0732EF] rounded-md text-[#0732EF] flex items-center gap-3 cursor-pointer hover:bg-blue-800 hover:text-white transition duration-500">
  Learn more
</button>
</div>
 
         <motion.div
           className="relative h-full flex items-center justify-center w-[100%] md:w-[40%] perspective-1000 "
           style={{ transformStyle: "preserve-3d" }}
           animate={{ rotateX, rotateY }}
           transition={{ type: "spring", stiffness: 100, damping: 10 }}
           onMouseMove={handleMouseMove}
           onMouseLeave={() => {
             setRotateX(0);
             setRotateY(0);
           }}
         >
           <Image
             src="/recruiter1.png"
             alt="hero"
             className="lg:absolute -bottom-[160px] left-0 object-cover rounded-3xl md:shadow-2xl"
             height={1000}
             width={1000}
           />
         </motion.div>
       </div>
     </div>
  );
};


// src="/recruiter1.png"


export default Industries;
