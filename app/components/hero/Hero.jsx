"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../navbar/Navbar";
import MobileNavbar from "../navbar/ResponsiveNav";

const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to track whether the mobile menu is open or closed

  return (
    <div className="relative w-full h-[100vh]">
      {/* Background Image */}
      <Image
        src="/bgnw.jpg"
        alt="hero"
        layout="fill"
        objectFit="cover"
        className="z-0 filter brightness-50"
        onLoad={() => setIsImageLoaded(true)}
      />

      {isImageLoaded && (
        <>
          {/* Navbar */}
          <motion.div
            className="absolute top-0 z-50 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="md:block hidden sticky top-0 z-50">
              <Navbar />
            </div>

            <div className="md:hidden fixed top-0 w-full  z-50">
              <MobileNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </div>
          </motion.div>

          {/* Text and Button Section */}
          <motion.div
            className={`absolute top-1/2 left-[5%] sm:left-[10%] transform -translate-y-1/2 z-20 text-white text-start w-[90%] md:w-auto`}
          >
            {/* Heading */}
            <motion.h1
              className="text-2xl md:text-[45px] lg:text-[55px] font-semibold xl:w-[60%]"
              style={{ fontFamily: '"Manrope", sans-serif', lineHeight: "1.2" }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Empowering Performance. Enabling Value.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-lg md:text-xl lg:text-2xl mt-4  xl:w-[65%]"
              style={{ fontFamily: '"Manrope", sans-serif', lineHeight: "1.4" }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              We help businesses find skilled candidates, modernize technology
              delivery, and build new businesses to fuel growth.
            </motion.p>

            {/* Button */}
            <motion.button
              className="mt-8 py-3 px-6 sm:py-4 sm:px-8 text-sm sm:text-base font-bold rounded-[10px] text-black bg-white hover:bg-gray-200 transition duration-300"
              style={{ fontFamily: '"Manrope", sans-serif', lineHeight: "1.2" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Together, let's do great things
            </motion.button>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Hero;
