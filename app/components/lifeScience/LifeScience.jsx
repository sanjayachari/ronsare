'use client';
import Link from 'next/link';
import React from 'react';

const LifeSciences = () => {
  const services = [
    {
      title: "Molecule Development",
      desc: "From discovery to preclinical development, we support the early stages of drug development with advanced analytics and technology solutions.",
      image: "molecule.jpeg",
    },
    {
      title: "Clinical Trials",
      desc: "Streamline clinical trial processes with our data-driven solutions, ensuring compliance and efficiency.",
      image: "clinical.png",
    },
    {
      title: "Post-Marketing Support",
      desc: "Leverage real-world evidence and analytics to optimize post-marketing strategies and ensure regulatory compliance.",
      image: "post_market_support.jpeg",
    },
    {
      title: "Real World Evidence",
      desc: "Harness real-world data to drive evidence-based decisions and improve patient outcomes.",
      image: "real_world_evidance.jpeg",
    },
    {
      title: "Regulatory Support",
      desc: "Ensure compliance with global regulatory standards through our expert guidance and technology solutions.",
      image: "regulatory_services.webp",
    },
    {
      title: "Process Excellence",
      desc: "Reconstruct and optimize processes with our automation-first approach, delivering efficiency and cost savings.",
      image: "process_exe.jpeg",
    },
  ];

  return (
    <div className="relative w-full my-20 flex flex-col items-center bg-gradient-to-b from-[#f0f9ff] to-white px-4 sm:px-6 md:px-12 xl:px-10 xxl:px-20 max-w-screen-xxxl mx-auto">
      {/* Header Section */}
      <div className="w-full py-20 px-4 sm:px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-[#0732EF] mb-6">Enabling Enterprises that Bring Sciences to Life</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Ronsare Life Sciences helps you navigate operational, regulatory, and technological challenges with a digital-first approach, delivering value across the drug lifecycle.
        </p>
      </div>

      {/* Services Grid Section */}
      <div className="mt-2 w-full max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0732EF] opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm">{service.desc}</p>
              </div>

              {/* Title (Always Visible) */}
              <div className="absolute inset-0 p-6 flex items-end bg-gradient-to-b from-transparent to-black/50">
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 w-full max-w-7xl mx-auto text-center">
        <Link
          href="/"
          className="inline-block bg-[#0732EF] text-white px-8 py-4 rounded-lg hover:bg-[#0A4BF5] transition-all duration-300 transform hover:scale-105"
        >
          Explore All Services
        </Link>
      </div>
    </div>
  );
};

export default LifeSciences;