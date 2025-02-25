import React from 'react'
import Navbar from '../components/navbar/Navbar'
import MobileNavbar from '../components/navbar/ResponsiveNav'
import Footer from '../components/footer/Footer'
import ContactUs from '../components/contact/Contact'

const page = () => {
  return (
    <div>
         <div className="lg:block hidden ">
            <Navbar />
            </div>
            <div className="lg:hidden block ">
            <MobileNavbar />
            </div>
            <ContactUs />
            <Footer />
    </div>
  )
}

export default page