import React from "react";
import { FaStarOfLife } from "react-icons/fa6";

const Service = () => {
  return (
    <div className="w-full bg-[#0732EF]">
      <div className="w-full px-4 sm:px-6 md:px-12 xl:px-10 xxl:px-20 max-w-screen-xxxl mx-auto pt-10 md:pt-40 pb-10">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-white my-2 md:my-4">
          Our Healthcare Solutions
        </h1>
        <h3 className="text-xl sm:text-xl xl:text-xl max-w-xl text-white">
          AI powered healthcare data-to-outcome platform
        </h3>

        <div className="flex flex-col gap-5 my-10 md:my-20">
          <div className="flex md:flex-row flex-col gap-5 justify-end">
            <div className="group w-full md:w-[400px] lg:h-[250px] border border-white rounded-3xl p-5">
              <FaStarOfLife className="h-7 w-7 text-white group-hover:animate-spin" />
              <h3 className="text-xl sm:text-xl xl:text-xl text-white my-4">
                Your Data Your Way With DataOps
              </h3>
              <p className="text-white">
                Bring the data you need in the format its available to you. Our
                no-code platform quickly configures the data, analyzes it with
                built-in AI models, and delivers actionable insights in real-time.
              </p>
            </div>

            <div className="group w-full md:w-[400px] lg:h-[250px] border border-white rounded-3xl p-5">
              <FaStarOfLife className="h-7 w-7 text-white group-hover:animate-spin" />
              <h3 className="text-xl sm:text-xl xl:text-xl text-white my-4">
                Market View Trends
              </h3>
              <p className="text-white">
                Tracks patient care trends and market share for all organizations.
                Our reliable and accurate data allows you to analyze cost of
                care trends, market share, patient demographics, service line, and
                payer mix.
              </p>
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-5 justify-start">
            <div className="group w-full md:w-[400px] lg:h-[250px] border border-white rounded-3xl p-5">
              <FaStarOfLife className="h-7 w-7 text-white group-hover:animate-spin" />
              <h3 className="text-xl sm:text-xl xl:text-xl text-white my-4">
                Drug Pricing & Analysis
              </h3>
              <p className="text-white">
                Full visibility of performance metrics, medical & RX combined
                PMPM, real-time RX claims audits to hold the PBM accountable.
              </p>
            </div>

            <div className="group w-full md:w-[400px] lg:h-[250px] border border-white rounded-3xl p-5">
              <FaStarOfLife className="h-7 w-7 text-white group-hover:animate-spin" />
              <h3 className="text-xl sm:text-xl xl:text-xl text-white my-4">
                Enrollment Management
              </h3>
              <p className="text-white">
                Reduce poor data quality and high error rates to enable efficient
                enrollment file processing and payment reconciliation for Medicaid
                & Medicare Advantage membership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
