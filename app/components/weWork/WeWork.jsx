"use client";

import Image from "next/image";
import React, { useState } from "react";
import Comp1 from "../renderComp/Comp1";
import Comp2 from "../renderComp/Comp2";
import Comp3 from "../renderComp/Comp3";

const WeWork = () => {
  const [state, setState] = useState(1);

  return (
    <div className="w-full my-2 flex items-center justify-center flex-col px-4">
      <div className="font-bold text-[18px] sm:text-[20px] text-[#343f52] opacity-50 text-center">
        HOW WE CAN HELP
      </div>
      <div className="my-3 text-[24px] sm:text-[30px] lg:text-[35px] font-semibold w-full sm:w-[80%] lg:w-[45%] text-center text-[#343f52] leading-tight">
        Together, we work with clients across the digital ecosystem to meet their
        business challenges.
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 my-10 w-full lg:w-auto justify-center items-center">
        <div
          className="h-[120px] lg:h-[100px] w-full lg:w-[400px] cursor-pointer hover:bg-sky-50 hover:shadow-2xl duration-500 border-opacity-25 border border-black rounded-[10px] opacity-70 flex gap-2 items-center justify-center p-4"
          onClick={() => setState(1)}
        >
          <div className="w-[20%] lg:w-[30%] flex items-center justify-center">
            <Image
              src={"/rocket.svg"}
              alt="hero"
              width={35}
              height={35}
              className=" text-red-500  rounded-[10px] object-cover"
            />
          </div>
          <div className="w-[80%] lg:w-[70%] flex items-center justify-center">
            <div>
              <p className="font-medium text-[16px] sm:text-[20px]">
                Talent Solutions
              </p>
              <p className="font-semibold text-[14px] sm:text-[16px]">
                We provide multi-sourced staffing services to support your IT
                teams
              </p>
            </div>
          </div>
        </div>

        <div
          className="h-[120px] lg:h-[100px] w-full lg:w-[400px] cursor-pointer hover:bg-sky-50 hover:shadow-2xl duration-500 border-opacity-25 border border-black rounded-[10px] opacity-70 flex gap-2 items-center justify-center p-4"
          onClick={() => setState(2)}
        >
          <div className="w-[20%] lg:w-[30%] flex items-center justify-center">
            <Image
              src={"/speedometer.svg"}
              alt="hero"
              width={35}
              height={35}
              className=" text-red-500  rounded-[10px] object-cover"
            />
          </div>
          <div className="w-[80%] lg:w-[70%] flex items-center justify-center">
            <div>
              <p className="font-medium text-[16px] sm:text-[20px]">
                Technology Consulting
              </p>
              <p className="font-semibold text-[14px] sm:text-[16px]">
                We provide multi-sourced staffing services to support your IT
                teams
              </p>
            </div>
          </div>
        </div>

        <div
          className="h-[120px] lg:h-[100px] w-full lg:w-[400px] cursor-pointer hover:bg-sky-50 hover:shadow-2xl duration-500 border-opacity-25 border border-black rounded-[10px] opacity-70 flex gap-2 items-center justify-center p-4"
          onClick={() => setState(3)}
        >
          <div className="w-[20%] lg:w-[30%] flex items-center justify-center">
            <Image
              src={"/analytics.svg"}
              alt="hero"
              width={35}
              height={35}
              className=" text-red-500 object-cover"
            />
          </div>
          <div className="w-[80%] lg:w-[70%] flex items-center justify-center">
            <div>
              <p className="font-medium text-[16px] sm:text-[20px]">
                Data & Analytics
              </p>
              <p className="font-semibold text-[14px] sm:text-[16px]">
                We provide multi-sourced staffing services to support your IT
                teams
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Render the selected component */}
      <div className="w-full my-4 ">
        {state == 1 ? <Comp1 /> : state == 2 ? <Comp2 /> : <Comp3 />}
      </div>
    </div>
  );
};

export default WeWork;
