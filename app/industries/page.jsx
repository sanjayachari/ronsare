import React from "react";
import HealthCare from "../components/healtcare/HealthCare";
import Navbar from "../components/navbar/Navbar";
import MobileNavbar from "../components/navbar/ResponsiveNav";
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
      <HealthCare />
      <Footer />
    </div>
  );
};

export default page;
