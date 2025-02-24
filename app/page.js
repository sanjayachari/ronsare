
import AiComp from "./components/AiComp";
import Healthcare  from "./components/healthcare/Healthcare";
import Hero from "./components/hero/Hero";
import LetsTalk from "./components/letsTalk/LetsTalk";
import WeWork from "./components/weWork/WeWork";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Ai from "./components/ai/Ai";
import Service from "./components/service/Service";
import Business from "./components/business/Business";
import Industries from "./components/industries/Industries";
import Ecosystem from "./components/ecosystem/Ecosystem";
import MobileNavbar from "./components/navbar/ResponsiveNav";

export default function Home() {
  return (
   <div>
    <div className="lg:block hidden ">
    <Navbar />
    </div>
    <div className="lg:hidden block ">
    <MobileNavbar />
    </div>
    <Hero/>
    {/* <AiComp/> */}
    <Ai />
    <Service />
    <Business />
    {/* <WeWork /> */}
    {/* <Healthcare/> */} 
    <Industries />
    <Ecosystem />
    <LetsTalk/>
    <Footer/>

   </div>
  );
}
