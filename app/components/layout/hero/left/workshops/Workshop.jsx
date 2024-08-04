import { Context } from "@/app/contexts/Context";
import Image from "next/image";
import React, { useContext } from "react";
import styles from "../../../../../globals.css";

const Workshop = () => {
  const { data } = useContext(Context);
  // console.log(data);
  const workshopData = [
    { id: 0, name: "How to make more money" ,time : "Jun 11th, 2024 at 9:00 AM" },
    { id: 1, name: "How to make video" ,time : "Jul 13th, 2024 at 10:00 AM" },
    { id: 2, name: "How to learn js" ,time : "Aug 14th, 2024 at 11:00 AM" },
  ];
  return (
    <section className="my-[100px]" id="workshop">
      <div className="my-3 font-bold text-[20px]">
        {data?.workshop_section_title}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: data.workshop_section_description }}
        className={`${styles["consent-text"]} my-2`} // Applying Tailwind's full width utility
      />{" "}
      <div className="flex flex-col xl:flex-row items-center md:justify-start justify-center gap-5 z-10">
        {workshopData.map((e, i) => {
          return (
            <div
              className="relative rounded-md border border-[#596275] border-opacity-50 w-[350px] bg-white my-10 pb-5 h-[300px] md:h-[350px] z-10"
              key={i}
            >
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
                {e.name}
              </div>
              <div className="w-full absolute bottom-0 left-0">
                <div className="p-2">{e.time}</div>
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
