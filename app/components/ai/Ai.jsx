'use client';

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Ai = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTaLearnrget.getBoundingClientRect();

    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    setRotateX(y * -30);
    setRotateY(x * 30);
  };

  return (
    <div className="w-full bg-[#BCC5F2] bg-opacity-40 rounded-t-3xl ">
      <div className="h-auto py-10 md:py-0  gap-10 md:h-[700px] rounded-t-2xl w-full px-4 sm:px-6 md:px-12 xl:px-10 xxl:px-20 max-w-screen-xxxl mx-auto md:flex-row flex-col-reverse flex items-center">
        <div className="md:w-[60%]  md:h-[300px] flex flex-col items-start justify-center">
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0732EF] mb-8">
            Artificial Intelligence & Analytics
          </h1>
          <h3 className="text-xl sm:text-xl xl:text-2xl font-semibold text-[#0732EF]">
            Transform data into decisions with Ronsare AI solutions.
          </h3>
          <p className="text-xl sm:text-xl xl:text-xl text-[#0732EF] mt-2 mb-8 max-w-xl">
            Reinvent how your business works with AI. Unify and optimize all your data with Ronsare Artificial Intelligence Solutions for smarter insights, automation, and growth.
          </p>
          <Link href={'/industries'} className=" mt-4 py-3 px-6 border border-[#0732EF] rounded-md text-[#0732EF] flex items-center gap-3 cursor-pointer hover:bg-[#0732EF] hover:text-white transition duration-500">
            Learn more
          </Link>
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
            src="/recruiter.png"
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

export default Ai;
