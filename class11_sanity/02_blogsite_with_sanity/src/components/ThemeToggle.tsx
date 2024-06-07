"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center"
    >
      <Sun
        className={`w-6 h-6 -rotate-90 scale-0 transition-all  dark:rotate-0 dark:scale-100 `}
      />

      <Moon
        className={`w-6 h-6 rotate-0 scale-100 transition-all  dark:rotate-90  dark:hidden `}
      />
    </button>
  );
}
