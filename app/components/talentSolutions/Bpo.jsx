import React from 'react';
import { Briefcase, UserCheck, ShieldCheck, Cloud, Code, Lock, Headphones, FileText, LifeBuoy, Users } from 'lucide-react';

const BPOStaffing = () => {
  return (
    <div className='bg-gradient-to-b from-[#f3f7ff] to-white  pt-[60px] '>

    <div className="relative md:mt-[90px] w-full flex flex-col items-center  px-4 sm:px-6 md:px-12 xl:px-10 xxl:px-20 max-w-screen-xxxl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-[#0732EF] text-center mb-6">Business Process Staffing</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl leading-relaxed">
        Efficient staffing solutions with a qualified talent pipeline and global fulfillment capabilities.
      </p>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {[ 
          { icon: <Headphones size={48} />, title: "Customer Helpdesk", desc: "24/7 customer support with experienced professionals." },
          { icon: <FileText size={48} />, title: "Billing & Invoicing", desc: "Accurate financial transactions handled by experts." },
          { icon: <LifeBuoy size={48} />, title: "Claims Management", desc: "Manage insurance claims with precision and compliance." },
          { icon: <Users size={48} />, title: "Healthcare Professionals", desc: "Qualified healthcare staff for critical business needs." },
          { icon: <Briefcase size={48} />, title: "Order Management", desc: "Streamlined order processing with skilled professionals." },
          { icon: <ShieldCheck size={48} />, title: "IT Helpdesk", desc: "Reliable IT support and troubleshooting services." }
        ].map((item, index) => (
          <div key={index} className="relative group p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="bg-[#0732EF] text-white p-4 rounded-full shadow-lg mb-4">{item.icon}</div>
            <h2 className="text-2xl font-semibold text-[#0732EF]">{item.title}</h2>
            <p className="text-gray-600 mt-2">{item.desc}</p>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0732EF] to-blue-500 opacity-0 group-hover:opacity-10 rounded-2xl"></div>
          </div>
        ))}
      </div>
      
   
    </div>
    </div>
  );
};

export default BPOStaffing;
