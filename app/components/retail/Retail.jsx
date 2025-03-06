import React from "react";
import { FaChartLine, FaStore, FaShippingFast, FaShoppingCart } from "react-icons/fa";

const RetailCPG = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mt-12 md:mt-16 text-center w-full px-6 sm:px-x md:px-12 xl:px-20 max-w-screen-xxxl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-[#0732EF]">Retail & CPG Excellence</h2>
        <p className="text-base sm:text-lg text-gray-700 mt-4 sm:mt-6 leading-relaxed">
          In today’s dynamic retail landscape, businesses need a strategic, data-driven approach to stay ahead. At Ronsare, we empower retailers and brands with cutting-edge solutions that enhance consumer engagement, operational efficiency, and digital transformation.
        </p>
      </div>

      <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {[
          { icon: <FaChartLine className='text-4xl sm:text-5xl text-[#0732EF]' />, title: "Intelligent Retail", desc: "Leverage data-driven insights to create personalized consumer experiences." },
          { icon: <FaStore className='text-4xl sm:text-5xl text-[#0732EF]' />, title: "Omnicommerce", desc: "Seamlessly integrate digital and physical retail channels for omnichannel success." },
          { icon: <FaShippingFast className='text-4xl sm:text-5xl text-[#0732EF]' />, title: "Smart Supply Chain", desc: "Optimize logistics and operations for better transparency and efficiency." },
          { icon: <FaShoppingCart className='text-4xl sm:text-5xl text-[#0732EF]' />, title: "Smart Store", desc: "Transform physical spaces into immersive, phygital experiences." }
        ].map((item, index) => (
          <div key={index} className="bg-white shadow-md sm:shadow-lg rounded-xl p-6 sm:p-8 text-center transition-transform transform hover:scale-105 hover:shadow-2xl border-t-4 border-[#0732EF]">
            {item.icon}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-4">{item.title}</h3>
            <p className="text-gray-600 mt-2 text-base sm:text-lg">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 md:mt-20 max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Unlocking Retail Success</h3>
        <p className="text-gray-700 mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed">
          By harnessing AI, analytics, and automation, we help retailers and brands redefine their customer experience, optimize supply chains, and accelerate digital transformation for sustained success.
        </p>
      </div>

      <div className="mt-12 md:mt-16 max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Choose Ronsare?</h3>
        <p className="text-gray-700 mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed">
          We combine technology with deep retail expertise to drive measurable results. Our industry-leading solutions enable retailers to adapt, innovate, and grow in an ever-evolving market. Whether enhancing customer engagement, streamlining operations, or leveraging intelligent data science, Ronsare stands as your trusted partner for retail transformation.
        </p>
      </div>
    </section>
  );
};

export default RetailCPG;
