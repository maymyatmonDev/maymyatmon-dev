"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <img
      src={theme === "dark" ? "/light-icon.svg" : "/dark-icon.svg"}
      alt="dark-mode"
      className="md:w-[25px] w-[15px] md:h-[25px] h-[15px] dark:md:w-[21px] dark:w-[13px] object-contain cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  );
};

export default ThemeSwitcher;
