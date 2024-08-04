import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Tickets = () => {

  const tickets = [
    {
    description : " This is a ticket description. This is a free ticket. This ticket is uncategorised.",
    location : "https://www.google.com/maps/place/KonfHub+Technologies/@12.9916515,77.6644397,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae114ddffa3cc3:0x3f3aae32948bafdf!8m2!3d12.9916515!4d77.6644397!16s%2Fg%2F11s7xy4rpp?entry=ttu",
    company : "KonfHub Technologies",
    details : "This is additional venue details",
    availability : "Available Till: 31st Aug 2034, 06:00 PM IST",
    amount : "FREE"
  },
    {
    description : " This is a ticket description. This is a free ticket. This ticket is uncategorised.",
    location : "https://www.google.com/maps/place/KonfHub+Technologies/@12.9916515,77.6644397,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae114ddffa3cc3:0x3f3aae32948bafdf!8m2!3d12.9916515!4d77.6644397!16s%2Fg%2F11s7xy4rpp?entry=ttu",
    company : "KonfHub Technologies",
    details : "This is additional venue details",
    availability : "Available Till: 31st Aug 2034, 06:00 PM IST",
    amount : "₹ 99"
  },
    {
    description : " This is a ticket description. This is a free ticket. This ticket is uncategorised.",
    location : "https://www.google.com/maps/place/KonfHub+Technologies/@12.9916515,77.6644397,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae114ddffa3cc3:0x3f3aae32948bafdf!8m2!3d12.9916515!4d77.6644397!16s%2Fg%2F11s7xy4rpp?entry=ttu",
    company : "KonfHub Technologies",
    details : "This is additional venue details",
    availability : "Available Till: 31st Aug 2034, 06:00 PM IST",
    amount : "₹ 299"
  },
    {
    description : " This is a ticket description. This is a free ticket. This ticket is uncategorised.",
    location : "https://www.google.com/maps/place/KonfHub+Technologies/@12.9916515,77.6644397,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae114ddffa3cc3:0x3f3aae32948bafdf!8m2!3d12.9916515!4d77.6644397!16s%2Fg%2F11s7xy4rpp?entry=ttu",
    company : "KonfHub Technologies",
    details : "This is additional venue details",
    availability : "Available Till: 31st Aug 2034, 06:00 PM IST",
    amount : "FREE"
  },
]

  return (
    <section className="my-10 md:p-0 p-2">
      <div className="my-3 font-bold text-[20px]">
      Free Ticket</div>

{
  tickets.map((e,i)=> {
    return(
      <div className=" w-full border-2 border-[#596275] border-opacity-20 rounded-md p-4 my-4" key={i}>
        <div className="font-bold my-2">Ticket</div>
        <div className="my-2">
        {e?.description}
        </div>
          <Link href="">
        <div className="flex items-center justify-start gap-3 text-blue-500">

          <FaLocationDot/> {e?.company}
           </div>
          </Link>
        <div className="my-2 opacity-60">{e?.details}</div>
        <span className="bg-red-100 rounded-md p-2 my-2 opacity-60 md:text-[16px] text-[14px]">{e?.availability}</span>
        <hr className="my-5" />
        <div className="flex justify-between items-center ">
          <div className="text-[18px]">{e?.amount}</div>
          <div className="bg-black rounded-md text-white py-2 px-4 hover:bg-[#572148] cursor-not-allowed duration-500 border border-[#596275] border-opacity-50">REGISTER</div>
        </div>
      </div>
    )
  })
}
      
    </section>
  );
};

export default Tickets;
