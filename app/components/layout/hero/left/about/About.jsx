import { Context } from "@/app/contexts/Context";
import React, { useContext } from "react";
import styles from "./ConsentMessage.module.css";

const About = () => {
  const { data } = useContext(Context);
  return (
    <section className="my-10 md:p-0 p-2">
      <div className="font-bold text-[20px] my-3">ABOUT EVENT</div>
      <div
        dangerouslySetInnerHTML={{ __html: data.description }}
        className={`${styles['consent-text']} w-full overflow-hidden`} // Applying Tailwind's full width utility
        />
    </section>
  );
};

export default About;
