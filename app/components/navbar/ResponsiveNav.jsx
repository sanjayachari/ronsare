"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MenuOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import Link from "next/link";

export default function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

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
  const menuItems = [
    {
      title: "Industries",
      name: "Industries",
      links: [
        { path: "/healthcare", name: "Healthcare" },
        { path: "/financial-service", name: "Financial Service" },
        { path: "/manufacture", name: "Manufacture" },
        { path: "/retail", name: "Consumer Retail" },
      ],
    },
    {
      title: "Solutions",
      name: "Solutions",
      links: [
        { path: "/talent-solutions", name: "Talent Solutions" },
        { path: "/insight", name: "Digital Solutions" },
        { path: "/supply-chain-and-logistics", name: "Supply Chain and Logistics" },
        { path: "/life-science-solutions", name: "Life Science Solutions" },
      ],
    },
    {
      title: "Insights",
      name: "Digital Solutions",
      links: [{ path: "/about", name: "About" }],
    },
  ];
  

  return (
    <div
      className={`
        w-full fixed top-0 left-0 right-0 z-50 bg-[#0732EF] shadow-lg text-white transition-transform duration-200 ease-out 
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="flex justify-between w-full items-center px-6 py-4 h-[60px]">
        <Link href={"/"}>
          <Image
            src="/logo-light.png"
            alt="logo"
            width={120}
            height={40}
            className="object-cover"
          />
        </Link>
        <div className="menu-icon text-3xl cursor-pointer" onClick={toggleMenu}>
          {!menuOpen && <MenuOutlined />}
        </div>
      </div>

      <motion.div
        className={`mobile-menu fixed top-0 left-0 w-[75%] h-screen bg-[#0732EF] flex flex-col p-6 space-y-6 z-50 shadow-xl`}
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center w-full pb-4 ">
          <Image
            src="/logo-light.png"
            alt="logo"
            width={120}
            height={40}
            className="object-cover"
          />
          <MdOutlineCancel
            className="text-3xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        {menuItems.map((menu, index) => (
          <div key={index} className="py-2 border-b border-blue-600">
            <div
              className="flex justify-between items-center text-lg font-semibold cursor-pointer py-2"
              onClick={() => handleMenuClick(menu.title)}
            >
              <span>{menu.title}</span>
              {activeMenu === menu.title ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={
                activeMenu === menu.title
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden flex flex-col pl-4"
            >
              {menu.links.map((link, i) => (
                <Link
                  key={i}
                  href={typeof link === "string" ? link : link.path}
                  className="text-base py-2 text-gray-200 hover:text-white transition-all"
                >
                  {typeof link === "string"
                    ? link.replace("/", "").replace("-", " ")
                    : link.name}
                </Link>
              ))}
            </motion.div>
          </div>
        ))}
      </motion.div>

      {menuOpen && (
       <motion.div
       className="fixed top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-sm z-40"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       transition={{ duration: 0.3 }}
       onClick={() => setMenuOpen(false)}
     />
     
      )}
    </div>
  );
};