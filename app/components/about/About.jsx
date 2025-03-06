"use client";

import React from "react";

export default function About() {
  return (
    <section className="my-20 bg-gradient-to-b from-[#f0f9ff] to-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl    font-bold text-[#0732EF] mb-6 drop-shadow-md">
          Welcome to Ronsare
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          Your trusted partner in healthcare innovation, compliance, and cost-saving solutions. We specialize in data analytics, AI-driven compliance, and claims optimization, helping health plans, payers, and healthcare organizations navigate complex CMS regulations while maximizing operational efficiency.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mt-4 text-gray-700">
          Our expertise spans Medicaid & Medicare compliance, claims adjudication, and enrollment optimization, with tailored solutions that reduce costs, improve regulatory adherence, and enhance payment integrity. We support Medicaid CAP criteria, provider rate negotiations, and automated data processes to drive efficiency without compromising quality of care.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mt-4 text-gray-700">
          With a proven track record of delivering measurable cost savings and regulatory compliance, we help organizations optimize technology operations, streamline workflows, and ensure 100% CMS audit readiness.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mt-6 font-semibold text-gray-900">
          📩 Connect with us to explore how our data-driven solutions can transform your organization’s approach to healthcare cost management and compliance.
        </p>
        <div className="mt-8">
          <a
            href="https://ronsare.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0732EF] font-semibold text-xl hover:underline transition duration-300"
          >
            ronsare.com
          </a>
          <p className="mt-2 text-lg text-gray-800">📞 646-470-4686</p>
        </div>
      </div>
    </section>
  );
}