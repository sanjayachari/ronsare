import React from "react";

const FinancialBanking = () => {
  return (
 <section className="bg-gray-100">
       <div className="py-20 mt-[60px] md:mt-[90px] w-full flex flex-col items-center  px-4 sm:px-6 md:px-12 xl:px-10 xxl:px-20 max-w-screen-xxxl mx-auto">
      <div className="text-center max-w-4xl">
        <h2 className="text-4xl font-bold text-[#0732EF]">
          Banking & Financial Services
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          With 25 years of experience in helping our customers build innovative
          solutions in Banking and Financial Services, Innova is steering the
          “Extreme design” approach in digital solutions.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {[
          { label: "BFS Innovators", value: "12K" },
          { label: "Countries", value: "15" },
          { label: "Customers", value: "200+" },
          { label: "Years of Experience", value: "25" },
          { label: "Top BFS Companies", value: "6 of Top 10" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 text-center flex flex-col items-center"
          >
            <span className="text-3xl font-bold text-blue-600">
              {item.value}
            </span>
            <span className="text-gray-700 mt-2">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-5xl text-center">
        <h3 className="text-2xl font-semibold text-[#0732EF]">
          Our Expertise in MACXDS Digital Technologies
        </h3>
        <p className="text-gray-600 mt-4">
          We leverage innovation and emerging technologies such as
          Microservices, APIs, Cloud Native, eXperience, Data Science, and
          Security to revolutionize BFS.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 w-full max-w-5xl">
        {[
          "Microservices",
          "APIs",
          "Cloud Native",
          "eXperience",
          "Data Science",
          "Security",
        ].map((tech, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 text-center"
          >
            <span className="text-gray-600 font-medium">{tech}</span>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-5xl text-center">
        <h3 className="text-2xl font-semibold text-[#0732EF]">
          Our Impact Across Banking Segments
        </h3>
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-5xl">
        {[
          "Consumer Banking",
          "Corporate Banking",
          "Investment Banking",
          "Payments & Cards",
          "Fin Market Infra",
          "Risks & Compliance",
          "Enterprise Functions",
        ].map((segment, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 text-center"
          >
            <span className="text-gray-600 font-medium">{segment}</span>
          </div>
        ))}
      </div>
    </div>
 </section>
  );
};

export default FinancialBanking;
