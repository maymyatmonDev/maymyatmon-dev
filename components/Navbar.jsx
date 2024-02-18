"use client";

import styles from "@/styles";
import { motion } from "framer-motion";
import { TextGradient } from ".";

const Navbar = () => {
  return (
    <motion.nav
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
        delay: 1,
        ease: "easeIn",
      }}
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-03 opacity-80	" />
      <div
        className={`${styles.innerWidth} flex justify-between gap-8 items-center`}
      >
        <TextGradient
          text="M3 Portfolio"
          textStyles="md:text-[24px] text-[18px] font-bold"
        />
        <img
          src="/dark-icon.svg"
          alt="dark-mode"
          className="md:w-[30px] w-[20px] md:h-[30px] h-[20px] object-contain cursor-pointer"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
