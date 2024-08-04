import React from "react";

const ChildrenNavbar = () => {
  return (
    <nav className="flex justify-between gap-3 text-black my-2 border-b border-[#596275] border-opacity-50 w-[360px] hide-scrollbar md:w-full overflow-x-scroll scroll-auto">
      <div className="p-2 border-b  border-[#596275] border-opacity-50 whitespace-nowrap cursor-pointer">
        About
      </div>
      <div className="p-2 whitespace-nowrap cursor-not-allowed">Tickets</div>
      <div className="p-2 whitespace-nowrap cursor-pointer">
       <a href="#speakers"> speakers section</a>
      </div>
      <div className="p-2 whitespace-nowrap cursor-pointer">
       <a href="#workshop">workshop section</a>
      </div>
      <div className="p-2 whitespace-nowrap cursor-pointer">
       <a href="#event">event sponsors</a>
        
        </div>
    </nav>
  );
};

export default ChildrenNavbar;
