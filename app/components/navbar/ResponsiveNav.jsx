"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MenuOutlined } from "@ant-design/icons"; // Ant Design icons for hamburger and close
import { motion } from "framer-motion"; // Import framer-motion for animations
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

export default function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showRoute1, setShowRoute1] = useState(false);
  const [showRoute2, setShowRoute2] = useState(false);
  const [showRoute3, setShowRoute3] = useState(false);
  const [showChildRoute1, setShowChildRoute1] = useState(false);
  const [showChildRoute2, setShowChildRoute2] = useState(false);
  const [showChildRoute3, setShowChildRoute3] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Prevent background scrolling when the menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Sticky Navbar on Scroll
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`
        w-full fixed top-0 left-0 right-0 z-50 bg-blue-500 text-white transition-transform duration-200 ease-out 
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="flex justify-between w-full items-center p-5 h-[60px]">
        {/* Logo */}
        <div>
          <Image src="/logo-light.png" alt="logo" width={120} height={40} className="object-cover" />
        </div>

        {/* Hamburger Icon */}
        <div className="menu-icon">
          {!menuOpen && <MenuOutlined className="text-2xl" onClick={toggleMenu} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`mobile-menu fixed top-0 left-0 w-[80%] h-screen bg-blue-800 flex flex-col p-5 space-y-6 z-50`}
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between w-full">
          <Image src="/logo-light.png" alt="logo" width={150} height={150} className="py-4" />
          {/* Close Button */}
          <div className="flex justify-end w-full py-4">
            <MdOutlineCancel className="text-2xl" onClick={() => setMenuOpen(false)} />
          </div>
        </div>

        <div>
          <div
            className="flex justify-between items-center"
            onClick={() => {
              setShowRoute1(!showRoute1);
              setShowRoute2(false);
              setShowRoute3(false);
              setShowChildRoute1(false);
              setShowChildRoute2(false);
              setShowChildRoute3(false);
            }}
          >
            <div className="text-lg">What we do</div>
            {showRoute1 ? <FaAngleUp /> : <FaAngleDown />}
          </div>

          {showRoute1 && (
            <div className="flex flex-col pl-4 my-4">
              <div className="flex justify-between items-center" onClick={() => setShowChildRoute1(!showChildRoute1)}>
                <div className="text-lg">Industries</div>
                {showChildRoute1 ? <FaAngleUp /> : <FaAngleDown />}
              </div>

              {showChildRoute1 && (
                <div className="flex flex-col pl-8 my-4">
                  <div className="text-lg my-1">About Us</div>
                  <div className="text-lg my-1">Our team</div>
                  <div className="text-lg my-1">Events & Publication</div>
                </div>
              )}
            </div>
          )}
        </div>

        <div>
          <div
            className="flex justify-between items-center"
            onClick={() => {
              setShowRoute2(!showRoute2);
              setShowRoute1(false);
              setShowRoute3(false);
              setShowChildRoute1(false);
              setShowChildRoute3(false);
            }}
          >
            <div className="text-lg">Who we are</div>
            {showRoute2 ? <FaAngleUp /> : <FaAngleDown />}
          </div>

          {showRoute2 && (
            <div className="flex flex-col pl-4 my-4">
              <div className="text-lg my-1">Industries</div>
              <div className="text-lg my-1">Industries</div>
              <div className="text-lg my-1">Industries</div>
            </div>
          )}
        </div>

        <div>
          <div
            className="flex justify-between items-center"
            onClick={() => {
              setShowRoute3(!showRoute3);
              setShowChildRoute3(false);
              setShowRoute1(false);
              setShowRoute2(false);
              setShowChildRoute1(false);
              setShowChildRoute2(false);
            }}
          >
            <div className="text-lg">Insights</div>
            {showRoute3 ? <FaAngleUp /> : <FaAngleDown />}
          </div>

          {showRoute3 && (
            <div className="flex flex-col pl-4 my-4">
              <div className="text-lg">Digital Insights</div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Overlay for the remaining background */}
      {menuOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      )}
    </div>
  );
}
