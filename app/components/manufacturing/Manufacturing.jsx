import React from "react";

const Manufacturing = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-200 py-20">
      <div className="mt-[60px] md:mt-[90px] w-full flex flex-col items-center px-6 sm:px-10 md:px-16 xl:px-24 max-w-screen-xxxl mx-auto">
        <div className="text-center max-w-3xl">
          <h2 className="text-5xl font-extrabold text-[#0732EF] tracking-wide">Ronsare Manufacturing Expertise</h2>
          <p className="text-lg text-gray-700 mt-6 leading-relaxed">
            As the Fifth Industrial Revolution advances, technologies such as AI, robotics, and IoT are transforming industrial processes.
            Our innovators embrace this exciting chapter, fostering synergy between humans and machines for efficiency, innovation, and sustainability.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 w-full max-w-5xl">
          {[
            { label: "Customers", value: "300+" },
            { label: "Associates", value: "5000+" },
            { label: "Years in Service", value: "25+" },
            { label: "Fortune 500 Customers", value: "50+" },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl p-8 text-center flex flex-col items-center w-[200px] border-t-4 border-[#0732EF]">
              <span className="text-4xl font-extrabold text-[#0732EF]">{item.value}</span>
              <span className="text-gray-600 mt-2 text-lg">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl text-center">
          <h3 className="text-3xl font-bold text-gray-900">The Ronsare Edge</h3>
          <p className="text-gray-700 mt-6 text-lg leading-relaxed">
            With 25+ years of Digital Manufacturing expertise, we prioritize a Digital First approach,
            incorporating agility, software-first design, and progressive industry strategies.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {["Agile Innovation", "Customer-Centric Approach", "Global Presence", "Industry-Aligned Expertise", "Flexible Engagement Models", "Accelerated Time-to-Market"].map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-center border-l-4 border-[#0732EF]">
              <span className="text-gray-900 font-semibold text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;
