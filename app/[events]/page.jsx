"use client";
import React, { useContext } from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/layout/hero/Hero";
import { Context } from "../contexts/Context";
import { Atom } from "react-loading-indicators";
const Page = () => {
  const { loading } = useContext(Context);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-[100vh] w-[100vw]">
        <Atom color="#5b635b" size="medium" text="" textColor="" />{" "}
      </div>
      ) : (
        <>
          <Navbar />
          <Hero />
        </>
      )}
    </div>
  );
};

export default Page;
