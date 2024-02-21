"use client";
import styles from "@/styles";
import { GlassCard, TextGradient } from "@/components";
import { motion } from "framer-motion";
import { TypingTextHero } from "@/components";

const Home = () => {
  return (
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
        delay: 1.5,
        ease: "easeIn",
      }}
      className={`${styles.xPaddings} md:py-8 py-2 flex flex-col justify-between`}
    >
      <GlassCard className="md:px-8 md:py-12 py-6 px-5">
        <TypingTextHero />
        <motion.p
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
              height: 0,
            },
            show: {
              opacity: 1,
              y: 0,
              height: "auto",
            },
          }}
          initial="hidden"
          animate="show"
          transition={{
            delay: 6,
            ease: "easeIn",
          }}
          className="dark:text-secondary-white xl:text-[20px] md:text-[16px] text-[14px] lg:pt-[30px] pt-[20px] tlg:leading-8 xl:leading-10 lg:w-[65%] md:w-[80%] w-[97%] font-[300]"
        >
          I'm a{"  "}
          <span className="text-gradient-animate text-transparent font-[400] italic animate-gradientText">
            Frontend Engineer
          </span>
          {"  "}
          with a passion for crafting innovative digital experiences. <br />I
          specialize in web app development using{" "}
          <TextGradient text="React" textStyles="font-normal" /> and frontend UI
          development, and I love designing and building{" "}
          <TextGradient text="creative" textStyles="font-normal" /> projects in
          my free time.
        </motion.p>
      </GlassCard>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
            height: 0,
          },
          show: {
            opacity: 1,
            y: 0,
            height: 100,
          },
        }}
        initial="hidden"
        animate="show"
        transition={{
          delay: 7,
          ease: "easeIn",
          duration: 0.5,
        }}
      />
      <motion.p
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
            height: 0,
          },
          show: {
            opacity: 1,
            y: 0,
            height: "auto",
          },
        }}
        initial="hidden"
        animate="show"
        transition={{
          delay: 7,
          ease: "easeIn",
          duration: 0.5,
        }}
        className="dark:text-secondary-white md:text-[16px] text-[12px] lg:leading-6 xl:leading-8 lg:w-[60%] w-[90%] lg:px-4 px-2 md:mt-0 mt-[-50px] font-[300]"
      >
        If you're looking for a frontend developer who can bring your digital
        vision to life, I'd love to hear from you. Feel free to check out my{" "}
        <motion.span>
          <a
            href="/resume-sample.pdf"
            download="/resume-sample.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TextGradient text="Resume" textStyles="font-normal" />
          </a>
        </motion.span>
        . I'm also active on{" "}
        <TextGradient
          text="LinkedIn"
          textStyles="font-normal"
          link="https://www.linkedin.com/feed/"
        />
        , so feel free to connect with me there if you'd like.
      </motion.p>
    </motion.div>
  );
};

export default Home;
