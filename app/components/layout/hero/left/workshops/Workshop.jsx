import Image from "next/image";
import React from "react";

const Workshop = () => {
  const workshopData = [{ id: 0 }, { id: 1 }, { id: 2 }];
  return (
    <section className="my-[100px]">
      <div className="my-3 font-bold text-[20px]">THIS IS WORKSHOP SECTION</div>
      <div className="my-2">This is the description for workshop sections.</div>
     <div className="flex flex-col xl:flex-row items-center md:justify-start justify-center gap-5 z-10">
     {workshopData.map((e,i) => {
        return (
          <div className="relative rounded-md border border-black w-[350px] bg-white my-10 pb-5 h-[350px] z-10" key={i}>
            <div className="relative h-[150px] 2xl:h-[200px] w-full rounded-md z-10">
              <Image
                src="https://dev-media.konfhub.com/default-event-posters/default-event-posters-image5.jpg"
                layout="fill"
                objectFit="cover" // This determines how the image fills the container
                alt="Host"
                className="rounded-md"
              />
            </div>
            <div className="text-black relative p-2 font-bold">
              How to make more money
            </div>
            <div className="w-full absolute bottom-0 left-0">
              <div className="p-2">Jun 11th, 2024 at 10:00 AM (IST)</div>
              <div className=" flex justify-between items-center p-3">
                <div className="relative h-[40px] 2xl:h-[40px] w-[40px] ">
                  <Image
                    src={
                      "https://dev-media.konfhub.com/past_events/2024/June/09/1717977208703-f9c5c15d-b0f1-4aeb-a492-3464c2c97afd.jpg"
                    }
                    layout="fill"
                    objectFit="cover" // This determines how the image fills the container
                    alt="Host"
                    className="h-[40px] w-[40px] rounded-full"
                  />
                </div>
                <div className="p-2 bg-black rounded-md text-white">
                  View Details
                </div>
              </div>
            </div>
          </div>
        );
      })}
     </div>
    </section>
  );
};

export default Workshop;
