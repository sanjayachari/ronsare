import { Context } from "@/app/contexts/Context";
import Image from "next/image";
import React, { useContext } from "react";
import { FaFacebookF } from "react-icons/fa6";
import styles from "../../../../../globals.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";

const Speaker = () => {
  const { data } = useContext(Context);
  // console.log(data);
  return (
    <section className="my-[100px]" id="speakers">
      <div className="my-3 font-bold text-[20px]">
        {data?.speaker_section_title}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: data.speaker_section_description }}
        className={`${styles["consent-text"]} my-2`} // Applying Tailwind's full width utility
      />
      <div className="flex flex-col md:flex-row items-center md:justify-start justify-center gap-3">
        <div className="h-[150px] w-[350px] border border-[#596275] border-opacity-50 rounded-md flex ">
          <div className="relative h-[150px] 2xl:h-full w-[50%] object-cover rounded-md">
            <Image
              src={data?.organiser_image_url}
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
            <div className="flex gap-2 items-center justify-center">
              <Link href={data?.organizer_facebook_url} target="_blank">
                <FaFacebookF />
              </Link>
              <Link href={data?.organizer_twitter_url} target="_blank">
                <FaXTwitter />
              </Link>
              <Link href={data?.organizer_linkedin_url} target="_blank">
                <FaLinkedinIn />
              </Link>
              <Link href={data?.organiser_website} target="_blank">
                <TbWorld />
              </Link>
            </div>
          </div>
        </div>
        <div className="h-[150px] w-[350px] border border-[#596275] border-opacity-50 rounded-md flex ">
          <div className="relative h-[150px] 2xl:h-full w-[50%] object-cover rounded-md">
            <Image
              src="https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg"
              layout="fill"
              objectFit="cover" // This determines how the image fills the container
              alt="Description of the image"
              className="p-3 rounded-md "
            />
          </div>
          <div className="flex flex-col gap-2 items-start justify-center p-2">
            <div className="font-bold">Dark Knight</div>
            <div>Batman</div>
            <div>Gotham</div>
            <div className="flex gap-2 items-center justify-center">
              <Link href={data?.organizer_facebook_url} target="_blank">
                <FaFacebookF />
              </Link>
              <Link href={data?.organizer_twitter_url} target="_blank">
                <FaXTwitter />
              </Link>
              <Link href={data?.organizer_linkedin_url} target="_blank">
                <FaLinkedinIn />
              </Link>
              <Link href={data?.organiser_website} target="_blank">
                <TbWorld />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;
