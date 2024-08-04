import Image from "next/image";
import React from "react";

const Sponsor = () => {
  return (
    <section className="my-[100px]">
      <div className="my-3 font-bold text-[20px]">THIS IS EVENT SPONSORS</div>
      <div className="my-2">This is the description for workshop sections.</div>
      <div className="flex gap-3">
      <div className="h-[150px] w-[350px] border border-black rounded-md flex ">
        <div className="relative h-[150px] 2xl:h-full w-[100%] object-cover rounded-md">
          <Image
            src="https://dev-media.konfhub.com/past_events/2024/June/09/1717977208703-f9c5c15d-b0f1-4aeb-a492-3464c2c97afd.jpg"
            layout="fill"
            objectFit="cover" // This determines how the image fills the container
            alt="Description of the image"
            className="rounded-md border-2"
          />
        </div>
      </div>
      
    
      </div>
      <div className="mt-[100px] mb-[250px] ">
        <div className="font-bold text-[20px]">SPONSOR CATEGORY</div>
        <div className="h-[150px] w-[350px] border border-black rounded-md ">
        <div className="relative h-[150px] 2xl:h-[150px] w-full object-fit rounded-md">
          <Image
            src="https://dev-media.konfhub.com/past_events/2024/June/09/1717977208703-f9c5c15d-b0f1-4aeb-a492-3464c2c97afd.jpg"
            layout="fill"
            objectFit="cover" // This determines how the image fills the container
            alt="Description of the image"
            className="rounded-md border-2"
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Sponsor;
