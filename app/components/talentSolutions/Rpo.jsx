import React from 'react';

// Icons (You can replace these with your preferred icon library like Heroicons or FontAwesome)
const EnterpriseIcon = () => (
  <svg className="w-12 h-12 text-[#0732EF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
  </svg>
);

const ProjectIcon = () => (
  <svg className="w-12 h-12 text-[#0732EF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
  </svg>
);

const RecruiterIcon = () => (
  <svg className="w-12 h-12 text-[#0732EF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
  </svg>
);

const RPOServices = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <div className="relative w-full flex flex-col items-center bg-gradient-to-br from-[#0732EF] to-[#0A4BF5] py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="text-center max-w-4xl">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Global RPO Services Tailored For Your Talent Needs
          </h2>
          <p className="mt-6 text-lg text-gray-200">
            Looking to expand your workforce for high visibility projects? Struggling to meet the hiring demand? Facing trouble in recruiting remote talent from anywhere?
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-3xl font-bold text-gray-900 text-center">OUR SERVICES</h3>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Enterprise RPO */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <EnterpriseIcon />
            <h4 className="mt-6 text-xl font-semibold text-gray-800">ENTERPRISE RPO</h4>
            <p className="mt-4 text-gray-600">
              A fully outsourced recruitment solution strategy for end-to-end talent acquisition.
            </p>
          </div>

          {/* Project RPO */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <ProjectIcon />
            <h4 className="mt-6 text-xl font-semibold text-gray-800">PROJECT RPO</h4>
            <p className="mt-4 text-gray-600">
              Tailored RPO solutions for specific projects, ensuring flexibility and scalability.
            </p>
          </div>

          {/* Recruiter On Demand */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <RecruiterIcon />
            <h4 className="mt-6 text-xl font-semibold text-gray-800">RECRUITER ON DEMAND</h4>
            <p className="mt-4 text-gray-600">
              Access skilled recruiters on-demand to scale your hiring efforts efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* Key Differentiators Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center">KEY DIFFERENTIATORS</h3>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Agile, Scalable, and Flexible */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <svg className="w-12 h-12 text-[#0732EF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              <h4 className="mt-6 text-xl font-semibold text-gray-800">AGILE, SCALABLE & FLEXIBLE</h4>
              <p className="mt-4 text-gray-600">
                Swiftly ramp up or down recruiters based on dynamic hiring needs.
              </p>
            </div>

            {/* Process Efficiency */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <svg className="w-12 h-12 text-[#0732EF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
              <h4 className="mt-6 text-xl font-semibold text-gray-800">PROCESS EFFICIENCY</h4>
              <p className="mt-4 text-gray-600">
                Transparent, measurable, and predictable recruitment processes.
              </p>
            </div>

            {/* Tech and Touch */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <svg className="w-12 h-12 text-[#0732EF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              <h4 className="mt-6 text-xl font-semibold text-gray-800">TECH AND TOUCH</h4>
              <p className="mt-4 text-gray-600">
                Blend recruitment expertise with AI-powered solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default RPOServices;