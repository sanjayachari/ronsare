import Link from 'next/link'
import React from 'react'

const HealthCare = () => {
  return (
<div className="mt-[60px] md:mt-[90px] py-20 w-full flex justify-center items-center bg-white px-2 sm:px-2 md:px-12 xl:px-10 xxl:px-20 max-w-screen-xxxl mx-auto">
  <div className="max-w-6xl w-full">
    {/* Section 1: Introduction */}
    <div className="text-center px-4">
      <h1 className="text-4xl font-bold text-[#0732EF] leading-tight">Empowering Businesses with Cutting-Edge IT Solutions</h1>
      <p className="mt-6 text-lg text-[#1E40AF] leading-relaxed">
        At Ronsare, we help businesses navigate the digital landscape by providing top-tier IT talent and innovative technology solutions.  
        Our expertise spans multiple industries, ensuring that organizations stay ahead with scalable, high-performance IT services.
      </p>
    </div>

    {/* Section 2: Our Services */}
    <div className="mt-16 px-4">
      <h2 className="text-3xl font-semibold text-[#0732EF] text-center">Our Core Services</h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
        {["IT Talent Acquisition", "AI-Driven Recruitment", "Cloud & DevOps Solutions", "Cybersecurity & Compliance", "Enterprise IT Consulting", "Workforce & Remote Solutions"].map((service, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-md bg-blue-50 hover:bg-blue-100 transition-all">
            <h3 className="text-xl font-semibold text-[#0732EF]">{service}</h3>
            <p className="text-[#1E40AF] mt-2">Providing top-tier solutions to meet industry-specific IT challenges.</p>
          </div>
        ))}
      </div>
    </div>

    {/* Section 3: Industries We Serve */}
    <div className="mt-20 px-4">
      <h2 className="text-3xl font-semibold text-[#0732EF] text-center">Industries We Serve</h2>
      <p className="mt-6 text-lg text-[#1E40AF] text-center leading-relaxed">
        Our expertise extends across a wide range of industries, enabling organizations to leverage technology for improved efficiency, security, and growth.
      </p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
        {["Healthcare", "Finance & Banking", "Retail & E-Commerce", "Technology & SaaS", "Manufacturing"].map((industry, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-md bg-blue-50 hover:bg-blue-100 transition-all">
            <h3 className="text-xl font-semibold text-[#0732EF]">{industry}</h3>
            <p className="text-[#1E40AF] mt-2">Leveraging technology for innovation and efficiency.</p>
          </div>
        ))}
      </div>
    </div>

    {/* Call to Action */}
    <div className="mt-16 text-center px-4">
      <h2 className="text-2xl font-semibold text-[#0732EF]">Partner with Us</h2>
      <p className="mt-4 text-lg text-[#1E40AF] leading-relaxed">
        Looking for IT solutions tailored to your industry? Let’s discuss how we can help your business grow.
      </p>
      <Link href="/contact" className="mt-6 inline-block px-6 py-3 text-white bg-[#0732EF] rounded-lg text-lg font-medium transition hover:bg-[#0527C2]">
        Contact Us
      </Link>
    </div>
  </div>
</div>
  )
}

export default HealthCare
