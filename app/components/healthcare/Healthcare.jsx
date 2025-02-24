"use client";
import Image from "next/image";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Healthcare = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-full px-6 md:px-10 xl:px-[120px] pt-10 pb-[100px] flex items-center justify-between flex-col bg-[#EDF2FC]">
      <div className="text-[#AAB1C6] font-medium my-5 text-center">
        OUR HEALTHCARE SOLUTIONS
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="w-full flex justify-center xl:justify-start">
          <Image
            src={"/i28.png"}
            alt="hero"
            width={750}
            height={750}
            className="h-[450px] w-full max-w-[800px]"
          />
        </div>

        {/* Text Section */}
        <div className="p-4 xl:p-10">
          <div className="text-[#467DE1] font-medium">
            MEET TREO-IQ HUB
          </div>
          <div className="my-5 text-[24px] sm:text-[30px] xl:text-[35px] font-semibold text-[#343f52] leading-tight">
            AI powered healthcare data-to-outcome platform
          </div>

          {/* Section 1 */}
          <div onClick={() => toggleSection(1)}>
            <div className={`hover:text-[#467DE1] duration-500 cursor-pointer flex gap-2 items-center ${openSection == 1 ? 'text-[#467DE1]' : 'text-[#343f52]'} font-medium my-5`}>
              {openSection === 1 ? <FaAngleUp /> : <FaAngleDown />} Your Data_____Your Way With DevOps
            </div>
            {openSection === 1 && (
              <div className="my-4 text-[#A27D80] font-medium px-6">
                Bring the data you need in the format its available to you. Our no-code platform quickly configures the data, analyzes it with built-in AI models, and delivers actionable insights to your needs and preferences in real-time.
              </div>
            )}
          </div>

          {/* Section 2 */}
          <div onClick={() => toggleSection(2)}>
            <div className={`hover:text-[#467DE1] duration-500 cursor-pointer flex gap-2 items-center ${openSection == 2 ? 'text-[#467DE1]' : 'text-[#343f52]'} font-medium my-5`}>
              {openSection === 2 ? <FaAngleUp /> : <FaAngleDown />} Market View Trends
            </div>
            {openSection === 2 && (
              <div className="my-4 text-[#A27D80] font-medium px-6">
                Tracks patient care trends and market share for all organizations. Our reliable and accurate data allows you to analyze the cost of care trends, market share, patient demographics, service line, and payer mix.
              </div>
            )}
          </div>

          {/* Section 3 */}
          <div onClick={() => toggleSection(3)}>
            <div className={`hover:text-[#467DE1] duration-500 cursor-pointer flex gap-2 items-center ${openSection == 3 ? 'text-[#467DE1]' : 'text-[#343f52]'} font-medium my-5`}>
              {openSection === 3 ? <FaAngleUp /> : <FaAngleDown />} Drug Pricing & Analysis
            </div>
            {openSection === 3 && (
              <div className="my-4 text-[#A27D80] font-medium px-6">
                Full visibility of performance metrics, medical & RX combined PMPM, real-time RX claims audits holding the PBM accountable.
              </div>
            )}
          </div>

          {/* Section 4 */}
          <div onClick={() => toggleSection(4)}>
            <div className={`hover:text-[#467DE1] duration-500 cursor-pointer flex gap-2 items-center ${openSection == 4 ? 'text-[#467DE1]' : 'text-[#343f52]'} font-medium my-5`}>
              {openSection === 4 ? <FaAngleUp /> : <FaAngleDown />} Enrollment Management
            </div>
            {openSection === 4 && (
              <div className="my-4 text-[#A27D80] font-medium px-6">
                Reduce poor data quality and high error rates to enable efficient enrollment file processing and payment reconciliation for Medicaid & Medicare Advantage membership.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
