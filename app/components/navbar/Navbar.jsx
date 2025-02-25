"use client";
import { useEffect, useState } from "react";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./navbar.css";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    key: "2",
    label: <div className="text-[#0732EF]">Industries</div>,
    children: [
      { 
        key: "2-1", 
        label: (
          <div className="text-[#0732EF]">
            <Link href="/industries">Healthcare</Link>
          </div>
        ) 
      }
    ],
  },
];



const items2 = [
  { 
    key: "1", 
    label: (
      <div className="text-[#0732EF]">
        <Link href="/coming-soon">About us</Link>
      </div>
    ) 
  },
  { 
    key: "2", 
    label: (
      <div className="text-[#0732EF]">
        <Link href="/coming-soon">Our Team</Link>
      </div>
    ) 
  },
  { 
    key: "3", 
    label: (
      <div className="text-[#0732EF]">
        <Link href="/coming-soon">Events & Publications</Link>
      </div>
    ) 
  },
];


const items3 = [
  { 
    key: "1", 
    label: (
      <div className="text-[#0732EF]">
        <Link href="/coming-soon">Digital Insights</Link>
      </div>
    ) 
  }
];

export default function Navbar() {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeroSection, setIsHeroSection] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const isHero = currentScrollY < window.innerHeight;
          setIsVisible(currentScrollY < lastScrollY || isHero);
          setIsHeroSection(isHero);
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
    <div className={`
      w-full fixed top-0 left-0 right-0 z-50 shadow-md bg-white py-2 transition-transform duration-200 ease-out
      ${isVisible ? "translate-y-0" : "-translate-y-full"}
    `}>
      <div className="
        w-full max-w-screen-xxxl mx-auto px-4 sm:px-6 md:px-12 xl:px-10 xxl:px-20
        flex justify-between items-center py-4 bg-white
      ">
        {/* ✅ Logo */}
        <Link href="/" className="navbar-brand">
          <Image src="/logo-purple.png" alt="hero" objectFit="cover" height={50} width={150} />
        </Link>

        {/* ✅ Navbar Links */}
        <div className="navbar-links flex items-center space-x-4">
          {isClient && (
            <>
              <Dropdown menu={{ items }} trigger={["hover"]} overlayClassName="navbar-dropdown">
                <a onClick={(e) => e.preventDefault()} className="navbar-link">
                  <Space className="text-[#0732EF]">
                    What we do <DownOutlined className="text-[14px]" />
                  </Space>
                </a>
              </Dropdown>
              <Dropdown menu={{ items: items2 }} trigger={["hover"]} overlayClassName="navbar-dropdown">
                <a onClick={(e) => e.preventDefault()} className="navbar-link">
                  <Space className="text-[#0732EF]">
                    Who we are <DownOutlined className="text-[14px]" />
                  </Space>
                </a>
              </Dropdown>
              <Dropdown menu={{ items: items3 }} trigger={["hover"]} overlayClassName="navbar-dropdown">
                <a onClick={(e) => e.preventDefault()} className="navbar-link">
                  <Space className="text-[#0732EF]">
                    Insights <DownOutlined className="text-[14px]" />
                  </Space>
                </a>
              </Dropdown>
            </>
          )}

          {/* ✅ Contact Us Button */}
          <Link href="/contact">
            <div className="px-4 py-2 rounded-[10px] text-white font-bold bg-[#0732EF] cursor-pointer">
              Contact us
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
