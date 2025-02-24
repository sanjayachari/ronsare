"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import Link for navigation
import Navbar from "../navbar/Navbar";
import MobileNavbar from "../navbar/ResponsiveNav";
import Footer from "../footer/Footer";
import Image from "next/image";

const ComingSoon = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to track whether the mobile menu is open or closed

  return (
    <div className="bg-[#262B32]">
      <div className="md:block hidden sticky top-0 z-50 ">
        <Navbar />
      </div>

      <div className="md:hidden fixed top-0 w-full z-50">
        <MobileNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>

      {/* Smaller Full-screen Image with Zoom Out Effect */}
      <div className="flex items-center justify-center w-full overflow-hidden">
        <Image
          src="/i25.png"
          alt="hero"
          height={1000}
          width={1000}
          className="z-0 filter brightness-50 transform scale-80" // Scale down the image to create a zoom-out effect
        />
      </div>
      
      <div className="w-full flex items-center justify-center flex-col py-[20px] gap-3">
        <div className="text-3xl font-semibold text-white opacity-15">Coming Soon.</div>
        <Link href="/" passHref>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-[20px]">
            Go to homepage
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ComingSoon;
