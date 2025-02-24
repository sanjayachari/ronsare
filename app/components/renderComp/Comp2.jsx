import Image from "next/image";
import React from "react";

const Comp2 = () => {
  return (
    // <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 px-4 lg:px-[120px]">
    <div className=" px-4 lg:px-[120px]">
      {/* Text Section */}
      <div className="flex justify-center flex-col p-6 lg:col-span-1">
        <div className="text-[#0732EF] text-[22px] sm:text-[25px] font-semibold leading-tight my-3">
          Expert product & solution deployment
        </div>
        <div className="text-[#0732EF] my-2 font-medium">
          We help transform your technology so that technology can transform
          your business. We works with clients on end-to-end
          transformations—reimaging the role of technology, reinventing
          technology delivery, and providing AI-powered product development
          expertise to build faster, more efficient products & solutions
        </div>

        <div className="flex flex-col gap-4 text-[#0732EF] my-2 font-medium">
          <div className="flex gap-2 items-start my-2">
            <Image
              src={"/correct.png"}
              alt="hero"
              width={25}
              height={25}
              className="rounded-[20px] h-[25px] w-[25px] object-cover"
            />
            <div>
            Strategic IT Consulting - A force multiplier for IT planning and solving complex technology challenges.
            </div>
          </div>
          <div className="flex gap-2 items-start my-2">
            <Image
              src={"/correct.png"}
              alt="hero"
              width={25}
              height={25}
              className="rounded-[20px] h-[25px] w-[25px] object-cover"
            />
            <div>
            Delta Model - A proven approach that acts as your roadmap for smooth IT transformations.
            </div>
          </div>
          <div className="flex gap-2 items-start my-2">
            <Image
              src={"/correct.png"}
              alt="hero"
              width={25}
              height={25}
              className="rounded-[20px] h-[25px] w-[25px] object-cover"
            />
            <div>
            Super Support - Simplified and amplified support for complex and multi-vendor environments.            </div>
          </div>
        </div>

        <button className="bg-[#0732EF] w-[150px] p-3 text-white rounded-[10px] my-4">
          Learn More
        </button>
      </div>

      {/* Images Section */}
      {/* <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:col-span-1">
        <div>
          <Image
            src={"/se5.jpg"}
            alt="hero"
            width={250}
            height={250}
            className="rounded-[20px] object-cover"
          />
        </div>
        <div className="flex items-center justify-center gap-5 flex-col">
          <Image
            src={"/g9.jpg"}
            alt="hero"
            width={250}
            height={250}
            className="rounded-[20px] object-cover"
          />
          <Image
            src={"/g1.jpg"}
            alt="hero"
            width={250}
            height={250}
            className="rounded-[20px] object-cover"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Comp2;
