"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons"; // Ant Design icons for hamburger and close
import { motion } from "framer-motion"; // Import framer-motion for animations
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

export default function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility
  const [showRoute1, setShowRoute1] = useState(false);
  const [showRoute2, setShowRoute2] = useState(false);
  const [showRoute3, setShowRoute3] = useState(false);
  const [showChildRoute1, setShowChildRoute1] = useState(false);
  const [showChildRoute2, setShowChildRoute2] = useState(false);
  const [showChildRoute3, setShowChildRoute3] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  // Add or remove the body overflow class when menu is open or closed
 useEffect(()=>{
    if (menuOpen) {
        document.body.style.overflow = "hidden"; // Prevent background scrolling
      } else {
        document.body.style.overflow = "auto"; // Allow background scrolling
      }
 },[])

  return (
    <div className="w-full  bg-black bg-opacity-50 text-white  ">
      <div className="flex justify-between w-full items-center p-5 h-[60px]">
        {" "}
        {/* Navbar Brand (Logo) */}
        <div className="">
          <Image
            src="/logo-light.png" // Replace with your logo path
            alt="logo"
            width={120}
            height={40}
            className="object-cover"
          />
        </div>
        {/* Hamburger Icon */}
        <div className="menu-icon">
          {!menuOpen && (
            <MenuOutlined className="text-2xl" onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`mobile-menu fixed top-0 left-0 w-[80%] h-screen bg-black flex flex-col p-5  space-y-6 z-50`}
        initial={{ x: "-100%" }} // Start off-screen to the left
        animate={{ x: menuOpen ? 0 : "-100%" }} // Animate to screen position or off-screen
        transition={{ duration: 0.3 }} // Duration for smooth sliding without bounce
      >
        <div className="flex justify-between w-full ">
          <Image
            src="/logo-light.png"
            alt="logo"
            width={150}
            height={150}
            className="py-4"
          />
          {/* Close Button */}
          <div className="flex justify-end w-full py-4">
            <MdOutlineCancel
              className="text-2xl"
              onClick={() => setMenuOpen(false)}
            />{" "}
            {/* Close button */}
          </div>
        </div>

        <div>
          <div
            className="flex justify-between items-center "
            onClick={() => {
              setShowRoute1(!showRoute1);
              setShowRoute2(false);
              setShowRoute3(false);
              setShowChildRoute1(false);
              setShowChildRoute2(false)
              setShowChildRoute3(false)
            }}
          >
            <div href="#what-we-do" className="text-lg">
              What we do
            </div>

            {showRoute1 ? <FaAngleUp /> : <FaAngleDown />}
          </div>

          {showRoute1 && (
            <div
              className="flex justify-between items-center pl-4 my-4"
              onClick={() => setShowChildRoute1(!showChildRoute1)}
            >
              <div
                href="#what-we-do"
                className="text-lg"
                // onClick={() => setShowChildRoute1(!showChildRoute1)}
              >
                Industries
              </div>

              {showChildRoute1 ? <FaAngleUp /> : <FaAngleDown />}
            </div>
          )}

          {showChildRoute1 && (
            <div
              className="flex justify-between flex-col  pl-8 my-4"
              //   onClick={() => setShowFinalChildRoute1(!showFinalChildRoute1)}
            >
              <div href="#what-we-do" className="text-lg my-1">
                About Us
              </div>
              <div href="#what-we-do" className="text-lg my-1">
                Our team
              </div>
              <div href="#what-we-do" className="text-lg my-1">
                Events & Publication
              </div>
            </div>
          )}
        </div>

        <div>
          <div
            className="flex justify-between items-center "
            onClick={() => {
              setShowRoute2(!showRoute2);
            //   setShowChildRoute2(false);
              setShowRoute1(false);
              setShowRoute3(false);
              setShowChildRoute1(false);
              setShowChildRoute3(false)
            }}
          >
            <div href="#what-we-do" className="text-lg">
              Who we are
            </div>

            {showRoute2 ? <FaAngleUp /> : <FaAngleDown />}
          </div>

          {showRoute2 && (
            <div
              className="flex justify-between items-center pl-4 my-4"
              onClick={() => setShowChildRoute2(!showChildRoute2)}
            >
              <div className="flex flex-col">
                {" "}
                <div
                  href="#what-we-do"
                  className="text-lg  my-1"
                  // onClick={() => setShowChildRoute1(!showChildRoute1)}
                >
                  Industries
                </div>
                <div
                  href="#what-we-do"
                  className="text-lg  my-1"
                  // onClick={() => setShowChildRoute1(!showChildRoute1)}
                >
                  Industries
                </div>
                <div
                  href="#what-we-do"
                  className="text-lg  my-1"
                  // onClick={() => setShowChildRoute1(!showChildRoute1)}
                >
                  Industries
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <div
            className="flex justify-between items-center "
            onClick={() => {
                setShowRoute3(!showRoute3);
              setShowChildRoute3(false);
              setShowRoute1(false);
              setShowRoute2(false);
              setShowChildRoute1(false);
              setShowChildRoute2(false)
            }}
          >
            <div href="#what-we-do" className="text-lg">
              Insights
            </div>

            {showRoute3 ? <FaAngleUp /> : <FaAngleDown />}
          </div>

          {showRoute3 && (
            <div
              className="flex justify-between items-center pl-4 my-4"
              onClick={() => setShowChildRoute3(!showChildRoute3)}
            >
              <div className="flex flex-col">
                {" "}
                <div
                  href="#what-we-do"
                  className="text-lg"
                  // onClick={() => setShowChildRoute1(!showChildRoute1)}
                >
                  Digital Insights
                </div>
               
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Overlay for the remaining background */}
      {menuOpen && (
        <motion.div
          className="fixed top-0 left-0 w-[100%] h-full bg-black z-40"
          initial={{ opacity: 0 }} // Start with 0 opacity
          animate={{ opacity: 0.5 }} // Animate to 0.5 opacity for partial visibility
          exit={{ opacity: 0 }} // Animate back to 0 opacity on exit
          transition={{ duration: 1 }} // Transition duration of 2 seconds
        />
      )}
    </div>
  );
}
