'use client'
import React, { useState } from 'react';
import { Briefcase, UserCheck, HeartPulse, Stethoscope, Users, ShieldCheck, PlusCircle } from 'lucide-react';

const NurseStaffing = () => {
  const [activeTab, setActiveTab] = useState('nurses');

  const categories = {
    nurses: [
      { icon: <HeartPulse size={48} />, title: "Registered Nurses (RNs)", desc: "Experienced RNs available for various healthcare settings." },
      { icon: <Stethoscope size={48} />, title: "Licensed Practical Nurses (LPNs)", desc: "Skilled LPNs for hospitals, clinics, and home care." },
      { icon: <Users size={48} />, title: "Certified Nursing Assistants (CNAs)", desc: "Reliable CNAs to support patient care needs." },
    ],
    jobs: [
      { icon: <Briefcase size={48} />, title: "Full-Time Positions", desc: "Secure a stable role in top healthcare facilities." },
      { icon: <ShieldCheck size={48} />, title: "Part-Time & Per Diem", desc: "Flexible work schedules for healthcare professionals." },
      { icon: <PlusCircle size={48} />, title: "Travel Assignments", desc: "Opportunities to work as a travel nurse nationwide." },
    ]
  };

  return (
    <div className="relative my-[60px] md:mt-[90px] w-full flex flex-col items-center px-4 sm:px-6 md:px-12 xl:px-10 xxl:px-20 max-w-screen-xxxl mx-auto">
      <h1 className="text-5xl font-extrabold text-[#0732EF] text-center mb-6">Nurse Staffing</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl leading-relaxed">
        Find the right nursing job or hire skilled healthcare professionals with Ronsare Healthcare.
      </p>
      
      <div className="mt-8 flex space-x-4">
        <button 
          className={`px-6 py-3 text-lg font-semibold rounded-xl transition duration-300 ${activeTab === 'nurses' ? 'bg-[#0732EF] text-white' : 'bg-white text-[#0732EF] border border-[#0732EF]'}`}
          onClick={() => setActiveTab('nurses')}
        >
          Nurses We Hire
        </button>
        <button 
          className={`px-6 py-3 text-lg font-semibold rounded-xl transition duration-300 ${activeTab === 'jobs' ? 'bg-[#0732EF] text-white' : 'bg-white text-[#0732EF] border border-[#0732EF]'}`}
          onClick={() => setActiveTab('jobs')}
        >
          Job Types
        </button>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {categories[activeTab].map((item, index) => (
          <div key={index} className="relative group p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="bg-[#0732EF] text-white p-4 rounded-full shadow-lg mb-4">{item.icon}</div>
            <h2 className="text-2xl font-semibold text-[#0732EF]">{item.title}</h2>
            <p className="text-gray-600 mt-2">{item.desc}</p>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0732EF] to-blue-500 opacity-0 group-hover:opacity-10 rounded-2xl"></div>
          </div>
        ))}
      </div>
      
    
    </div>
  );
};

export default NurseStaffing;
