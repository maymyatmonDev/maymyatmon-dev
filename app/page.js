"use client";
import styles from "@/styles";
import { GlassCard } from "@/components";

const Home = () => {
  return (
    <div
      className={`${styles.xPaddings} py-8 flex flex-col items-center justify-between`}
    >
      <GlassCard>
        <h1>Hello</h1>
      </GlassCard>
    </div>
  );
};

export default Home;
