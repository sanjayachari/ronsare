import React, { useRef, useState, useEffect, useContext } from "react";
import { IoIosVideocam } from "react-icons/io";
import { FaTicket } from "react-icons/fa6";
import Image from "next/image";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Context } from "@/app/contexts/Context";
import styles from "./ConsentMessage.module.css";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

const Right = () => {
  const {
    data,
    startTime,
    setStartTime,
    eventStartDate,
    setEventStartDate,
    endTime,
    setEndTime,
    eventEndDate,
    setEventEndDate,
  } = useContext(Context);

  const [dropdown, seDropdown] = useState(false);
  const scrollableElementRef = useRef(null); // Create a ref for the scrollable element

  useEffect(() => {
    // Check if dropdown is true and the ref is assigned
    if (dropdown && scrollableElementRef.current) {
      scrollableElementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [dropdown]); // Re-run this effect when `dropdown` changes

  const [secondsLeft, setSecondsLeft] = useState(0);
  const countdownRef = useRef(null);

  function createDate(dateString, timeString) {
    const dateTimeString = `${dateString}T${timeString}`;
    // console.log(dateTimeString);
    return dateTimeString;
  }

  useEffect(() => {
    const now = new Date();

    const getDate = createDate(data?.start_date, data?.start_time);
    // console.log(getDate);
    const startDate = new Date(getDate); // ISO 8601 format
    const diffInSeconds = Math.ceil((startDate - now) / 1000);

    setSecondsLeft(diffInSeconds);

    const updateCountdown = () => {
      setSecondsLeft(secondsLeft - 1);
    };

    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, [secondsLeft]);

  const formatTime = (totalSeconds) => {
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;
    return `${days}D : ${hours}H : ${minutes}M : ${seconds}s`;
  };

  return (
    <div className="z-40 rounded-md shadow-2xl border w-full bg-white my-10 pb-5 h-full xl:h-[450px] 2xl:h-[495px] overflow-auto scroll-auto hide-scrollbar">
      <div>
        <div className="">
          <div className="relative h-[150px] 2xl:h-[200px] w-full">
            <Image
              src="https://dev-media.konfhub.com/default-event-posters/default-event-posters-image5.jpg"
              layout="fill"
              objectFit="cover" // This determines how the image fills the container
              alt="Host"
            />
          </div>

          <div className="px-3 py-1">
            <div className="flex gap-5">
              <div className="flex gap-2 items-center justify-center ">
                <IoIosVideocam /> ONLINE
              </div>
              <div className="flex gap-2 items-center justify-center">
                <FaTicket /> PAID
              </div>
            </div>
            {/* <p ref={countdownRef}>{formatTime(secondsLeft)}</p> */}

            <div className="border border-[#596275] border-opacity-50 rounded-md p-2">
              {/* <div className='pb-3 text-[18px] flex gap-2'> Event Live Link : <div className='text-blue-500 underline'>Click</div></div> */}
              <div className="text-[18px]">EVENT STARTS IN</div>
              <div
                className="text-[20px] font-bold animate-pulse"
                ref={countdownRef}
              >
                {formatTime(secondsLeft)}
              </div>
            </div>
          </div>
          <div className="px-3">
            <div className="hover:bg-[#572148] cursor-not-allowed duration-500 border border-[#596275] border-opacity-50 p-2 rounded-md w-full my-1 bg-black text-white text-center">
              Buy Now
            </div>
            <div className=" hover:text-blue-500 duration-500 border border-[#596275] border-opacity-50 p-2 rounded-md w-full my-1 text-center cursor-pointer">
             <Link href={data?.organiser_website} target="_blank" className="flex gap-3 items-center justify-center">
             Official Website <FaLink/>
             </Link>
            </div>
          </div>
          <div className="px-3 py-2">
            <div className="font-bold text-[17px] ">HOSTED BY</div>
            <div
              className="flex items-center justify-between gap-2 my-2 cursor-pointer"
              onClick={() => seDropdown(!dropdown)}
            >
              <div className="flex items-center justify-start gap-2">
                <div className="relative h-[30px] 2xl:h-[40px] w-[40px] rounded-full">
                  <Image
                    src="https://dev-media.konfhub.com/past_events/2024/June/09/1717977208703-f9c5c15d-b0f1-4aeb-a492-3464c2c97afd.jpg"
                    layout="fill"
                    objectFit="cover" // This determines how the image fills the container
                    alt="Host"
                    className="rounded-full"
                  />
                </div>
                {data?.organiser_name}
              </div>
              {dropdown ? (
                <RiArrowDropUpLine
                  className="text-[30px]"
                  onClick={() => seDropdown(!dropdown)}
                />
              ) : (
                <RiArrowDropDownLine
                  className="text-[30px]"
                  onClick={() => seDropdown(!dropdown)}
                />
              )}
            </div>
            {dropdown && (
              <div
                ref={scrollableElementRef}
                dangerouslySetInnerHTML={{ __html: data?.organiser_info }}
                className={`${styles['consent-text']} my-1`} // Applying Tailwind's full width utility

              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
