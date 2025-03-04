import React from "react";
import Navbar from "../components/navbar/Navbar";
import MobileNavbar from "../components/navbar/ResponsiveNav";
import HealthCarePage from "../components/healthCarePage/HealthCarePage";
import Footer from "../components/footer/Footer";
import FinancialBanking from "../components/financial/FinancialBanking";

const page = () => {
  return (
    <div>
      <div className="lg:block hidden ">
        <Navbar />
      </div>
      <div className="lg:hidden block ">
        <MobileNavbar />
      </div>
      <FinancialBanking />
      <Footer />
    </div>
  );
};

export default page;
