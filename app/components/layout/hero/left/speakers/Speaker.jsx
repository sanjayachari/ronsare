import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";

const Speaker = () => {
  return (
    <section className="my-[100px]">
      <div className="my-3 font-bold text-[20px]">THIS IS SPEAKERS SECTION</div>
      <div className="my-2">This is the description for speakers section.</div>
      <div className="flex flex-col md:flex-row items-center md:justify-start justify-center gap-3">
      <div className="h-[150px] w-[350px] border border-black rounded-md flex ">
        <div className="relative h-[150px] 2xl:h-full w-[50%] object-cover rounded-md">
          <Image
            src="https://dev-media.konfhub.com/past_events/2024/June/09/1717977208703-f9c5c15d-b0f1-4aeb-a492-3464c2c97afd.jpg"
            layout="fill"
            objectFit="cover" // This determines how the image fills the container
            alt="Description of the image"
            className="p-3 rounded-md "
          />
        </div>
          <div className="flex flex-col gap-2 items-start justify-center p-2">
            <div className="font-bold">Bruce Wayne</div>
            <div>Chairman</div>
            <div>Wayne Enterprises</div>
            <div className="flex gap-2">
              <FaFacebook />
              <FaFacebook />
              <FaFacebook />
              <FaFacebook />
            </div>
          </div>
      </div>
      <div className="h-[150px] w-[350px] border border-black rounded-md flex ">
        <div className="relative h-[150px] 2xl:h-full w-[50%] object-cover rounded-md">
          <Image
            src="https://dev-media.konfhub.com/past_events/2024/June/09/1717977208703-f9c5c15d-b0f1-4aeb-a492-3464c2c97afd.jpg"
            layout="fill"
            objectFit="cover" // This determines how the image fills the container
            alt="Description of the image"
            className="p-3 rounded-md "
          />
        </div>
          <div className="flex flex-col gap-2 items-start justify-center p-2">
            <div className="font-bold">Bruce Wayne</div>
            <div>Chairman</div>
            <div>Wayne Enterprises</div>
            <div className="flex gap-2">
              <FaFacebook />
              <FaFacebook />
              <FaFacebook />
              <FaFacebook />
            </div>
          </div>
      </div>
      </div>
    </section>
  );
};

export default Speaker;
