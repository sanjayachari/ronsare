'use client';
import React, { useState } from 'react';

const SupplyChain = () => {
  const [activeSection, setActiveSection] = useState('services');

  const sections = {
    services: [
      {
        title: "Transportation",
        desc: "Efficient and scalable transportation solutions for global enterprises.",
        image: "/se5.jpg",
      },
      {
        title: "Service Logistics",
        desc: "End-to-end logistics services to streamline your supply chain.",
        image: "/g9.jpg",
      },
    ],
    technologies: [
      {
        title: "Big Data",
        desc: "Leverage big data for actionable insights and decision-making.",
        image: "/g1.jpg",
      },
      {
        title: "Robotic Process Automation",
        desc: "Automate repetitive tasks to improve efficiency.",
        image: "/se5.jpg",
      },
      {
        title: "Artificial Intelligence & Machine Learning",
        desc: "AI/ML-driven solutions for predictive analytics.",
        image: "/g9.jpg",
      },
    ],
    successStories: [
      {
        title: "Tech Conglomerate Saves $2.5M",
        desc: "With Ronsares ‘Talent Community’.",
        image: "/g1.jpg",
      },
      {
        title: "Global Electronics Manufacturer Saves $1.2M",
        desc: "With Ronsares Advanced Analytics Solutions.",
        image: "/g9.jpg",
      },
    ],
  };

  return (
    <div className='bg-gradient-to-b from-[#f0f9ff] to-white py-20'>

      <div className="relative w-full   flex flex-col items-center px-4 sm:px-6 md:px-12 xl:px-10 xxl:px-20 max-w-screen-xxxl mx-auto">
        {/* Header Section */}
        <div className="w-full bg-gradient-to-br py-20 px-4 sm:px-6 md:px-12 lg:px-20 text-center">
          <h1 className="text-5xl font-extrabold text-[#0732EF] mb-6">Supply Chain & Logistics</h1>
          <p className="text-lg text-[#0732EF] max-w-3xl mx-auto leading-relaxed">
            At Ronsare, we help global enterprises create scalable and connected digital supply networks to drive resilience, agility, and predictability across the value chain.
          </p>
        </div>
  
        {/* Toggle Buttons */}
        <div className="mt-8 flex md:flex-row flex-col gap-2 justify-center w-full">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              className={`px-6 py-3 text-lg font-semibold rounded-xl transition duration-300 ${activeSection === key ? 'bg-[#0732EF] text-white shadow-lg' : 'bg-white text-[#0732EF] border border-[#0732EF] hover:bg-[#0732EF] hover:text-white'}`}
              onClick={() => setActiveSection(key)}
            >
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </button>
          ))}
        </div>
  
        {/* Content Section */}
        <div className="mt-16 w-full max-w-7xl mx-auto">
          {sections[activeSection].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-16`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
  
              {/* Text Content */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-[#0732EF] mb-4">{item.title}</h2>
                <p className="text-lg text-gray-700 mb-4">{item.desc}</p>
                <p className="text-md text-gray-500">Discover how our cutting-edge solutions empower businesses to optimize their supply chain, reduce costs, and enhance operational efficiency.</p>
              </div>
            </div>
          ))}
        </div>
  
        {/* CTA Section */}
        <div className="mt-20 w-full max-w-7xl mx-auto text-center">
          <a
            href="#"
            className="inline-block bg-[#0732EF] text-white px-8 py-4 rounded-lg hover:bg-[#0A4BF5] transition-all duration-300 transform hover:scale-105"
          >
            Explore All Success Stories
          </a>
        </div>
      </div>
    </div>
    );
};

export default SupplyChain;