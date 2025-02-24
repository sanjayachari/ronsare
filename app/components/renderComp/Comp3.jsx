import Image from "next/image";
import React from "react";

const Comp3 = () => {
  return (
    // <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 lg:px-[120px]">
    <div className="lg:px-[120px]">

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
      <div className="flex justify-center flex-col lg:col-span-1">
        <div className="text-[#0732EF] text-[22px] sm:text-[25px] font-semibold leading-tight my-3">
          Accelerate results with analytics
        </div>
        <div className="text-[#0732EF] my-2 font-medium">
          Predictive analytics harness machine learning capabilities to identify
          patterns, insights, and relationships within data. With tools like
          SPSS and Hadoop, we collect and process your data to build predictive
          models. Make informed forecasts and business decisions.
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
              Data Strategy - Establish a strategy for collecting, organizing,
              analyzing, and delivering data to support business objectives.
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
              Data Governance & Compliance - Set standards and policies to
              ensure the quality of your data and compliance with privacy laws
              and regulations.
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
              AI Solutions and Business Insights - Implement AI solutions that
              can analyze vast amounts of data to generate actionable insights
              and predictions.{" "}
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

export default Comp3;
