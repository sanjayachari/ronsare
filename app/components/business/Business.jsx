"use client";
import React, { useState, useEffect, useRef } from "react";
import { MdBusinessCenter } from "react-icons/md";
import { RiHealthBookFill } from "react-icons/ri";
import { AiOutlineStock } from "react-icons/ai";
import { FaPeopleGroup } from "react-icons/fa6";
import CountUp from "react-countup";

const Business = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full bg-[#0732EF] pb-4">
      <div
        ref={sectionRef}
        className="w-full px-4 sm:px-6 md:px-12 xl:px-10 xxl:px-20 max-w-screen-xxxl mx-auto md:pb-10 pt-0"
      >
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-white text-center">
          Boosting Businesses
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20">
          {/* YoY Growth */}
          <div className="flex items-center justify-center flex-col w-full">
            <AiOutlineStock className="h-20 w-20 sm:h-16 sm:w-16 xl:h-40 xl:w-40 text-white" />
            <div className="text-center text-3xl md:text-6xl font-semibold text-white mt-5">
              {startCount && <CountUp start={0} end={72} duration={3} suffix="%" prefix="+" />}
            </div>
            <div className="text-center text-lg sm:text-xl mt-3 text-white">YoY Growth</div>
          </div>

          {/* US Healthcare Experience */}
          <div className="flex items-center justify-center flex-col w-full">
            <RiHealthBookFill className="h-20 w-20 sm:h-16 sm:w-16 xl:h-40 xl:w-40 text-white" />
            <div className="text-center text-3xl md:text-6xl font-semibold text-white mt-5">
              {startCount && <CountUp start={0} end={5} duration={3} />}
            </div>
            <div className="text-center text-lg sm:text-xl mt-3 text-white">
              US Healthcare experience
            </div>
          </div>

          {/* Global Business Partners */}
          <div className="flex items-center justify-center flex-col w-full">
            <MdBusinessCenter className="h-20 w-20 sm:h-16 sm:w-16 xl:h-40 xl:w-40 text-white" />
            <div className="text-center text-3xl md:text-6xl font-semibold text-white mt-5">
              {startCount && <CountUp start={0} end={50} duration={3} />}
            </div>
            <div className="text-center text-lg sm:text-xl mt-3 text-white">
              Global business partners
            </div>
          </div>

          {/* Client Revenue */}
          <div className="flex items-center justify-center flex-col w-full">
            <FaPeopleGroup className="h-20 w-20 sm:h-16 sm:w-16 xl:h-40 xl:w-40 text-white" />
            <div className="text-center text-3xl md:text-6xl font-semibold text-white mt-5">
              {startCount && <CountUp start={0} end={72} duration={3} suffix="M" prefix="$" />}
            </div>
            <div className="text-center text-lg sm:text-xl mt-3 text-white">
              Client revenue
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
