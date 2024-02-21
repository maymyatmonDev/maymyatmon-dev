"use client";

import styles from "@/styles";
import { motion } from "framer-motion";
import { TextGradient } from ".";
import ThemeSwitcher from "./ThemeSwitcher";

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
      className={`${styles.xPaddings} sm:py-8 pt-8 pb-4 relative`}
    >
      <div
        className={`${styles.innerWidth} flex justify-between gap-8 items-center`}
      >
        <TextGradient
          text="M3 Portfolio"
          textStyles="md:text-[18px] text-[14px] font-bold"
        />
        <ThemeSwitcher />
      </div>
    </motion.nav>
  );
};

export default Navbar;
