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
        {/* <div className="flex items-center justify-start xl:gap-3 gap-1 flex-wrap">
          <h1 className="xl:text-3xl lg:text-2xl md:text-xl font-bold">
            "Hey there, it's great to have you here!" This is May Myat Mon
          </h1>
          <div className="md:w-[32px] w-[20px] h-[2px] bg-gradient-to-r from-modern-purple from-8% via-modern-blue via-90% to-modern-purple to-2%"></div>
          <TextGradient
            text="M3"
            textStyles="xl:text-3xl lg:text-2xl md:text-xl font-bold"
          />
        </div> */}
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
            delay: 3.2,
            ease: "easeIn",
          }}
          className="xl:text-[20px] md:text-[16px] text-[14px] lg:pt-[30px] pt-[20px] tlg:leading-8 xl:leading-10 lg:w-[65%] w-[80%]"
        >
          I'm a{" "}
          <motion.span
            variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
              },
            }}
            initial="hidden"
            animate="show"
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
              when: "beforeChildren",
            }}
          >
            <TextGradient text="Frontend Engineer" textStyles="font-normal" />{" "}
          </motion.span>
          with a passion for crafting innovative digital experiences. <br />I
          specialize in web app development using{" "}
          <TextGradient text="React" textStyles="font-normal" /> and frontend UI
          development, and I love designing and building{" "}
          <TextGradient text="creative" textStyles="font-normal" /> projects in
          my free time.
        </motion.p>
        {/* <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
              height: 0,
            },
            show: {
              opacity: 1,
              y: 0,
              height: 150,
            },
          }}
          initial="hidden"
          animate="show"
          transition={{
            delay: 3.2,
            ease: "easeIn",
            duration: 0.5,
          }}
        /> */}
        {/* <motion.p
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
            delay: 3.7,
            ease: "easeIn",
            duration: 0.5,
          }}
          className="xl:text-[20px] md:text-[16px] text-[14px] lg:leading-8 xl:leading-10 lg:w-[60%] w-[75%]"
        >
          If you're looking for a frontend developer who can bring your digital
          vision to life, I'd love to hear from you. Feel free to check out my{" "}
          <motion.span
          // variants={{
          //   hidden: {
          //     opacity: 0,
          //   },
          //   show: {
          //     opacity: 1,
          //   },
          // }}
          // initial="hidden"
          // animate="show"
          // transition={{
          //   duration: 0.6,
          //   ease: "easeInOut",
          //   repeat: Infinity,
          //   repeatDelay: 1,
          //   when: "beforeChildren",
          // }}
          >
            <a
              href="/resume-sample.pdf"
              download="/resume-sample.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TextGradient text="Resume" textStyles="font-normal" />{" "}
            </a>
          </motion.span>{" "}
          I'm also active on{" "}
          <TextGradient
            text="LinkedIn"
            textStyles="font-normal"
            link="https://www.linkedin.com/feed/"
          />{" "}
          , so feel free to connect with me there if you'd like.
        </motion.p> */}
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
          delay: 3.2,
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
          delay: 3.7,
          ease: "easeIn",
          duration: 0.5,
        }}
        className="md:text-[16px] text-[12px] lg:leading-6 xl:leading-8 lg:w-[60%] w-[90%] lg:px-4 px-2 md:mt-0 mt-[-50px]"
      >
        If you're looking for a frontend developer who can bring your digital
        vision to life, I'd love to hear from you. Feel free to check out my{" "}
        <motion.span
        // variants={{
        //   hidden: {
        //     opacity: 0,
        //   },
        //   show: {
        //     opacity: 1,
        //   },
        // }}
        // initial="hidden"
        // animate="show"
        // transition={{
        //   duration: 0.6,
        //   ease: "easeInOut",
        //   repeat: Infinity,
        //   repeatDelay: 1,
        //   when: "beforeChildren",
        // }}
        >
          <a
            href="/resume-sample.pdf"
            download="/resume-sample.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TextGradient text="Resume" textStyles="font-normal" />{" "}
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
