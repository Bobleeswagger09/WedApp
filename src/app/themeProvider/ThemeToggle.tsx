"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensures theme is loaded before rendering
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-gray-200 transition-colors duration-500"
    >
      <Image
        src={theme === "dark" ? "/moon.webp" : "/sun.png"}
        alt={theme === "dark" ? "Light Mode" : "Dark Mode"}
        width={24}
        height={24}
      />
    </button>
  );
}
