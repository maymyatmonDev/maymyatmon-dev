"use client";
import styles from "@/styles";
import { motion } from "framer-motion";
import { TextGradient } from ".";

const Footer = () => {
  return (
    <div className="lg:py-0 pt-6 pb-8">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },
          show: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate="show"
        transition={{
          delay: 8,
          ease: "easeIn",
        }}
        className={`${styles.xPaddings} flex sm:gap-2 gap-1 items-center`}
      >
        <TextGradient
          text="maymyatmon.dev@gmail.com"
          link="mailto:maymyatmon.dev@gmail.com"
          textStyles="lg:pl-4 lg:text-[20px] text-[14px] md:px-2 pl-2"
        />
        <a href="https://www.linkedin.com/in/may-myat-mon/" target="_blank">
          <img
            src="/linkedin.svg"
            className="sm:w-[16px] sm:h-[16px] w-[14px] h-[14px]"
          />
        </a>
        <a href="https://github.com/maymyatmonDev" target="_blank">
          <img
            src="/github.svg"
            className="sm:w-[16px] sm:h-[16px] w-[14px] h-[14px]"
          />
        </a>
      </motion.div>
    </div>
  );
};

export default Footer;
