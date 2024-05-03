"use client";

import { MoonIcon, SunIcon } from "@/app/components";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className="border border-purple-500 rounded-2xl p-1 hover:bg-purple-500 dark:hover:bg-amber-50 hover:bg-opacity-10 dark:hover:bg-opacity-10"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};
