import Image from "next/image";
import React from "react";

const Comp1 = () => {
  return (
    <div className="sgrid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 lg:px-[120px]">
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

      {/* Text Section */}
      <div className="flex justify-center flex-col">
        <div className="text-[#0732EF] text-[22px] sm:text-[25px] font-semibold leading-tight my-3">
          Providing the right people, when you need them
        </div>
        <div className="text-[#0732EF] my-2 font-medium">
          Our experts work hard to become an extension of your HR and project
          resourcing teams. Whether you need an individual to fill a short-term
          vacancy or a direct hire, our talent solutions services will connect
          you with a wide network of professionals as per your needs.
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
              Temporary staffing - We manage every step, from candidate search
              to payroll and admin.
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
              Permanent staffing - Finding the best talent to meet your long-term
              needs.
            </div>
          </div>
        </div>

        <button className="bg-[#0732EF] w-[150px] p-3 text-white rounded-[10px] my-4">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Comp1;
