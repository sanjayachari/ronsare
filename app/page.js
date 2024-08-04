"use client";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Atom } from "react-loading-indicators";
import { Context, ContextProvider } from "./contexts/Context.js";
const Page = () => {
  const router = useRouter();
  const { loading } = useContext(Context);
  useEffect(() => {
    console.log(loading);
    
    setTimeout(() => {
      if (!loading) {
        router.push("/konfhub-frontend-evaluation-task");
      }
    }, 2000);
  }, [loading]);

  return (
    <div className="flex items-center justify-center h-[100vh] w-[100vw]">
      <Atom color="#5b635b" size="medium" text="" textColor="" />{" "}
    </div>
  );
};

export default Page;
