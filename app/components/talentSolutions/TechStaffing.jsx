import React from 'react';
import { Briefcase, UserCheck, ShieldCheck, Cloud, Code, Lock } from 'lucide-react';

const TechStaffing = () => {
  return (
    <div className='bg-gray-50'>

    <div className="pt-20 mt-[60px] md:mt-[90px] w-full flex flex-col items-center px-4 sm:px-6 md:px-12 xl:px-10 xxl:px-20 max-w-screen-xxxl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-[#0732EF] text-center mb-8">Technology Staffing</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl leading-relaxed">
        Execute digital initiatives on-time and on-budget. At Ronsare, we transform the talent acquisition landscape, making digital transformation a reality through our IT staffing services.
      </p>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {[ 
          { icon: <Briefcase />, title: "Contract Talent", desc: "Hire contract professionals for project-based work without long-term commitments." },
          { icon: <UserCheck />, title: "Permanent Placement", desc: "Find full-time employees to strengthen your team with the right talent." },
          { icon: <ShieldCheck />, title: "Recruitment Process Outsourcing", desc: "Let us handle your end-to-end recruitment needs for scalable hiring." }
        ].map((item, index) => (
          <div key={index} className="p-8 bg-white rounded-2xl shadow-lg flex items-start gap-4 transition-transform transform hover:-translate-y-2">
            <div className="text-[#0732EF] w-12 h-12">{item.icon}</div>
            <div>
              <h2 className="text-2xl font-semibold text-[#0732EF]">{item.title}</h2>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {[ 
          { icon: <Cloud />, title: "Cloud Computing", desc: "Get skilled cloud computing (AWS, Azure) candidates for your tech needs." },
          { icon: <Code />, title: "Java Full Stack", desc: "Hire Java full-stack developers skilled in both front-end and back-end." },
          { icon: <Lock />, title: "Cyber Security", desc: "Secure your business from data breaches and cyber threats." }
        ].map((item, index) => (
          <div key={index} className="p-8 border border-[#0732EF]  rounded-2xl shadow-lg flex items-start gap-4 transition-transform transform hover:-translate-y-2">
            <div className="w-12 h-12">{item.icon}</div>
            <div>
              <h2 className="text-2xl font-semibold text-[#0732EF]">{item.title}</h2>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
   
    </div>
    </div>
  );
};

export default TechStaffing;