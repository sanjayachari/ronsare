import { Context } from "@/app/contexts/Context";
import Image from "next/image";
import React, { useContext } from "react";
import styles from "../../../../../globals.css";

const Sponsor = () => {
  const { data } = useContext(Context);
  return (
    <section className="my-[100px]" id="event">
      <div className="my-3 font-bold text-[20px]">
        {data?.sponsor_section_title}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: data?.sponsor_section_description }}
        className={`${styles["consent-text"]} my-2`} // Applying Tailwind's full width utility
      />
      <div className="h-[150px] w-[350px]  rounded-md bg-yellow-300">
        <div className="relative h-[150px] 2xl:h-[150px] w-full object-fit rounded-md">
          <Image
            src="https://dev-media.konfhub.com/past_events/2024/June/09/1717977208703-f9c5c15d-b0f1-4aeb-a492-3464c2c97afd.jpg"
            height={150}
            width={150}
            alt="Description of the image"
            className="rounded-md "
          />
        </div>
      </div>
      <div className="mt-[100px] mb-[250px] ">
        <div className="font-bold text-[20px]">SPONSOR CATEGORY</div>
        <div className="h-[150px] w-[350px] flex justify-end items-end rounded-md bg-yellow-300">
          <div className="relative h-[150px] 2xl:h-[150px] w-full object-fit rounded-md flex justify-end items-end">
            <Image
              src="https://dev-media.konfhub.com/past_events/2024/June/09/1717977208703-f9c5c15d-b0f1-4aeb-a492-3464c2c97afd.jpg"
              height={150}
              width={150}
              alt="Description of the image"
              className="rounded-md "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
