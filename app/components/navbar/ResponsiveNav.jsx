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

  return (
    <div
      className={`
        w-full fixed top-0 left-0 right-0 z-50 bg-[#0732EF] shadow-lg text-white transition-transform duration-200 ease-out 
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="flex justify-between w-full items-center px-6 py-4 h-[60px]">
        <Link href={'/'}>
          <Image src="/logo-light.png" alt="logo" width={120} height={40} className="object-cover" />
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
          <Image src="/logo-light.png" alt="logo" width={120} height={40} className="object-cover" />
          <MdOutlineCancel className="text-3xl cursor-pointer" onClick={() => setMenuOpen(false)} />
        </div>

        {[
          { title: "Industries", links: ["/healthcare", "/financial-service", "/manufacture", "/retail"] },
          { title: "Solutions", links: ["/talent-solutions", "/insight", "/supply-chain-and-logistics", "/life-science-solutions"] },
          { title: "Insights", links: ["/about"] }
        ].map((menu, index) => (
          <div key={index} className="py-2 border-b border-blue-600">
            <div className="flex justify-between items-center text-lg font-semibold cursor-pointer py-2" onClick={() => handleMenuClick(menu.title)}>
              <span>{menu.title}</span>
              {activeMenu === menu.title ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={activeMenu === menu.title ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden flex flex-col pl-4"
            >
              {menu.links.map((link, i) => (
                <Link key={i} href={link} className="text-base py-2 text-gray-200 hover:text-white transition-all">
                  {link.replace("/", "").replace("-", " ")}
                </Link>
              ))}
            </motion.div>
          </div>
        ))}
      </motion.div>

      {menuOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
}
