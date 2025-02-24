"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-[90px]  w-full   flex justify-center items-center bg-white px-4 sm:px-6 md:px-12 xl:px-10 xxl:px-20  max-w-screen-xxxl mx-auto">
      <div className="w-full flex flex-col-reverse md:flex-row justify-center md:justify-between items-center py-8 md:py-12 xl:py-16 xxl:py-20 ">
        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-[#0732EF] my-3 md:my-4 leading-tight">
            Empowering Performance. Enabling Value.
          </h1>
          <p className="text-sm sm:text-base md:text-lg xl:text-xl text-[#0732EF] max-w-lg my-3 md:my-5">
            We help businesses find skilled candidates, modernize technology
            delivery, and build new businesses to fuel growth.
          </p>

          {/* Button */}
          <motion.button
            className="mt-4 w-[250px] sm:w-[280px] md:w-[300px] text-center py-3 px-6 border border-[#0732EF] rounded-3xl text-[#0732EF] flex items-center gap-2 sm:gap-3 cursor-pointer hover:bg-[#0732EF] hover:text-white transition duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Together, let's do great things
          </motion.button>

          {/* Cards Section */}
    <div className="lg:block hidden">
    <div className=" mt-6 md:mt-8 flex  justify-center md:justify-start gap-4 md:gap-6">
            <div className="w-[90%] sm:w-[300px] lg:w-[250px] xxl:w-[300px] h-auto p-4 border border-[#0732EF] rounded-2xl flex flex-col space-y-2">
              <h3 className="text-lg md:text-xl font-semibold text-[#0732EF]">
                Hire. Grow. Succeed.
              </h3>
              <p className="text-sm md:text-base text-[#0732EF]">
                We connect top IT talent with leading companies across the US,
                ensuring seamless recruitment and career growth.
              </p>
            </div>
            <div className="w-[90%] sm:w-[300px] lg:w-[250px] xxl:w-[300px] h-auto p-4 border border-[#0732EF] rounded-2xl flex flex-col space-y-2">
              <h3 className="text-lg md:text-xl font-semibold text-[#0732EF]">
                Care. Connect. Heal.
              </h3>
              <p className="text-sm md:text-base text-[#0732EF]">
                Providing trusted healthcare staffing solutions by matching skilled professionals with hospitals and clinics across the US.
              </p>
            </div>
          </div>
    </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center xl:justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] xl:w-[450px] xl:h-[450px] xxl:w-[500px] xxl:h-[500px]">
            <Image
              src="/hero.svg"
              alt="hero"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
