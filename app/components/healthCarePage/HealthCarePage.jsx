import React from "react";
import { FaChartBar, FaHospital, FaHeartbeat, FaCapsules } from "react-icons/fa";

const HealthCarePage = () => {
  const statistics = [
    { number: "100+", label: "Providers", description: "Supporting for over 25 years", icon: <FaHospital className="text-blue-600 text-4xl" /> },
    { number: "20+", label: "Payers", description: "Supporting for over 20 years", icon: <FaHeartbeat className="text-red-600 text-4xl" /> },
    { number: "25+", label: "Digital Health Orgs", description: "Supporting for over 20 years", icon: <FaChartBar className="text-green-600 text-4xl" /> },
    { number: "150+", label: "Pharma & Med Device Orgs", description: "Supporting for over 20 years", icon: <FaCapsules className="text-purple-600 text-4xl" /> },
  ];

  return (
    <div className="py-20 mt-[60px] md:mt-[90px] w-full flex flex-col items-center bg-white px-4 sm:px-6 md:px-12 xl:px-10 xxl:px-20 max-w-screen-xxxl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#0732EF] mb-6">Healthcare, Life Sciences, and Insurance</h1>
      <p className="text-lg text-gray-700 max-w-4xl text-center mb-8">
        The last few years have witnessed unparalleled change in the healthcare industry, with organizations forced to rethink strategies, investments, and operations. Patient centricity plays a pivotal role, and key trends indicate major shifts in the industry.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-[#0732EF] mb-3">Key Industry Trends</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Growing investment in virtual and physical primary care services for accessibility and affordability.</li>
            <li>Changing demographics accelerating growth of Medicare-eligible populations.</li>
            <li>Rising customer expectations demanding better healthcare experiences.</li>
            <li>Growth of data monetization, increasing use of member and provider data.</li>
            <li>Innovations in medical technology driving patient-centric healthcare.</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-[#0732EF] mb-3">Our Impact</h2>
          <p className="text-gray-700">
            We partner with Payers, Providers, and Digital Health organizations to modernize, optimize, and transform clinical, operational, and financial platforms. Our services enhance customer experience, improve clinical outcomes, drive business growth, and reduce operational costs.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 w-full max-w-5xl">
        {statistics.map((stat, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg border border-gray-200">
            {stat.icon}
            <h3 className="text-2xl font-bold text-[#0732EF] mt-3">{stat.number}</h3>
            <p className="text-lg text-gray-700 font-semibold">{stat.label}</p>
            <p className="text-sm text-gray-600 text-center">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthCarePage;
