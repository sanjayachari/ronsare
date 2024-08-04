import React, { useRef, useState, useEffect } from "react";
import { IoIosVideocam } from "react-icons/io";
import { FaTicket } from "react-icons/fa6";
import Image from "next/image";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const Right = () => {
  const [dropdown, seDropdown] = useState(false);
  const scrollableElementRef = useRef(null); // Create a ref for the scrollable element

  useEffect(() => {
    // Check if dropdown is true and the ref is assigned
    if (dropdown && scrollableElementRef.current) {
      scrollableElementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [dropdown]); // Re-run this effect when `dropdown` changes

  return (
    <div className="rounded-md shadow-2xl border w-full bg-white my-10 pb-5 h-full xl:[380px] 2xl:h-[495px] overflow-auto scroll-auto hide-scrollbar">
      <div>
        <div className="">
          <Image
            src="https://dev-media.konfhub.com/default-event-posters/default-event-posters-image5.jpg"
            objectFit="cover" // Adjust this as needed
            height={400}
            width={400}
            alt=""
          />
          <div className="px-3 py-1">
            <div className="flex gap-5">
              <div className="flex gap-2 items-center justify-center ">
                <IoIosVideocam /> ONLINE
              </div>
              <div className="flex gap-2 items-center justify-center">
                <FaTicket /> PAID
              </div>
            </div>
            <div className="border border-black rounded-md p-2">
              {/* <div className='pb-3 text-[18px] flex gap-2'> Event Live Link : <div className='text-blue-500 underline'>Click</div></div> */}
              <div className="text-[18px]">EVENT STARTS IN</div>
              <div className="text-[20px] font-bold">
                3648D : 5H : 19M : 15S
              </div>
            </div>
          </div>
          <div className="px-3">
            <div className="border border-black p-2 rounded-md w-full my-1 bg-black text-white text-center">
              Buy Now
            </div>
            <div className="border border-black p-2 rounded-md w-full my-1 text-center">
              Official Website
            </div>
          </div>
          <div className="px-3 py-2">
            <div className="font-bold text-[17px] ">HOSTED BY</div>
            <div
              className="flex items-center justify-between gap-2 my-2 cursor-pointer"
              onClick={() => seDropdown(!dropdown)}
            >
              <div className="flex items-center justify-start gap-2">
                {" "}
                <img
                  src="https://dev-media.konfhub.com/past_events/2024/June/09/1717977208703-f9c5c15d-b0f1-4aeb-a492-3464c2c97afd.jpg"
                  className="h-[30px] w=[30px] rounded-full"
                  alt=""
                />
                Manjunath R
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
              <div className="my-1" ref={scrollableElementRef}>
                This is the description of the organiser. You can get to know
                more about the organiser here.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
