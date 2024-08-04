// import { Context } from "@/app/contexts/Context";
// import React, { useContext } from "react";
// import Right from "./right/Right";
// import Banner from "./left/banner/Banner";
// import About from "./left/about/About";

// const Hero = () => {
//   const { data } = useContext(Context);
//   console.log(data);
//   return (
//     <div className=" ">
//       <div className="h-[400px] flex justify-center bg-[#572148] gap-5 w-full ">
//         <Banner/>
//         <Right className=""/>
//       </div>

//       {/* <About/>
//       <About/>
//       <About/>
//       <About/>
//       <About/>
//       <About/> */}
//     </div>
//   );
// };

// export default Hero;

import { Context } from "@/app/contexts/Context";
import React, { useContext } from "react";
import Right from "./right/Right";
import Banner from "./left/banner/Banner";
import About from "./left/about/About";
import ChildrenNavbar from "./left/nav/ChildrenNavbar";
import Tickets from "./left/tickets/Tickets";
import Speaker from "./left/speakers/Speaker";
import Workshop from "./left/workshops/Workshop";
import Sponsor from "./left/eventSponsor/Sponsor";

const Hero = () => {
  const { data } = useContext(Context);
  console.log(data);
  return (
    <div className="relative">
      <div className="h-[130px] md:h-[400px] flex justify-start bg-[#572148] gap-5 w-full ">
        <Banner />
      </div>
      <div className="z-20 md:fixed top-[85px] 2xl:top-[100px] md:right-[60px] xl:right-[70px] 2xl:right-[100px]  p-2 md:p-0 md:w-[400px] ">
        <Right />
      </div>
      <div className="xl:pl-[100px] 2xl:pl-[200px] w-full md:w-[60%] md:p-0 p-2">
        <ChildrenNavbar />
        <About />
        <Tickets />
        <Speaker />
        <Workshop />
        <Sponsor />
      </div>
    </div>
  );
};
export default Hero;
