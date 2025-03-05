import React from 'react'
import TechStaffing from '../components/talentSolutions/TechStaffing'
import Navbar from '../components/navbar/Navbar'
import MobileNavbar from '../components/navbar/ResponsiveNav'
import Footer from '../components/footer/Footer'
import BPOStaffing from '../components/talentSolutions/Bpo'
import NurseStaffing from '../components/talentSolutions/NurseStaffing'
import RPOServices from '../components/talentSolutions/Rpo'

const page = () => {
  return (
    <div>
    <div className="lg:block hidden ">
      <Navbar />
    </div>
    <div className="lg:hidden block ">
      <MobileNavbar />
    </div>
    <TechStaffing />
    <BPOStaffing />
    <NurseStaffing />
    <RPOServices />
    <Footer />
  </div>  )
}

export default page