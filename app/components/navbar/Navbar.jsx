"use client";
import React, { useContext, useEffect, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { Context } from "../../contexts/Context";
import Image from "next/image";
import moment from "moment";
import "./css/shine.css";
import { CiSquareRemove } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";

const Navbar = () => {
  const { data } = useContext(Context);
  console.log(data);

  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [showAlert, setShowAlert] = useState(true);

  function formatDate(dateString) {
    // Convert the date string to a moment object
    const date = moment(dateString, "YYYY-MM-DD");

    // Format the date as "Month DD, YYYY"
    const formattedDate = date.format("MMMM D, YYYY");

    return formattedDate;
  }

  // Example usage
  const dateString = "2024-05-15";
  console.log(formatDate(dateString)); // Output: "May 15, 2024"

  function formatTime(timeString) {
    // Convert the time string to a moment object
    const time = moment(timeString, "HH:mm:ss");

    // Format the time as 12-hour with AM/PM
    const formattedTime = time.format("hh:mm A");

    return formattedTime;
  }

  useEffect(() => {
    const timeString = "00:30:00";
    console.log(formatTime(timeString)); // Output: "12:30 AM"
    setStartTime(formatTime(timeString));
    // Example usage
    const startDate1 = "2034-07-31";
    console.log(formatDate(startDate1)); // Output: July 31, 2034
    setStartDate(formatDate(startDate1));
  }, []);

  return (
    <div className="w-full shadow-md sticky top-0 z-10">
      <div className="relative">
        {showAlert && (
          <div className="h-[50px] w-full bg-[#572148] flex items-center justify-start p-2 md:justify-center text-white btn-shine md:text-[16px] text-[13px]">
            {startDate} {startTime} - {startDate} {startTime}{" "}
          </div>
        )}

        <div className="absolute right-3 top-[15px] flex items-center justify-center text-white  text-[20px] cursor-pointer">
          <CiSquareRemove onClick={() => setShowAlert(false)} />
        </div>
      </div>
      <div className="flex items-center justify-between px-0 md:px-10 bg-white">
        <div>
          <Image
            src="/konfhub-logo.svg"
            width={150}
            height={150}
            alt="konfhub-logo"
            className="h-[50px] md:h-[70px]"
          />
        </div>
        <div>
          <IoPersonOutline className="mr-4 md:mr-0" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
