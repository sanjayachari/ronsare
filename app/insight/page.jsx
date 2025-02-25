import React from "react";
import DigitalInsights from "../components/insights/Inisights";
import MobileNavbar from "../components/navbar/ResponsiveNav";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const page = () => {
  return (
    <div>
      <div className="lg:block hidden ">
        <Navbar />
      </div>
      <div className="lg:hidden block ">
        <MobileNavbar />
      </div>
      <DigitalInsights />
      <Footer />
    </div>
  );
};

export default page;
