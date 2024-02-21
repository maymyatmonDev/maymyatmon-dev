"use client";
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingTextHero = () => {
  let title = `Hey there, it's great to have you here! This is May Myat Mon`;
  return (
    <div className="flex items-center lg:gap-3 gap-1 gap-x-2 flex-wrap">
      <motion.p
        variants={textContainer}
        className={`xl:text-3xl lg:text-2xl md:text-xl font-bold flex flex-wrap`}
      >
        {Array.from(title).map((letter, index) => (
          <motion.span
            key={index}
            variants={textVariant2}
            className="dark:text-secondary-white"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.p>
      <motion.div
        initial={{ width: 0, height: "2px" }}
        animate={{ width: "32px", height: "2px" }}
        transition={{ delay: title.length * 0.04, when: "beforeChildren" }} // Trigger animation before children (text)
        className="md:w-[32px] w-[20px] h-[2px] bg-gradient-to-r from-modern-purple from-8% via-modern-blue via-90% to-modern-purple to-2%"
      />
      <motion.p
        initial={{ width: 0 }}
        animate={{ width: "100px" }}
        transition={{
          delay: title.length * 0.05,
          when: "beforeChildren",
          duration: 1,
        }}
        className={`xl:text-3xl lg:text-2xl md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-modern-purple from-8% via-modern-blue via-90% to-modern-purple to-2% overflow-hidden`}
      >
        M3
      </motion.p>
    </div>
  );
};
