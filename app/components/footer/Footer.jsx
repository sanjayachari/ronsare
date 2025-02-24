import Image from 'next/image';
import React from 'react';
import { FaTwitter, FaYoutube } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-[#0732EF] px-6 md:px-10 xl:px-[120px] pb-[40px]">
      <div className="border-t border-white border-opacity-20 w-full" />

      <div className="flex flex-col md:flex-row md:justify-between py-[40px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">

          {/* Logo and Social Links */}
          <div className="col-span-1">
            <Image
              src="/logo-light.png"
              alt="logo"
              width={150}
              height={150}
              className="py-4"
            />
            <div className="text-[#C2BAAA] leading-loose">© 2024 Ronsare.</div>
            <div className="text-[#C2BAAA] leading-loose">All rights reserved.</div>
            <div className="text-white flex gap-4 text-[20px] py-6">
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>

          {/* Get in Touch */}
          <div className="col-span-1">
            <div className="font-semibold text-[20px] text-white py-4">Get in Touch</div>
            <div className="text-[#C2BAAA] leading-loose">50 Carnation Ave,</div>
            <div className="text-[#C2BAAA] leading-loose">Unit 1, Floral Park</div>
            <div className="text-[#C2BAAA] leading-loose">NY 11001</div>
            <div className="text-[#C2BAAA] leading-loose">info@ronsare.com</div>
            <div className="text-[#C2BAAA] leading-loose">+1 (646) 470 4686</div>
          </div>

          {/* Learn More */}
          <div className="col-span-1">
            <div className="font-semibold text-[20px] text-white py-4">Learn More</div>
            <div className="text-[#C2BAAA] leading-loose">About Us</div>
            <div className="text-[#C2BAAA] leading-loose">Terms of Use</div>
            <div className="text-[#C2BAAA] leading-loose">Privacy Policy</div>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-span-1">
            <div className="font-semibold text-[20px] text-white py-4">Our Newsletter</div>
            <div className="text-[#C2BAAA] leading-loose">Subscribe to our newsletter to get our</div>
            <div className="text-[#C2BAAA] leading-loose">news & insights delivered to you.</div>
            <div className="flex py-6">
              <input
                type="text"
                className="w-full p-3 border border-white border-opacity-10 rounded-l-[10px] bg-[#0732EF] placeholder-white text-white"
                placeholder="Email Address"
              />
              <button className="px-6 py-3 bg-white text-[#7483D4] font-semibold rounded-r-[10px] h-[50px]">
                Join
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
