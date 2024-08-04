import { Context } from "@/app/contexts/Context";
import Link from "next/link";
import React, { useContext } from "react";

const Banner = () => {
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
  
  console.log(data);
  return (
    <div className="pl-[20px] md:w-[40%] xl:w-[50%] 2xl:w-[60%] flex flex-col justify-center items-start md:pl-[100px] xl:pl-[100px] 2xl:pl-[200px] text-white">
      <div className="font-bold text-[20px] md:text-[35px] ">{data?.name}</div>
      <div className="md:text-[20px] text-[14px] opacity-80 flex items-center justify-center gap-3">
        Open streaming website:{" "}
        <Link href={data?.event_website} target="_blank" className=" md:text-[18px] text-blue-500 underline">

          Event Live Link
        </Link>
      </div>
      <div className="md:text-[20px] text-[14px] opacity-80">
        Date: {eventStartDate} {startTime} - {eventEndDate} {endTime}
      </div>
    </div>
  );
};

export default Banner;
