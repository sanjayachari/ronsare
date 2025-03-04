import React from 'react'
import Navbar from '../components/navbar/Navbar'
import MobileNavbar from '../components/navbar/ResponsiveNav'
import HealthCarePage from '../components/healthCarePage/HealthCarePage'
import Footer from '../components/footer/Footer'

const HealthCare = () => {
  return (
    <div>
    <div className="lg:block hidden ">
      <Navbar />
    </div>
    <div className="lg:hidden block ">
      <MobileNavbar />
    </div>
    <HealthCarePage />
    <Footer />
  </div>
  )
}

export default HealthCare