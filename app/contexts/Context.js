"use client";
import { createContext, useEffect, useState } from "react";
import { API } from "../constant/api";
import axios from "axios";

export const Context = createContext(null);

export function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fun = async () => {
        setLoading(true)
      try {
        const res = await axios.get(API);
        console.log(res.status);
        if(res.status == 200){
            // console.log('rendered')
            setLoading(false)
            setData(res.data);
        }
      } catch (error) {
        console.log(error);
        setLoading(true)
        // throw error

      }
    };
    fun();
  }, []);
  console.log(loading)

  const value = { data, setData, loading, setLoading };
  return (
    <>
      <Context.Provider value={value}>{children}</Context.Provider>
    </>
  );
}
