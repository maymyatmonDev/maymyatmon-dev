"use client";

import styles from "@/styles";
import { motion } from "framer-motion";
import { TextGradient } from ".";

const Navbar = () => {
  return (
    <motion.div className={`${styles.xPaddings} py-8 relative`}>
      <div className="absolute w-[50%] inset-0 gradient-03" />
      <div className={`${styles.innerWidth} flex justify-between gap-8`}>
        <TextGradient text="M3 Portfolio" textStyles="text-[24px]" />
        <img
          src="/dark-icon.svg"
          alt="dark-mode"
          className="w-[30px] h-[30px] object-contain cursor-pointer"
        />
      </div>
    </motion.div>
  );
};

export default Navbar;
