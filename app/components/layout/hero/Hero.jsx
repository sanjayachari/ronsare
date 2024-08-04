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

const Hero = () => {
  const { data } = useContext(Context);
  console.log(data);
  return (
    <div className="relative">
      <div className="h-[130px] md:h-[400px] flex justify-start bg-[#572148] gap-5 w-full ">
        <Banner />
      </div>

      <div className="md:fixed top-[100px] right-[100px]  p-2 md:p-0 md:w-[400px] ">
        <Right />
      </div>
      <div className="pl:[150px] xl:pl-[200px] w-[60%]">

      {/* <About /> */}
     
      </div>
    </div>
  );
};
export default Hero;
